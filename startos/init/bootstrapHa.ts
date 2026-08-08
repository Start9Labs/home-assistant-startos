import { access } from 'fs/promises'
import { configurationYaml } from '../fileModels/configuration.yaml'
import { httpStoreJson, trustedProxy } from '../fileModels/httpStore.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { haSubcontainer } from '../utils'

const exists = (path: string) =>
  access(path).then(
    () => true,
    () => false,
  )

export const bootstrapHa = sdk.setupOnInit(async (effects, kind, progress) => {
  if (kind === 'install') {
    // First boot lets Home Assistant write its default config tree
    // (configuration.yaml, scenes.yaml, …) and settings store. Surface it as an
    // install phase — it can take a while on slower hardware. The wait is opaque
    // (we only know it's done once those files appear), so the phase is
    // indeterminate: started before the bootstrap run, completed once HA has
    // written its defaults.
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

    await httpStoreJson.merge(effects, {
      data: {
        stable: { use_x_forwarded_for: true, trusted_proxies: [trustedProxy] },
      },
    })
  }

  // Home Assistant imports a `http:` block into its settings store once and
  // ignores the YAML from then on, flagging a repair while it is still there.
  const config = await configurationYaml.read().once()
  if (config?.http !== undefined) {
    const { http, ...rest } = config
    await configurationYaml.write(effects, rest)
  }
})
