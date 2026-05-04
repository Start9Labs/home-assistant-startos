import { T } from '@start9labs/start-sdk'
import { access } from 'fs/promises'
import { configurationYaml } from '../fileModels/configuration.yaml'
import { sdk } from '../sdk'
import { haSubcontainer } from '../utils'

// Run HA briefly so its `async_create_default_config` writes a complete
// configuration.yaml plus empty automations/scripts/scenes/secrets. Used
// from `bootstrapHa` (fresh install) and from the :2 up migration (which
// wants the same upstream defaults before merging the user's prior
// settings on top).
export const regenerateDefaults = async (effects: T.Effects) => {
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

export const bootstrapHa = sdk.setupOnInit(async (effects) => {
  // Fresh install: configuration.yaml is missing, so HA writes it.
  // Upgrades come through the :2 migration, which handles regeneration +
  // user-content preservation directly.
  if ((await configurationYaml.read().once()) === null) {
    await regenerateDefaults(effects)
  }

  // Re-enforce our `http` overlay unconditionally so SSH edits to those
  // two keys are reverted on next init.
  await configurationYaml.merge(effects, {})
})
