<p align="center">
  <img src="icon.svg" alt="Home Assistant Logo" width="21%">
</p>

# Home Assistant on StartOS

> Everything not listed in this document should behave the same as upstream
> Home Assistant. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Home Assistant](https://github.com/home-assistant/core) is a home-automation platform. This package runs Home Assistant Core unmodified, teaches it to trust the reverse proxy in front of it, and can install the community add-on store on request.

- **Upstream repo:** <https://github.com/home-assistant/core>
- **Wrapper repo:** <https://github.com/Start9Labs/home-assistant-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The upstream image is used unmodified, with its own entrypoint, run as the container's init process.

| Property      | Value                                                                   |
| ------------- | ----------------------------------------------------------------------- |
| Image         | `ghcr.io/home-assistant/home-assistant`                                 |
| Architectures | x86_64, aarch64                                                         |
| Entrypoint    | Upstream default, run as init                                           |
| Subcontainer  | `home-assistant-sub` — the `primary` daemon, and the one to `attach` to |

Three further subcontainers exist from the same image, each short-lived: `home-assistant-bootstrap` during install, and `reset-password` and `set-up-hacs` / `remove-hacs` for their respective actions.

## Volume and Data Layout

Two volumes.

| Volume   | Mount Point | Purpose                                                                                                        |
| -------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `config` | `/config`   | Home Assistant's entire configuration tree — `configuration.yaml`, `.storage/`, automations, custom components |
| `main`   | `/data`     | `store.json`                                                                                                   |

Everything Home Assistant persists is on `config`, including its user database and settings store; `main` carries only this package's own state.

## File Models

Three models, and the package writes remarkably little: Home Assistant owns its configuration, and this package's job is to make one setting correct.

| File                         | Format | Modelled                | Written by                                    |
| ---------------------------- | ------ | ----------------------- | --------------------------------------------- |
| `/config/.storage/http`      | JSON   | Yes — `FileHelper.json` | Init, when the reverse-proxy trust is missing |
| `/config/configuration.yaml` | YAML   | Yes — `FileHelper.yaml` | A version migration only                      |
| `/data/store.json`           | JSON   | Yes — `FileHelper.json` | Every init, and the HACS actions              |

### .storage/http

Home Assistant's own web-server settings, which it manages from its interface. **Only two keys are modelled** — `use_x_forwarded_for` and `trusted_proxies` — so everything else in the store round-trips untouched, and neither is defaulted, so init can tell an absent key from one already holding the value it wants.

The single change the package makes is to **add the StartOS bridge network to the trusted-proxy list**, because Home Assistant sits behind a reverse proxy and would otherwise reject its requests or attribute every client to the proxy. The bridge is _appended_ to whatever is already there rather than replacing it, and `use_x_forwarded_for` is only set if absent — so a value you have chosen in Home Assistant's own settings survives.

There is one case where the package deliberately does nothing: a store Home Assistant has not yet migrated has no `stable` section. Writing into it would leave a hybrid for that migration to read, and the migration carries the trust setting across on its own.

### configuration.yaml

Modelled but not managed. The only write is a version migration removing the `http:` block earlier releases of this package wrote — Home Assistant now owns those settings in its own store and ignores the file's version.

The model registers handlers for Home Assistant's custom YAML tags (`!include`, `!secret`, `!env_var`, and the `!include_dir_*` family). Without them a round-trip would silently drop any such directive, which is a thing users legitimately add over SSH.

### store.json

`hacsInstalled` alone: whether the community store's files are present. It is what makes the two HACS actions mutually exclusive in the interface.

## Dependencies

None.

## Network Access and Interfaces

One interface, serving the dashboard and Home Assistant's API.

| Interface | Id   | Type | Port | Description                      |
| --------- | ---- | ---- | ---- | -------------------------------- |
| Web UI    | `ui` | ui   | 8123 | The Home Assistant web interface |

The port is bound on the `ui-multi` MultiHost and is not masked. **Leave Home Assistant's own port setting at 8123** — it is configurable inside Home Assistant, and changing it there makes the dashboard unreachable, since the binding points at the original port.

## Installation and First-Run Flow

Install runs Home Assistant once before you ever see it, because the setting the package needs to change does not exist until Home Assistant has authored it.

1. **Home Assistant is started in a temporary subcontainer** and left running until it has written both its default configuration tree and its settings store. This is reported as an install progress phase — indeterminate, because completion is only detectable by the files appearing — and bounded at five minutes.
2. **The reverse proxy is added to the trusted-proxy list** in that store.
3. The temporary instance is shut down and the service starts normally.

This also runs on an update from a release that was installed but never started, since the same files would still be missing.

Account creation is Home Assistant's own: the first visit to the dashboard registers the owner.

## Actions

Three actions. Two of them are a pair — only one is ever visible.

### Reset Password

Generates a new password for a Home Assistant user, chosen from the accounts in its auth store.

- **What it changes:** that user's password, through Home Assistant's own `auth` script.
- **Availability:** **only while the service is stopped**, and that is load-bearing: Home Assistant caches the auth store in memory and rewrites it on a graceful shutdown, so a reset applied to a running instance would be silently reverted.
- **Repeat safety:** safe to re-run; each run generates a fresh password.
- **Outputs:** the username and new password, the password masked and copyable.
- **Scope:** the built-in username-and-password provider only. Accounts from other auth providers have no password to reset.

### Set Up HACS

Adds the community store's files to the configuration tree. Setup is finished inside Home Assistant afterwards.

- **What it changes:** unpacks HACS into `/config/custom_components`. The archive is bundled in the package, so no network access is needed.
- **Cost:** seconds, then a restart if the service is running; if it is stopped the files take effect at the next start.
- **Repeat safety:** the action hides itself once HACS is installed, which also prevents a re-run from overwriting — and so downgrading — a HACS that has since updated itself.
- **Worth knowing:** HACS installs community code that Start9 does not review and that runs with full access inside Home Assistant, and it requires a GitHub account.

### Remove HACS

The mirror of the above, visible only while HACS is installed.

- **What it changes:** deletes HACS's own files and its stored data. **Anything installed _through_ HACS is left in place** — integrations, cards, and themes are yours — and your GitHub authorization is not revoked.
- **Order matters:** remove the HACS integration inside Home Assistant first, then run this.
- **Cost:** seconds, then a restart if running.

## Tasks

None. This package raises no tasks, so the service is never held on a prompt and its ordinary controls are always available.

## Health Checks

One check, on the primary daemon.

| Check                     | Method                 | Grace Period |
| ------------------------- | ---------------------- | ------------ |
| `primary` "Web Interface" | Port 8123 is listening | 60 seconds   |

The grace period covers Home Assistant's startup, which loads every configured integration before the web server binds. A failure after that means the process is down or crash-looping — the usual cause is a configuration error, which Home Assistant reports in the service logs.

## Backups and Restore

Both volumes are copied wholesale — `sdk.Backups.ofVolumes('main', 'config')`. No dump step and nothing excluded.

- **Included:** the whole configuration tree — automations, dashboards, the user database, integration credentials, the recorder database, and anything HACS installed.
- **Restore:** complete, and no reconfiguration is needed. The trusted-proxy setting comes back with the store, and init leaves it alone since it is already present.

The recorder database grows with history, so the backup grows with it.

## Limitations and Differences

1. **Home Assistant Core, not Home Assistant OS.** The supervisor and its add-on store are not part of this package; HACS is the community equivalent and is optional.
2. **Leave the web-server port at 8123.** It is changeable inside Home Assistant and doing so makes the dashboard unreachable.
3. **The StartOS bridge is added to the trusted-proxy list** so the reverse proxy in front of Home Assistant works. Existing entries are preserved.
4. **Resetting a password requires stopping the service**, because Home Assistant would otherwise overwrite the change on shutdown.
5. **HACS installs unreviewed community code** that runs with full access, and needs a GitHub account.
6. **Removing HACS leaves what it installed.** Those files are yours to remove.
7. **No riscv64 build.** x86_64 and aarch64 only.

---

## Quick Reference for AI Consumers

```yaml
package_id: home-assistant
image: ghcr.io/home-assistant/home-assistant
architectures:
  - x86_64
  - aarch64
subcontainers:
  - home-assistant-sub # the running daemon
  - home-assistant-bootstrap # install only
  - reset-password # temporary; the Reset Password action
  - set-up-hacs # temporary; the HACS actions
volumes:
  config: /config
  main: /data
file_models:
  - /config/.storage/http # only trusted_proxies and use_x_forwarded_for are modelled
  - /config/configuration.yaml # migration only
  - /data/store.json
startos_managed_env_vars: []
dependencies: []
interfaces:
  ui: { type: ui, port: 8123 }
actions:
  - reset-password # only-stopped
  - set-up-hacs # hidden once HACS is installed
  - remove-hacs # hidden unless HACS is installed
tasks: []
health_checks:
  - primary # the daemon's ready check, displayed "Web Interface"
```
