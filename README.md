<p align="center">
  <img src="icon.png" alt="Home Assistant Logo" width="21%">
</p>

# Home Assistant on StartOS

> **Upstream docs:** <https://www.home-assistant.io/docs/>
>
> Everything not listed in this document should behave the same as upstream
> Home Assistant Container 2026.1.3. If a feature, setting, or behavior is not mentioned
> here, the upstream documentation is accurate and fully applicable.

[Home Assistant](https://github.com/home-assistant/core) is an open-source home automation platform that puts local control and privacy first. It supports thousands of devices and services for smart home automation.

**Important:** This is the **Container** installation type, not Home Assistant OS. Some features available in Home Assistant OS are not available in Container installations.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Dependencies](#dependencies)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| Property | Value |
|----------|-------|
| Image | `ghcr.io/home-assistant/home-assistant:2026.1.3` (upstream unmodified) |
| Architectures | x86_64, aarch64 |
| Installation Type | Container (not Home Assistant OS) |

---

## Volume and Data Layout

| Volume | Mount Point | Purpose |
|--------|-------------|---------|
| `main` | `/data` | Home Assistant data |
| `config` | `/config` | Configuration files (`configuration.yaml`, etc.) |

**StartOS-specific files:**

- `configuration.yaml` — managed with `default_config` enabled

---

## Installation and First-Run Flow

| Step | Upstream | StartOS |
|------|----------|---------|
| Installation | Docker pull + compose | Install from marketplace |
| Initial setup | Create owner account at first access | Same as upstream |
| Configuration | Edit `configuration.yaml` | Same as upstream |

**First-run steps:**

1. Install Home Assistant from StartOS marketplace
2. Access the web UI
3. Create your owner account through the onboarding wizard
4. Configure integrations and devices

---

## Configuration Management

Home Assistant configuration is managed entirely through upstream methods:

- **Web UI** — Settings, integrations, automations, dashboards
- **configuration.yaml** — Advanced configuration (in `/config` volume)
- **YAML files** — Automations, scripts, scenes can be file-based

StartOS does not expose any Home Assistant settings through actions. All configuration is done within Home Assistant itself.

---

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose |
|-----------|------|----------|---------|
| Web UI | 8123 | HTTP | Home Assistant dashboard |

**Access methods (StartOS 0.4.0):**

- LAN IP with unique port
- `<hostname>.local` with unique port
- Tor `.onion` address
- Custom domains (if configured)

---

## Actions (StartOS UI)

None. All configuration is done within Home Assistant's web interface.

---

## Dependencies

None. Home Assistant is a standalone application.

---

## Backups and Restore

**Included in backup:**

- `main` volume — Home Assistant data
- `config` volume — All configuration files

**Restore behavior:**

- Full configuration, automations, and history restored
- Integrations and devices preserved
- User accounts restored

**Note:** This is StartOS backup, not Home Assistant's built-in backup feature (which is not available in Container installations).

---

## Health Checks

| Check | Display Name | Method | Grace Period |
|-------|--------------|--------|--------------|
| Web UI | Web Interface | Port 8123 listening | 60 seconds |

**Messages:**

- Success: "The web interface is ready"
- Error: "The web interface is not ready"

---

## Limitations and Differences

These limitations apply to all Home Assistant Container installations, not just StartOS:

1. **No Add-ons/Apps** — The Home Assistant Add-on store is not available (requires Home Assistant OS/Supervised)
2. **No Supervisor** — Cannot manage the system through Home Assistant
3. **Limited Thread support** — Thread border router requires add-ons
4. **Limited Z-Wave support** — Z-Wave JS requires manual setup (no add-on)
5. **No built-in backups** — Home Assistant's backup UI is not available (use StartOS backups instead)

**StartOS-specific notes:**

- Updates are managed through StartOS, not Home Assistant's update mechanism
- Device access (USB, Bluetooth) depends on StartOS hardware permissions

---

## What Is Unchanged from Upstream

- Full Home Assistant Core functionality
- All integrations (2000+)
- Automations, scripts, and scenes
- Dashboards and Lovelace UI
- Energy management
- Voice assistant support
- Mobile app companion support
- REST API and WebSocket API
- MQTT support
- Configuration via YAML or UI
- User and permission management

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: home-assistant
upstream_version: 2026.1.3
image: ghcr.io/home-assistant/home-assistant:2026.1.3
installation_type: container
architectures: [x86_64, aarch64]
volumes:
  main: /data
  config: /config
ports:
  ui: 8123
dependencies: none
actions: none
health_checks:
  - port_listening: 8123 (60s grace period)
backup_volumes:
  - main
  - config
not_available:
  - Add-ons/Apps store
  - Supervisor
  - Built-in backup UI
  - Thread border router (via add-on)
  - Z-Wave JS add-on (manual setup required)
container_limitations:
  - All standard Home Assistant Container limitations apply
  - See https://www.home-assistant.io/installation/ for details
```
