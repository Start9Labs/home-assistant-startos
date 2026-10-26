import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.10.4:0',
  releaseNotes: {
    en_US:
      'Updated Home Assistant to 2026.10.4. Raises the HTTP client header limits to 64 KiB and updates the Lutron Caséta library. Full release notes: https://github.com/home-assistant/core/releases/tag/2026.10.4',
    es_ES:
      'Actualiza Home Assistant a 2026.10.4. Aumenta los límites de las cabeceras del cliente HTTP a 64 KiB y actualiza la biblioteca de Lutron Caséta. Notas completas: https://github.com/home-assistant/core/releases/tag/2026.10.4',
    de_DE:
      'Aktualisiert Home Assistant auf 2026.10.4. Erhöht die Header-Grenzen des HTTP-Clients auf 64 KiB und aktualisiert die Lutron-Caséta-Bibliothek. Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.10.4',
    pl_PL:
      'Aktualizuje Home Assistant do 2026.10.4. Zwiększa limity nagłówków klienta HTTP do 64 KiB i aktualizuje bibliotekę Lutron Caséta. Pełne informacje: https://github.com/home-assistant/core/releases/tag/2026.10.4',
    fr_FR:
      'Met à jour Home Assistant vers 2026.10.4. Augmente les limites des en-têtes du client HTTP à 64 KiB et met à jour la bibliothèque Lutron Caséta. Notes complètes : https://github.com/home-assistant/core/releases/tag/2026.10.4',
  },
  migrations: {},
})
