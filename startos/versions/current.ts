import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.11.2:0',
  releaseNotes: {
    en_US:
      'Updated Home Assistant to 2026.11.2. Requires StartOS 0.4.2 or later. Fixes LG webOS TVs going unavailable, Reolink playback for NVRs and Hubs, Axis camera basic authentication, and an MQTT reload loop; Solar-Log passwords and Alexa account identifiers are now redacted from diagnostics. Full release notes: https://github.com/home-assistant/core/releases/tag/2026.11.2',
    es_ES:
      'Actualiza Home Assistant a 2026.11.2. Requiere StartOS 0.4.2 o posterior. Corrige los televisores LG webOS que quedaban no disponibles, la reproducción de Reolink en NVR y Hubs, la autenticación básica de las cámaras Axis y un bucle de recarga de MQTT; las contraseñas de Solar-Log y los identificadores de cuenta de Alexa ya se ocultan en los diagnósticos. Notas completas: https://github.com/home-assistant/core/releases/tag/2026.11.2',
    de_DE:
      'Aktualisiert Home Assistant auf 2026.11.2. Erfordert StartOS 0.4.2 oder neuer. Behebt nicht verfügbare LG-webOS-Fernseher, die Reolink-Wiedergabe für NVRs und Hubs, die Basic-Authentifizierung von Axis-Kameras und eine MQTT-Neuladeschleife; Solar-Log-Passwörter und Alexa-Kontokennungen werden in Diagnosedaten nun geschwärzt. Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.11.2',
    pl_PL:
      'Aktualizuje Home Assistant do 2026.11.2. Wymaga StartOS 0.4.2 lub nowszego. Naprawia niedostępność telewizorów LG webOS, odtwarzanie Reolink dla rejestratorów NVR i Hubów, uwierzytelnianie podstawowe kamer Axis oraz pętlę przeładowywania MQTT; hasła Solar-Log i identyfikatory kont Alexa są teraz ukrywane w diagnostyce. Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.11.2',
    fr_FR:
      'Met à jour Home Assistant vers 2026.11.2. Nécessite StartOS 0.4.2 ou ultérieur. Corrige les téléviseurs LG webOS devenant indisponibles, la lecture Reolink pour les NVR et Hubs, l’authentification basique des caméras Axis et une boucle de rechargement MQTT ; les mots de passe Solar-Log et les identifiants de compte Alexa sont désormais masqués dans les diagnostics. Notes complètes : https://github.com/home-assistant/core/releases/tag/2026.11.2',
  },
  migrations: {},
})
