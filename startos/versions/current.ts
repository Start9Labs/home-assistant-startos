import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.5.4:1',
  releaseNotes: {
    en_US:
      'Add Set Up HACS and Remove HACS actions for the Home Assistant Community Store.',
    es_ES:
      'Añade las acciones Configurar HACS y Eliminar HACS para Home Assistant Community Store.',
    de_DE:
      'Fügt die Aktionen „HACS einrichten“ und „HACS entfernen“ für den Home Assistant Community Store hinzu.',
    pl_PL:
      'Dodaje akcje „Skonfiguruj HACS“ i „Usuń HACS“ dla Home Assistant Community Store.',
    fr_FR:
      'Ajoute les actions « Configurer HACS » et « Supprimer HACS » pour le Home Assistant Community Store.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
