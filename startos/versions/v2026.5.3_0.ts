import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'
import { configurationYaml } from '../fileModels/configuration.yaml'
import { regenerateDefaults } from '../init/bootstrapHa'
import { sdk } from '../sdk'

export const v_2026_5_3_0 = VersionInfo.of({
  version: '2026.5.3:0',
  releaseNotes: {
    en_US: `- Home Assistant → 2026.5.3
- start-sdk → 1.5.3`,
    es_ES: `- Home Assistant → 2026.5.3
- start-sdk → 1.5.3`,
    de_DE: `- Home Assistant → 2026.5.3
- start-sdk → 1.5.3`,
    pl_PL: `- Home Assistant → 2026.5.3
- start-sdk → 1.5.3`,
    fr_FR: `- Home Assistant → 2026.5.3
- start-sdk → 1.5.3`,
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
