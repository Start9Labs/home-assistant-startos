import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { configurationYaml } from '../fileModels/configuration.yaml'

export const current = VersionInfo.of({
  version: '2026.8.2:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.8.2, a bug-fix release for the 2026.8 line. No new features and no breaking changes.

- Two SMTP fixes: a potential race condition, and legacy notify actions that were left loaded.
- Matter devices behind a bridge no longer lose their "via device" link, and the KNX panel renders correctly again.
- Further integration fixes — Reolink, Mikrotik, Tado, Husqvarna Automower, TP-Link Omada, Steam, Israel Rail, Electric Kiwi, Teslemetry — plus a frontend update and assorted library bumps.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    es_ES: `Actualiza Home Assistant a 2026.8.2, una versión de corrección de la línea 2026.8. Sin funciones nuevas ni cambios incompatibles.

- Dos correcciones en SMTP: una posible condición de carrera y acciones de notificación heredadas que quedaban cargadas.
- Los dispositivos Matter detrás de un puente ya no pierden su enlace «a través del dispositivo», y el panel KNX vuelve a mostrarse correctamente.
- Más correcciones de integraciones —Reolink, Mikrotik, Tado, Husqvarna Automower, TP-Link Omada, Steam, Israel Rail, Electric Kiwi, Teslemetry—, además de una actualización de la interfaz y varias bibliotecas.

Notas de la versión completas: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    de_DE: `Aktualisiert Home Assistant auf 2026.8.2, ein Fehlerbehebungs-Release der Reihe 2026.8. Keine neuen Funktionen und keine Breaking Changes.

- Zwei SMTP-Korrekturen: eine mögliche Race Condition und veraltete Benachrichtigungsaktionen, die geladen blieben.
- Matter-Geräte hinter einer Bridge verlieren ihre Verknüpfung „über Gerät“ nicht mehr, und das KNX-Panel wird wieder korrekt dargestellt.
- Weitere Integrationskorrekturen — Reolink, Mikrotik, Tado, Husqvarna Automower, TP-Link Omada, Steam, Israel Rail, Electric Kiwi, Teslemetry — sowie ein Frontend-Update und diverse Bibliotheks-Updates.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    pl_PL: `Aktualizuje Home Assistant do 2026.8.2, wydania poprawkowego linii 2026.8. Bez nowych funkcji i bez zmian powodujących niezgodność.

- Dwie poprawki SMTP: możliwy wyścig oraz przestarzałe akcje powiadomień, które pozostawały załadowane.
- Urządzenia Matter za mostkiem nie tracą już powiązania „przez urządzenie”, a panel KNX ponownie wyświetla się poprawnie.
- Kolejne poprawki integracji — Reolink, Mikrotik, Tado, Husqvarna Automower, TP-Link Omada, Steam, Israel Rail, Electric Kiwi, Teslemetry — a także aktualizacja interfejsu i wielu bibliotek.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    fr_FR: `Met à jour Home Assistant vers 2026.8.2, une version corrective de la série 2026.8. Aucune nouveauté et aucun changement incompatible.

- Deux correctifs SMTP : une possible situation de compétition et des actions de notification héritées qui restaient chargées.
- Les appareils Matter derrière un pont ne perdent plus leur lien « via l'appareil », et le panneau KNX s'affiche de nouveau correctement.
- D'autres correctifs d'intégrations — Reolink, Mikrotik, Tado, Husqvarna Automower, TP-Link Omada, Steam, Israel Rail, Electric Kiwi, Teslemetry — ainsi qu'une mise à jour de l'interface et de diverses bibliothèques.

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
