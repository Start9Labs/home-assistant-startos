import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { configurationYaml } from '../fileModels/configuration.yaml'

export const current = VersionInfo.of({
  version: '2026.8.2:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.8.2, a bug-fix release with no breaking changes.

It collects around 35 integration fixes — Matter devices behind a bridge keep their "via device", the KNX panel renders correctly again, and SMTP, Reolink, Mikrotik and Tado each get a fix — along with an updated frontend.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    es_ES: `Actualiza Home Assistant a 2026.8.2, una versión de corrección sin cambios incompatibles.

Reúne unas 35 correcciones de integraciones: los dispositivos Matter tras un puente conservan su «dispositivo a través de», el panel KNX vuelve a mostrarse correctamente y SMTP, Reolink, Mikrotik y Tado reciben cada uno una corrección, además de una interfaz actualizada.

Notas de la versión completas: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    de_DE: `Aktualisiert Home Assistant auf 2026.8.2, ein Fehlerbehebungs-Release ohne Breaking Changes.

Es bündelt rund 35 Integrations-Korrekturen: Matter-Geräte hinter einer Bridge behalten ihr „über Gerät“, das KNX-Panel wird wieder korrekt dargestellt, und SMTP, Reolink, Mikrotik und Tado erhalten je eine Korrektur — dazu ein aktualisiertes Frontend.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    pl_PL: `Aktualizuje Home Assistant do 2026.8.2, wydania poprawkowego bez zmian powodujących niezgodność.

Zbiera około 35 poprawek integracji: urządzenia Matter za mostkiem zachowują swoje „przez urządzenie”, panel KNX znów wyświetla się poprawnie, a SMTP, Reolink, Mikrotik i Tado otrzymują po jednej poprawce — wraz ze zaktualizowanym interfejsem.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.8.2`,
    fr_FR: `Met à jour Home Assistant vers 2026.8.2, une version corrective sans changement incompatible.

Elle regroupe environ 35 correctifs d'intégrations : les appareils Matter derrière un pont conservent leur « via l'appareil », le panneau KNX s'affiche de nouveau correctement, et SMTP, Reolink, Mikrotik et Tado reçoivent chacun un correctif — avec une interface mise à jour.

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
