import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'
import { configurationYaml } from '../fileModels/configuration.yaml'
import { regenerateDefaults } from '../init/bootstrapHa'
import { sdk } from '../sdk'

export const v_2026_5_3_0 = VersionInfo.of({
  version: '2026.5.3:0',
  releaseNotes: {
    en_US: 'Bumps Home Assistant → 2026.5.3.',
    es_ES: 'Actualiza Home Assistant → 2026.5.3.',
    de_DE: 'Aktualisiert Home Assistant → 2026.5.3.',
    pl_PL: 'Aktualizuje Home Assistant → 2026.5.3.',
    fr_FR: 'Met à jour Home Assistant → 2026.5.3.',
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
