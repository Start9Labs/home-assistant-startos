# Home Assistant

## Documentation

- [Home Assistant documentation](https://www.home-assistant.io/docs/) — the upstream user and integrator guide for configuration, automations, dashboards, and integrations.

## What you get on StartOS

- A **Web UI** interface that opens the standard Home Assistant dashboard — onboarding wizard on first launch, then the dashboards, integrations, automations, and settings you'd see on any Container install.
- The **Container** flavour of Home Assistant (not Home Assistant OS). Home Assistant runs as a single image; there is no Supervisor and no Add-on store.
- A `config` volume holding `configuration.yaml` and the standard upstream side files (`automations.yaml`, `scripts.yaml`, `scenes.yaml`, `secrets.yaml`). Home Assistant writes the upstream defaults on first install, and StartOS sets up the reverse proxy trust in Home Assistant's web server settings so the dashboard is reachable.

## Getting set up

1. Open the **Web UI** interface. Home Assistant's onboarding wizard runs on first launch.
2. Create your owner account, set your location and units, then let Home Assistant scan for devices on your network.
3. Add the integrations you need from the **Settings → Devices & Services** page inside Home Assistant.

## Using Home Assistant

Everything you do day-to-day — adding integrations, building automations, editing dashboards, managing users — happens inside the Home Assistant Web UI exactly as upstream documents. Advanced configuration is done by editing files in the `config` volume over SSH; see the upstream docs linked above.

### Actions

- **Reset Password** — generate a new password for a Home Assistant user account. Pick the username from the dropdown and a fresh password is returned. Home Assistant must be stopped before you run this: the running service caches auth state in memory and would overwrite the reset on next shutdown.
- **Set Up HACS** / **Remove HACS** — add or remove [HACS](#community-store-hacs), the community store for integrations, cards, and themes. Only one shows at a time; **Set Up HACS** just adds the files — you finish setup inside Home Assistant.

## Community store (HACS)

[HACS](https://hacs.xyz) installs community **integrations, dashboard cards, and themes** (not add-ons — those need Home Assistant OS) from inside Home Assistant. Two caveats first: it runs **community code that Start9 does not review**, with full access inside Home Assistant, and it needs a **free GitHub account**. What it installs stays in the `config` volume, so StartOS backups cover it.

**Set Up HACS** adds the bundled HACS files and reloads Home Assistant; **Remove HACS** deletes them (it replaces Set Up once HACS is installed). Set Up does **not** activate HACS — finish that yourself:

### Finish setting up HACS

1. In Home Assistant: **Settings → Devices & Services → Add Integration**, search **HACS**, and accept the prompts.
2. HACS shows an 8-character code. Open **<https://github.com/login/device>**, sign in to GitHub, enter the code, and select **Authorize HACS**.
3. Open the **HACS** panel and install what you want. (A new integration needs a Home Assistant restart; cards and themes don't.)

After this, **HACS updates itself** (Settings → Updates) — nothing to do from StartOS. If you remove HACS, delete its integration in Home Assistant first; anything you installed through it remains until you remove it.

## Limitations

This is the **Container** installation of Home Assistant, not Home Assistant OS. The following upstream features are not available and the upstream docs that reference them do not apply:

- **Add-ons / the Add-on Store** — requires the Supervisor, which only ships with Home Assistant OS and Home Assistant Supervised. Integrations that upstream documents as "install the X add-on" (Z-Wave JS, Mosquitto, Thread border router, Whisper, Piper, etc.) need to be installed and run separately. This does **not** affect HACS, which installs community _integrations_, cards, and themes (not add-ons) — see [Community store (HACS)](#community-store-hacs).
- **Home Assistant's built-in Backup UI** — also Supervisor-only. Use StartOS backups (the `config` and `main` volumes are included) instead.
- **Home Assistant's own update mechanism** — updates ship through the StartOS marketplace.

Home Assistant's web server settings live under **Settings → System → Network** as of 2026.8. StartOS sets them up for you — trusted proxy `10.0.3.0/24` with `use_x_forwarded_for` enabled, on port 8123 — so the reverse proxy can reach the dashboard. Leave the port and the trusted proxy as they are; changing either makes the **Web UI** interface unreachable. If you do lock yourself out, Home Assistant restores the previous settings and restarts after five minutes. Every key in `configuration.yaml` is yours to edit freely.
