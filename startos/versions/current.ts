import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.11.3:0',
  releaseNotes: {
    en_US:
      'Updated Home Assistant to 2026.11.3. Fixes Tasmota discovery after a device was removed, UniFi polling of unavailable endpoints, FRITZ!Box Tools switch availability, initial HVAC mode for optimistic MQTT climate entities, and webOS TV volume control; RESTful Command header values are no longer logged and Switcher credentials are redacted from diagnostics. Full release notes: https://github.com/home-assistant/core/releases/tag/2026.11.3',
    es_ES:
      'Actualiza Home Assistant a 2026.11.3. Corrige el descubrimiento de Tasmota tras eliminar un dispositivo, el sondeo de UniFi a endpoints no disponibles, la disponibilidad de los interruptores de FRITZ!Box Tools, el modo HVAC inicial de los climatizadores MQTT en modo optimista y el control de volumen de los televisores webOS; los valores de cabecera de RESTful Command ya no se registran y las credenciales de Switcher se ocultan en los diagnósticos. Notas completas: https://github.com/home-assistant/core/releases/tag/2026.11.3',
    de_DE:
      'Aktualisiert Home Assistant auf 2026.11.3. Behebt die Tasmota-Erkennung nach dem Entfernen eines Geräts, das UniFi-Polling nicht verfügbarer Endpunkte, die Verfügbarkeit der FRITZ!Box-Tools-Schalter, den anfänglichen HVAC-Modus optimistischer MQTT-Klimageräte und die Lautstärkeregelung von webOS-Fernsehern; Header-Werte von RESTful Command werden nicht mehr protokolliert und Switcher-Zugangsdaten in Diagnosedaten geschwärzt. Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.11.3',
    pl_PL:
      'Aktualizuje Home Assistant do 2026.11.3. Naprawia wykrywanie Tasmota po usunięciu urządzenia, odpytywanie niedostępnych punktów końcowych UniFi, dostępność przełączników FRITZ!Box Tools, początkowy tryb HVAC klimatyzatorów MQTT w trybie optymistycznym oraz sterowanie głośnością telewizorów webOS; wartości nagłówków RESTful Command nie są już zapisywane w logach, a dane uwierzytelniające Switcher są ukrywane w diagnostyce. Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.11.3',
    fr_FR:
      'Met à jour Home Assistant vers 2026.11.3. Corrige la découverte Tasmota après la suppression d’un appareil, l’interrogation UniFi des points de terminaison indisponibles, la disponibilité des interrupteurs FRITZ!Box Tools, le mode CVC initial des climatiseurs MQTT en mode optimiste et le contrôle du volume des téléviseurs webOS ; les valeurs d’en-tête RESTful Command ne sont plus journalisées et les identifiants Switcher sont masqués dans les diagnostics. Notes complètes : https://github.com/home-assistant/core/releases/tag/2026.11.3',
  },
  migrations: {},
})
