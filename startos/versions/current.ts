import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.10.3:0',
  releaseNotes: {
    en_US:
      'Updated Home Assistant to 2026.10.3. Fixes KNX startup timeouts, Home Connect event handling after token refresh errors, and duplicate UniFi Access events. Full release notes: https://github.com/home-assistant/core/releases/tag/2026.10.3',
    es_ES:
      'Actualiza Home Assistant a 2026.10.3. Corrige los tiempos de espera al iniciar KNX, la gestión de eventos de Home Connect tras errores al renovar tokens y los eventos duplicados de UniFi Access. Notas completas: https://github.com/home-assistant/core/releases/tag/2026.10.3',
    de_DE:
      'Aktualisiert Home Assistant auf 2026.10.3. Behebt KNX-Startzeitüberschreitungen, die Home-Connect-Ereignisverarbeitung nach Fehlern bei der Token-Erneuerung und doppelte UniFi-Access-Ereignisse. Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.10.3',
    pl_PL:
      'Aktualizuje Home Assistant do 2026.10.3. Naprawia przekroczenia czasu uruchamiania KNX, obsługę zdarzeń Home Connect po błędach odświeżania tokenów i zduplikowane zdarzenia UniFi Access. Pełne informacje: https://github.com/home-assistant/core/releases/tag/2026.10.3',
    fr_FR:
      'Met à jour Home Assistant vers 2026.10.3. Corrige les délais de démarrage KNX, la gestion des événements Home Connect après des erreurs de renouvellement de jetons et les événements UniFi Access en double. Notes complètes : https://github.com/home-assistant/core/releases/tag/2026.10.3',
  },
  migrations: {},
})
