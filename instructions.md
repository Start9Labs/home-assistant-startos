# Home Assistant

## Documentation

- [Home Assistant documentation](https://www.home-assistant.io/docs/) — the upstream user and integrator guide for configuration, automations, dashboards, and integrations.

## What you get on StartOS

- A **Web UI** interface that opens the standard Home Assistant dashboard — onboarding wizard on first launch, then the dashboards, integrations, automations, and settings you'd see on any Container install.
- The **Container** flavour of Home Assistant (not Home Assistant OS). Home Assistant runs as a single image; there is no Supervisor and no Add-on store.
- A `config` volume holding `configuration.yaml` and the standard upstream side files (`automations.yaml`, `scripts.yaml`, `scenes.yaml`, `secrets.yaml`). Home Assistant writes the upstream defaults on first install, and StartOS layers an enforced `http` block on top so the reverse proxy can reach the dashboard.

## Getting set up

1. Open the **Web UI** interface. Home Assistant's onboarding wizard runs on first launch.
2. Create your owner account, set your location and units, then let Home Assistant scan for devices on your network.
3. Add the integrations you need from the **Settings → Devices & Services** page inside Home Assistant.

## Using Home Assistant

Everything you do day-to-day — adding integrations, building automations, editing dashboards, managing users — happens inside the Home Assistant Web UI exactly as upstream documents. Advanced configuration is done by editing files in the `config` volume over SSH; see the upstream docs linked above.

### Actions

- **Reset Password** — generate a new password for a Home Assistant user account. Pick the username from the dropdown and a fresh password is returned. Home Assistant must be stopped before you run this: the running service caches auth state in memory and would overwrite the reset on next shutdown.

## Limitations

This is the **Container** installation of Home Assistant, not Home Assistant OS. The following upstream features are not available and the upstream docs that reference them do not apply:

- **Add-ons / the Add-on Store** — requires the Supervisor, which only ships with Home Assistant OS and Home Assistant Supervised. Integrations that upstream documents as "install the X add-on" (Z-Wave JS, Mosquitto, Thread border router, Whisper, Piper, etc.) need to be installed and run separately.
- **Home Assistant's built-in Backup UI** — also Supervisor-only. Use StartOS backups (the `config` and `main` volumes are included) instead.
- **Home Assistant's own update mechanism** — updates ship through the StartOS marketplace.

The `http:` block in `configuration.yaml` (`use_x_forwarded_for` and `trusted_proxies`) is managed by StartOS so that the reverse proxy can reach the dashboard. If you edit those two keys over SSH they are reverted on the next package init; every other key in `configuration.yaml` is yours to edit freely.
