import { access } from 'fs/promises'
import { httpStoreJson, trustedProxy } from '../fileModels/httpStore.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { haSubcontainer } from '../utils'

const exists = (path: string) =>
  access(path).then(
    () => true,
    () => false,
  )

export const bootstrapHa = sdk.setupOnInit(async (effects, _kind, progress) => {
  // No settings store means Home Assistant has never run far enough to write
  // one — a fresh install, or an update from a release that was installed and
  // never started. Either way the proxy trust has nowhere to go until Home
  // Assistant has authored it. Surface the wait as an install phase: it can
  // take a while on slower hardware, and it is opaque (we only know it's done
  // once the files appear), so the phase is indeterminate.
  if (!(await exists(sdk.volumes.config.subpath('.storage/http')))) {
    const phase = progress.addPhase(
      i18n('Generating Home Assistant configuration'),
    )
    phase.start()
    await sdk.Daemons.of(effects)
      .addDaemon('bootstrap', {
        subcontainer: haSubcontainer(effects, 'home-assistant-bootstrap'),
        exec: { command: sdk.useEntrypoint(), runAsInit: true },
        ready: {
          display: null,
          fn: async () => ({
            // scenes.yaml is the last file HA's _write_default_config writes,
            // and .storage/http is only written once the web server has come
            // up — together they mean the config tree and the settings store
            // HA seeds it with are both on disk.
            result:
              (await exists(sdk.volumes.config.subpath('scenes.yaml'))) &&
              (await exists(sdk.volumes.config.subpath('.storage/http')))
                ? 'success'
                : 'failure',
            message: null,
          }),
        },
        requires: [],
      })
      .runUntilSuccess(300_000)
    phase.complete()
  }

  // A store Home Assistant has yet to migrate has no `stable`; writing into it
  // would leave a hybrid for that migration to read, and it carries the trust
  // across on its own, so leave it be.
  const stable = (await httpStoreJson.read().once())?.data.stable
  if (stable) {
    const trusted = stable.trusted_proxies ?? []
    await httpStoreJson.merge(effects, {
      data: {
        stable: {
          use_x_forwarded_for: stable.use_x_forwarded_for ?? true,
          trusted_proxies: trusted.includes(trustedProxy)
            ? trusted
            : [...trusted, trustedProxy],
        },
      },
    })
  }
})
