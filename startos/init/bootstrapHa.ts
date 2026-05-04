import { access } from 'fs/promises'
import { configurationYaml } from '../fileModels/configuration.yaml'
import { sdk } from '../sdk'
import { haSubcontainer } from '../utils'

// If configuration.yaml is missing (fresh install, or wiped by an up
// migration), run HA briefly so its `async_create_default_config` writes a
// complete configuration.yaml plus empty automations/scripts/scenes/secrets.
// Then merge our `http` overlay over the top. The merge runs unconditionally
// so the schema's catches re-enforce our settings even if the user edited
// them out via SSH.
export const bootstrapHa = sdk.setupOnInit(async (effects) => {
  if ((await configurationYaml.read().once()) === null) {
    await sdk.Daemons.of(effects)
      .addDaemon('bootstrap', {
        subcontainer: await haSubcontainer(
          effects,
          'home-assistant-bootstrap',
        ),
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
