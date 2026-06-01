import { access } from 'fs/promises'
import { configurationYaml } from '../fileModels/configuration.yaml'
import { sdk } from '../sdk'
import { haSubcontainer } from '../utils'

export const bootstrapHa = sdk.setupOnInit(async (effects, kind) => {
  if (kind === 'install') {
    await sdk.Daemons.of(effects)
      .addDaemon('bootstrap', {
        subcontainer: await haSubcontainer(effects, 'home-assistant-bootstrap'),
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
  }

  await configurationYaml.merge(effects, {})
})
