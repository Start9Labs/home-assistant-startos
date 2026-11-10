import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.11.1:0',
  releaseNotes: {
    en_US:
      'Updated Home Assistant to 2026.11.1. Requires StartOS 0.4.2 or later. Fixes HomeKit camera motion events not arriving, Shelly covers not reporting closed at position 0, and MQTT handling of unknown payload encodings. Full release notes: https://github.com/home-assistant/core/releases/tag/2026.11.1',
    es_ES:
      'Actualiza Home Assistant a 2026.11.1. Requiere StartOS 0.4.2 o posterior. Corrige los eventos de movimiento de cámaras HomeKit que no llegaban, las persianas Shelly que no indicaban estar cerradas en la posición 0 y la gestión de codificaciones desconocidas de mensajes MQTT. Notas completas: https://github.com/home-assistant/core/releases/tag/2026.11.1',
    de_DE:
      'Aktualisiert Home Assistant auf 2026.11.1. Erfordert StartOS 0.4.2 oder neuer. Behebt ausbleibende Bewegungsereignisse von HomeKit-Kameras, Shelly-Rollläden, die bei Position 0 nicht als geschlossen gemeldet werden, und die Verarbeitung unbekannter MQTT-Nutzdatenkodierungen. Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.11.1',
    pl_PL:
      'Aktualizuje Home Assistant do 2026.11.1. Wymaga StartOS 0.4.2 lub nowszego. Naprawia niedostarczane zdarzenia ruchu kamer HomeKit, rolety Shelly niezgłaszające zamknięcia w pozycji 0 oraz obsługę nieznanych kodowań wiadomości MQTT. Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.11.1',
    fr_FR:
      'Met à jour Home Assistant vers 2026.11.1. Nécessite StartOS 0.4.2 ou ultérieur. Corrige les événements de mouvement des caméras HomeKit non reçus, les volets Shelly non signalés comme fermés en position 0 et la gestion des encodages inconnus des messages MQTT. Notes complètes : https://github.com/home-assistant/core/releases/tag/2026.11.1',
  },
  migrations: {},
})
