import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.7.2:1',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.7.2, a bug-fix release rolling up 2026.7.1 and 2026.7.2. No new features and no breaking changes.

- Fixes ZHA device triggers failing to resolve quirks, and updates the Zigbee quirks library.
- Fixes unavailable Homee entities, and Homee covers not reacting correctly to commands.
- Fixes several Overkiz issues: Rexel gateway setup over the Local API, OAuth sessions expiring after a day, Atlantic heaters missing their regulation mode, and RollerShutterUno covers reporting open when closed.
- Fixes SMTP notifications missing their "To" header, and SMTP setup failing without a clear error.
- Fixes SolarEdge energy sensors losing their unit of measurement, and the KNX telegram history migration for data from 2026.3 and earlier.
- Fixes many further integrations, including Teslemetry, UniFi Protect, Roborock, Sonos, ESPHome and Reolink, and updates the frontend.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.7.2`,
    es_ES: `Actualiza Home Assistant a 2026.7.2, una versión de corrección de errores que agrupa 2026.7.1 y 2026.7.2. Sin nuevas funciones ni cambios incompatibles.

- Corrige los desencadenantes de dispositivos ZHA que no resolvían las particularidades (quirks) y actualiza la biblioteca de quirks de Zigbee.
- Corrige las entidades de Homee no disponibles y las persianas de Homee que no respondían correctamente a las órdenes.
- Corrige varios problemas de Overkiz: la configuración de la pasarela Rexel con la API local, las sesiones OAuth que caducaban al cabo de un día, los calefactores Atlantic sin modo de regulación y las persianas RollerShutterUno que aparecían abiertas estando cerradas.
- Corrige las notificaciones SMTP a las que les faltaba la cabecera «To» y la configuración de SMTP que fallaba sin mostrar un error claro.
- Corrige los sensores de energía de SolarEdge que perdían su unidad de medida y la migración del historial de telegramas de KNX para datos de 2026.3 y anteriores.
- Corrige muchas otras integraciones, entre ellas Teslemetry, UniFi Protect, Roborock, Sonos, ESPHome y Reolink, y actualiza la interfaz.

Notas de la versión completas: https://github.com/home-assistant/core/releases/tag/2026.7.2`,
    de_DE: `Aktualisiert Home Assistant auf 2026.7.2, ein Fehlerbehebungs-Release, das 2026.7.1 und 2026.7.2 zusammenfasst. Keine neuen Funktionen und keine Breaking Changes.

- Behebt ZHA-Geräte-Trigger, die Quirks nicht auflösen konnten, und aktualisiert die Zigbee-Quirks-Bibliothek.
- Behebt nicht verfügbare Homee-Entitäten sowie Homee-Rollläden, die nicht korrekt auf Befehle reagierten.
- Behebt mehrere Overkiz-Probleme: die Einrichtung des Rexel-Gateways über die lokale API, nach einem Tag ablaufende OAuth-Sitzungen, Atlantic-Heizgeräte ohne Regelungsmodus und RollerShutterUno-Rollläden, die im geschlossenen Zustand als offen gemeldet wurden.
- Behebt fehlende „To“-Kopfzeilen in SMTP-Benachrichtigungen sowie eine SMTP-Einrichtung, die ohne klare Fehlermeldung fehlschlug.
- Behebt SolarEdge-Energiesensoren, die ihre Maßeinheit verloren, sowie die KNX-Telegrammverlaufs-Migration für Daten aus 2026.3 und früher.
- Behebt viele weitere Integrationen, darunter Teslemetry, UniFi Protect, Roborock, Sonos, ESPHome und Reolink, und aktualisiert das Frontend.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.7.2`,
    pl_PL: `Aktualizuje Home Assistant do 2026.7.2 — wydania z poprawkami błędów, obejmującego 2026.7.1 i 2026.7.2. Bez nowych funkcji i bez zmian powodujących niezgodność.

- Naprawia wyzwalacze urządzeń ZHA, które nie rozpoznawały quirks, oraz aktualizuje bibliotekę quirks dla Zigbee.
- Naprawia niedostępne encje Homee oraz rolety Homee, które nie reagowały poprawnie na polecenia.
- Naprawia kilka problemów z Overkiz: konfigurację bramki Rexel przez lokalne API, sesje OAuth wygasające po dobie, grzejniki Atlantic bez trybu regulacji oraz rolety RollerShutterUno zgłaszające otwarcie, gdy były zamknięte.
- Naprawia powiadomienia SMTP pozbawione nagłówka „To” oraz konfigurację SMTP kończącą się niepowodzeniem bez czytelnego komunikatu o błędzie.
- Naprawia czujniki energii SolarEdge tracące jednostkę miary oraz migrację historii telegramów KNX dla danych z wersji 2026.3 i wcześniejszych.
- Naprawia wiele innych integracji, m.in. Teslemetry, UniFi Protect, Roborock, Sonos, ESPHome i Reolink, oraz aktualizuje interfejs.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.7.2`,
    fr_FR: `Met à jour Home Assistant vers 2026.7.2, une version corrective regroupant 2026.7.1 et 2026.7.2. Aucune nouvelle fonctionnalité ni changement incompatible.

- Corrige les déclencheurs d'appareils ZHA qui ne résolvaient pas les quirks, et met à jour la bibliothèque de quirks Zigbee.
- Corrige les entités Homee indisponibles ainsi que les volets Homee qui ne réagissaient pas correctement aux commandes.
- Corrige plusieurs problèmes Overkiz : la configuration de la passerelle Rexel via l'API locale, les sessions OAuth expirant au bout d'un jour, les chauffages Atlantic sans mode de régulation, et les volets RollerShutterUno signalés ouverts alors qu'ils étaient fermés.
- Corrige l'en-tête « To » manquant dans les notifications SMTP, et la configuration SMTP qui échouait sans message d'erreur clair.
- Corrige les capteurs d'énergie SolarEdge qui perdaient leur unité de mesure, ainsi que la migration de l'historique des télégrammes KNX pour les données de 2026.3 et antérieures.
- Corrige de nombreuses autres intégrations, dont Teslemetry, UniFi Protect, Roborock, Sonos, ESPHome et Reolink, et met à jour l'interface.

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.7.2`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
