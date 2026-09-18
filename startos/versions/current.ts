import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.9.3:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.9.3.

- Preserves encryption when rewriting supervisor backup archives.
- Redacts AirVisual API keys from debug logs.
- Improves reliability across integrations including EnergyZero, Matter, Google Tasks, Alexa, Spotify, and Airthings BLE.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.9.3`,
    es_ES: `Actualiza Home Assistant a 2026.9.3.

- Conserva el cifrado al reescribir archivos de copia de seguridad del supervisor.
- Oculta las claves API de AirVisual en los registros de depuración.
- Mejora la fiabilidad de integraciones como EnergyZero, Matter, Google Tasks, Alexa, Spotify y Airthings BLE.

Notas completas de la versión: https://github.com/home-assistant/core/releases/tag/2026.9.3`,
    de_DE: `Aktualisiert Home Assistant auf 2026.9.3.

- Behält die Verschlüsselung beim Neuschreiben von Supervisor-Sicherungsarchiven bei.
- Entfernt AirVisual-API-Schlüssel aus den Debug-Protokollen.
- Verbessert die Zuverlässigkeit von Integrationen wie EnergyZero, Matter, Google Tasks, Alexa, Spotify und Airthings BLE.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.9.3`,
    pl_PL: `Aktualizuje Home Assistant do 2026.9.3.

- Zachowuje szyfrowanie podczas ponownego zapisywania archiwów kopii zapasowych supervisora.
- Ukrywa klucze API AirVisual w dziennikach debugowania.
- Poprawia niezawodność integracji, takich jak EnergyZero, Matter, Google Tasks, Alexa, Spotify i Airthings BLE.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.9.3`,
    fr_FR: `Met à jour Home Assistant vers 2026.9.3.

- Préserve le chiffrement lors de la réécriture des archives de sauvegarde du superviseur.
- Masque les clés API AirVisual dans les journaux de débogage.
- Améliore la fiabilité d'intégrations telles que EnergyZero, Matter, Google Tasks, Alexa, Spotify et Airthings BLE.

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.9.3`,
  },
  migrations: {},
})
