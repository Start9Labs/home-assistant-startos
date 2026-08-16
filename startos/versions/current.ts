import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { configurationYaml } from '../fileModels/configuration.yaml'

export const current = VersionInfo.of({
  version: '2026.8.2:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.8.2, a bug-fix release with no new features and no breaking changes.

- Fixes composed devices behind a Matter bridge losing their "via device" link, a race condition in the SMTP integration, and delayed trains being dropped from Israel Rail departures.
- Further fixes for KNX (custom panels), Mikrotik sensors, Reolink, Tado, TP-Link Omada, Victron GX and Husqvarna Automower, plus a frontend update.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    es_ES: `Actualiza Home Assistant a 2026.8.2, una versión de corrección de errores sin nuevas funciones ni cambios incompatibles.

- Corrige que los dispositivos compuestos detrás de un puente Matter perdieran su enlace «a través del dispositivo», una condición de carrera en la integración SMTP y la omisión de trenes retrasados en las salidas de Israel Rail.
- Más correcciones para KNX (paneles personalizados), sensores Mikrotik, Reolink, Tado, TP-Link Omada, Victron GX y Husqvarna Automower, además de una actualización de la interfaz.

Notas de la versión completas: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    de_DE: `Aktualisiert Home Assistant auf 2026.8.2, ein Fehlerbehebungs-Release ohne neue Funktionen und ohne Breaking Changes.

- Behebt, dass zusammengesetzte Geräte hinter einer Matter-Bridge ihre „über Gerät“-Verknüpfung verloren, eine Race Condition in der SMTP-Integration sowie das Wegfallen verspäteter Züge bei den Abfahrten von Israel Rail.
- Weitere Korrekturen für KNX (eigene Panels), Mikrotik-Sensoren, Reolink, Tado, TP-Link Omada, Victron GX und Husqvarna Automower sowie ein Frontend-Update.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    pl_PL: `Aktualizuje Home Assistant do 2026.8.2, wydania poprawkowego bez nowych funkcji i bez zmian powodujących niezgodność.

- Naprawia utratę powiązania „przez urządzenie” przez urządzenia złożone za mostkiem Matter, sytuację wyścigu w integracji SMTP oraz pomijanie opóźnionych pociągów w odjazdach Israel Rail.
- Kolejne poprawki dla KNX (własne panele), czujników Mikrotik, Reolink, Tado, TP-Link Omada, Victron GX i Husqvarna Automower, a także aktualizacja interfejsu.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    fr_FR: `Met à jour Home Assistant vers 2026.8.2, une version corrective sans nouvelle fonctionnalité ni changement incompatible.

- Corrige la perte du lien « via l'appareil » pour les appareils composés derrière un pont Matter, une situation de compétition dans l'intégration SMTP et l'omission des trains retardés dans les départs d'Israel Rail.
- Autres correctifs pour KNX (panneaux personnalisés), les capteurs Mikrotik, Reolink, Tado, TP-Link Omada, Victron GX et Husqvarna Automower, ainsi qu'une mise à jour de l'interface.

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.8.2`,
  },
  migrations: {
    // Home Assistant imports a `http:` block into its settings store once and
    // ignores the YAML from then on, flagging a repair while it is still
    // there. Drop the block earlier releases of this package wrote; the rest
    // of the file is the user's. Migrations run ahead of the other init
    // handlers, so `bootstrapHa` never sees the block.
    up: async ({ effects }) => {
      await configurationYaml.merge(effects, { http: undefined })
    },
    down: IMPOSSIBLE,
  },
})
