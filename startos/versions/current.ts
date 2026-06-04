import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.6.0:0',
  releaseNotes: {
    en_US: 'Updates Home Assistant to 2026.6.0.',
    es_ES: 'Actualiza Home Assistant a 2026.6.0.',
    de_DE: 'Aktualisiert Home Assistant auf 2026.6.0.',
    pl_PL: 'Aktualizuje Home Assistant do 2026.6.0.',
    fr_FR: 'Met à jour Home Assistant vers 2026.6.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
