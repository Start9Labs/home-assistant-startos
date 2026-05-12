import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'
import { configurationYaml } from '../fileModels/configuration.yaml'
import { regenerateDefaults } from '../init/bootstrapHa'
import { sdk } from '../sdk'

export const v_2026_5_1_1 = VersionInfo.of({
  version: '2026.5.1:1',
  releaseNotes: {
    en_US: `**Bumps**

- Home Assistant → 2026.5.1
- start-sdk → 1.5.0`,
    es_ES: `**Actualizaciones**

- Home Assistant → 2026.5.1
- start-sdk → 1.5.0`,
    de_DE: `**Aktualisierungen**

- Home Assistant → 2026.5.1
- start-sdk → 1.5.0`,
    pl_PL: `**Aktualizacje**

- Home Assistant → 2026.5.1
- start-sdk → 1.5.0`,
    fr_FR: `**Mises à jour**

- Home Assistant → 2026.5.1
- start-sdk → 1.5.0`,
  },
  migrations: {
    up: async ({ effects }) => {
      // Carry forward the :1 → :2 configuration.yaml repair for anyone
      // still on 2026.4.2:1. No-op for users already past :2.
      const userContent = await configurationYaml.read().once()
      if (!userContent) return
      await rm(sdk.volumes.config.subpath('configuration.yaml'))
      await regenerateDefaults(effects)
      await configurationYaml.merge(effects, userContent)
    },
    down: IMPOSSIBLE,
  },
})
