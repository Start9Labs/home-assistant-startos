import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.9.2:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.9.2.

- Redacts credentials from go2rtc server logs.
- Repairs malformed local to-do calendars and preserves Remote Calendar form values after errors.
- Improves reliability across integrations including SFTP Storage, Tesla Fleet, ViCare, OpenHome, and ESPHome.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.9.2`,
    es_ES: `Actualiza Home Assistant a 2026.9.2.

- Oculta las credenciales en los registros del servidor go2rtc.
- Repara calendarios locales de tareas con formato incorrecto y conserva los valores del formulario de Calendario remoto después de errores.
- Mejora la fiabilidad de integraciones como Almacenamiento SFTP, Tesla Fleet, ViCare, OpenHome y ESPHome.

Notas completas de la versión: https://github.com/home-assistant/core/releases/tag/2026.9.2`,
    de_DE: `Aktualisiert Home Assistant auf 2026.9.2.

- Entfernt Zugangsdaten aus den go2rtc-Serverprotokollen.
- Repariert fehlerhaft formatierte lokale Aufgaben-Kalender und behält Formularwerte des Remote-Kalenders nach Fehlern bei.
- Verbessert die Zuverlässigkeit von Integrationen wie SFTP-Speicher, Tesla Fleet, ViCare, OpenHome und ESPHome.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.9.2`,
    pl_PL: `Aktualizuje Home Assistant do 2026.9.2.

- Ukrywa dane logowania w dziennikach serwera go2rtc.
- Naprawia nieprawidłowo sformatowane lokalne kalendarze zadań i zachowuje wartości formularza Kalendarza zdalnego po błędach.
- Poprawia niezawodność integracji, takich jak Pamięć SFTP, Tesla Fleet, ViCare, OpenHome i ESPHome.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.9.2`,
    fr_FR: `Met à jour Home Assistant vers 2026.9.2.

- Masque les identifiants dans les journaux du serveur go2rtc.
- Répare les calendriers de tâches locaux mal formés et conserve les valeurs du formulaire Calendrier distant après une erreur.
- Améliore la fiabilité d'intégrations telles que Stockage SFTP, Tesla Fleet, ViCare, OpenHome et ESPHome.

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.9.2`,
  },
  migrations: {},
})
