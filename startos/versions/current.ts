import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.6.2:0',
  releaseNotes: {
    en_US:
      'Updates Home Assistant to 2026.6.2. Patch release with bug fixes and dependency bumps only — no new features. Notable fixes: waits for ESPHome/Shelly Bluetooth proxy connections at startup, resolves MQTT reload failures, mitigates a TTS pipeline memory leak, and corrects the hardware unique-ID migration. Full notes: https://github.com/home-assistant/core/releases/tag/2026.6.2',
    es_ES:
      'Actualiza Home Assistant a 2026.6.2. Versión de corrección con solo arreglos de errores y actualizaciones de dependencias — sin funciones nuevas. Correcciones destacadas: espera las conexiones del proxy Bluetooth de ESPHome/Shelly al iniciar, resuelve fallos al recargar MQTT, mitiga una fuga de memoria en la canalización TTS y corrige la migración del identificador único de hardware. Notas completas: https://github.com/home-assistant/core/releases/tag/2026.6.2',
    de_DE:
      'Aktualisiert Home Assistant auf 2026.6.2. Patch-Version mit ausschließlich Fehlerbehebungen und Abhängigkeits-Updates — keine neuen Funktionen. Wichtige Korrekturen: wartet beim Start auf ESPHome-/Shelly-Bluetooth-Proxy-Verbindungen, behebt MQTT-Neuladefehler, verringert ein Speicherleck in der TTS-Pipeline und korrigiert die Migration der eindeutigen Hardware-ID. Vollständige Hinweise: https://github.com/home-assistant/core/releases/tag/2026.6.2',
    pl_PL:
      'Aktualizuje Home Assistant do 2026.6.2. Wydanie poprawkowe zawierające wyłącznie poprawki błędów i aktualizacje zależności — bez nowych funkcji. Najważniejsze poprawki: oczekiwanie na połączenia proxy Bluetooth ESPHome/Shelly przy starcie, naprawa błędów przeładowania MQTT, ograniczenie wycieku pamięci w potoku TTS oraz korekta migracji unikalnego identyfikatora sprzętu. Pełne informacje: https://github.com/home-assistant/core/releases/tag/2026.6.2',
    fr_FR:
      'Met à jour Home Assistant vers 2026.6.2. Version corrective comportant uniquement des corrections de bogues et des mises à jour de dépendances — aucune nouvelle fonctionnalité. Corrections notables : attente des connexions du proxy Bluetooth ESPHome/Shelly au démarrage, résolution des échecs de rechargement MQTT, atténuation d’une fuite mémoire dans le pipeline TTS et correction de la migration de l’identifiant unique du matériel. Notes complètes : https://github.com/home-assistant/core/releases/tag/2026.6.2',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
