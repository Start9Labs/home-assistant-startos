import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.6.3:0',
  releaseNotes: {
    en_US:
      'Updates Home Assistant to 2026.6.3. Patch release with bug fixes and dependency bumps only — no new features. Notable fixes: Hue light-level sensor crash on a None value, iCloud error on unload, JPEG-incompatible image upload thumbnails, several device-registry version-string conversions (RainMachine, OpenGarage, Rituals), and a frontend update to 20260527.6. Full notes: https://github.com/home-assistant/core/releases/tag/2026.6.3',
    es_ES:
      'Actualiza Home Assistant a 2026.6.3. Versión de corrección con solo arreglos de errores y actualizaciones de dependencias — sin funciones nuevas. Correcciones destacadas: fallo del sensor de nivel de luz de Hue ante un valor None, error de iCloud al descargar, miniaturas de subida de imágenes incompatibles con JPEG, varias conversiones de cadena de versión en el registro de dispositivos (RainMachine, OpenGarage, Rituals) y una actualización del frontend a 20260527.6. Notas completas: https://github.com/home-assistant/core/releases/tag/2026.6.3',
    de_DE:
      'Aktualisiert Home Assistant auf 2026.6.3. Patch-Version mit ausschließlich Fehlerbehebungen und Abhängigkeits-Updates — keine neuen Funktionen. Wichtige Korrekturen: Absturz des Hue-Lichtstärkesensors bei einem None-Wert, iCloud-Fehler beim Entladen, JPEG-inkompatible Vorschaubilder beim Bild-Upload, mehrere Versions-String-Konvertierungen in der Geräteregistrierung (RainMachine, OpenGarage, Rituals) und ein Frontend-Update auf 20260527.6. Vollständige Hinweise: https://github.com/home-assistant/core/releases/tag/2026.6.3',
    pl_PL:
      'Aktualizuje Home Assistant do 2026.6.3. Wydanie poprawkowe zawierające wyłącznie poprawki błędów i aktualizacje zależności — bez nowych funkcji. Najważniejsze poprawki: awaria czujnika poziomu światła Hue przy wartości None, błąd iCloud podczas wyładowywania, miniatury przesyłanych obrazów niekompatybilne z JPEG, kilka konwersji ciągu wersji w rejestrze urządzeń (RainMachine, OpenGarage, Rituals) oraz aktualizacja frontendu do 20260527.6. Pełne informacje: https://github.com/home-assistant/core/releases/tag/2026.6.3',
    fr_FR:
      'Met à jour Home Assistant vers 2026.6.3. Version corrective comportant uniquement des corrections de bogues et des mises à jour de dépendances — aucune nouvelle fonctionnalité. Corrections notables : plantage du capteur de niveau de lumière Hue sur une valeur None, erreur iCloud au déchargement, miniatures de téléversement d’images incompatibles JPEG, plusieurs conversions de chaîne de version dans le registre des appareils (RainMachine, OpenGarage, Rituals) et une mise à jour du frontend vers 20260527.6. Notes complètes : https://github.com/home-assistant/core/releases/tag/2026.6.3',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
