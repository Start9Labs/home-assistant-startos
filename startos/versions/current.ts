import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.6.4:0',
  releaseNotes: {
    en_US:
      'Updates Home Assistant to 2026.6.4. Patch release with bug fixes and dependency bumps only — no new features. Notable fixes: Immich API key no longer leaked in error logs, Growatt total output power reading 1000x too low with the V1 API, double-slash in the InfluxDB write URL, and a frontend update to 20260527.7. Full notes: https://github.com/home-assistant/core/releases/tag/2026.6.4',
    es_ES:
      'Actualiza Home Assistant a 2026.6.4. Versión de corrección con solo arreglos de errores y actualizaciones de dependencias — sin funciones nuevas. Correcciones destacadas: la clave de API de Immich ya no se filtra en los registros de errores, lectura de potencia total de Growatt 1000 veces inferior con la API V1, doble barra en la URL de escritura de InfluxDB y una actualización del frontend a 20260527.7. Notas completas: https://github.com/home-assistant/core/releases/tag/2026.6.4',
    de_DE:
      'Aktualisiert Home Assistant auf 2026.6.4. Patch-Version mit ausschließlich Fehlerbehebungen und Abhängigkeits-Updates — keine neuen Funktionen. Wichtige Korrekturen: Immich-API-Schlüssel wird nicht mehr in Fehlerprotokollen preisgegeben, Growatt-Gesamtleistung mit der V1-API 1000-fach zu niedrig, doppelter Schrägstrich in der InfluxDB-Schreib-URL und ein Frontend-Update auf 20260527.7. Vollständige Hinweise: https://github.com/home-assistant/core/releases/tag/2026.6.4',
    pl_PL:
      'Aktualizuje Home Assistant do 2026.6.4. Wydanie poprawkowe zawierające wyłącznie poprawki błędów i aktualizacje zależności — bez nowych funkcji. Najważniejsze poprawki: klucz API Immich nie jest już ujawniany w logach błędów, odczyt całkowitej mocy Growatt 1000 razy za niski w API V1, podwójny ukośnik w adresie URL zapisu InfluxDB oraz aktualizacja frontendu do 20260527.7. Pełne informacje: https://github.com/home-assistant/core/releases/tag/2026.6.4',
    fr_FR:
      'Met à jour Home Assistant vers 2026.6.4. Version corrective comportant uniquement des corrections de bogues et des mises à jour de dépendances — aucune nouvelle fonctionnalité. Corrections notables : la clé d’API Immich n’est plus divulguée dans les journaux d’erreurs, lecture de la puissance totale Growatt 1000 fois trop faible avec l’API V1, double barre oblique dans l’URL d’écriture InfluxDB et une mise à jour du frontend vers 20260527.7. Notes complètes : https://github.com/home-assistant/core/releases/tag/2026.6.4',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
