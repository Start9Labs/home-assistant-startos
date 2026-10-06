import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.9.4:1',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.9.4. Fixes Tuya fans staying on at 0% speed, Todoist timed calendar event durations, and HTTP security filter performance.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.9.4

StartOS package improvements.`,
    es_ES: `Actualiza Home Assistant a 2026.9.4. Corrige los ventiladores Tuya que seguían encendidos al 0 % de velocidad, la duración de los eventos con hora de Todoist y el rendimiento del filtro de seguridad HTTP.

Notas completas de la versión: https://github.com/home-assistant/core/releases/tag/2026.9.4

Mejoras en el paquete de StartOS.`,
    de_DE: `Aktualisiert Home Assistant auf 2026.9.4. Behebt Tuya-Ventilatoren, die bei 0 % Geschwindigkeit eingeschaltet blieben, die Dauer zeitgebundener Todoist-Kalenderereignisse und die Leistung des HTTP-Sicherheitsfilters.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.9.4

Verbesserungen am StartOS-Paket.`,
    pl_PL: `Aktualizuje Home Assistant do 2026.9.4. Naprawia wentylatory Tuya pozostające włączone przy prędkości 0%, czas trwania wydarzeń Todoist z określoną godziną oraz wydajność filtra bezpieczeństwa HTTP.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.9.4

Ulepszenia pakietu StartOS.`,
    fr_FR: `Met à jour Home Assistant vers 2026.9.4. Corrige les ventilateurs Tuya qui restaient allumés à 0 % de vitesse, la durée des événements Todoist programmés et les performances du filtre de sécurité HTTP.

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.9.4

Améliorations du paquet StartOS.`,
  },
  migrations: {},
})
