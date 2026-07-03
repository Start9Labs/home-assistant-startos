import { access } from 'fs/promises'
import { configurationYaml } from '../fileModels/configuration.yaml'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { haSubcontainer } from '../utils'

export const bootstrapHa = sdk.setupOnInit(async (effects, kind, progress) => {
  if (kind === 'install') {
    // First boot lets Home Assistant write its default config tree
    // (configuration.yaml, scenes.yaml, …). Surface it as an install phase —
    // it can take a while on slower hardware. The wait is opaque (we only know
    // it's done once scenes.yaml appears), so the phase is indeterminate:
    // started before the bootstrap run, completed once HA has written its defaults.
    const phase = progress.addPhase(i18n('Generating Home Assistant configuration'))
    phase.start()
    await sdk.Daemons.of(effects)
      .addDaemon('bootstrap', {
        subcontainer: haSubcontainer(effects, 'home-assistant-bootstrap'),
        exec: { command: sdk.useEntrypoint(), runAsInit: true },
        ready: {
          display: null,
          fn: async () => ({
            // scenes.yaml is the last file HA's _write_default_config
            // writes. Once it exists, configuration.yaml + the other
            // include targets do too — bootstrap is finished.
            result: (await access(
              sdk.volumes.config.subpath('scenes.yaml'),
            ).then(
              () => true,
              () => false,
            ))
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

  await configurationYaml.merge(effects, {})
})
