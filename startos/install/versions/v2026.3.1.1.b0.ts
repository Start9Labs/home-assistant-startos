import { VersionInfo } from '@start9labs/start-sdk'

export const v_2026_3_1_1_b0 = VersionInfo.of({
  version: '2026.3.1:1-beta.0',
  releaseNotes: {
    en_US: 'Update Home Assistant from 2026.2.3 to 2026.3.1',
    es_ES: 'Actualización de Home Assistant de 2026.2.3 a 2026.3.1',
    de_DE: 'Update Home Assistant von 2026.2.3 auf 2026.3.1',
    pl_PL: 'Aktualizacja Home Assistant z 2026.2.3 do 2026.3.1',
    fr_FR: 'Mise à jour de Home Assistant de 2026.2.3 à 2026.3.1',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
