import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.7.4:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.7.4, rolling up the 2026.7.3 and 2026.7.4 bug-fix releases. No new features and no breaking changes.

- Fixes a UniFi setup crash on cellular/5G WAN connections without monitors.
- Fixes ProxmoxVE authentication failing when the realm contains upper-case letters.
- Fixes duplicate Hikvision binary sensor unique IDs, and stops FRITZ!Box Tools repairs from being persistent.
- Fixes several Overkiz issues: the Hitachi Yutaki second heating zone using zone 1 states, and open/close for RTSGeneric covers.
- Improves Roborock support: dynamic dock detection, segment-mapping repair, and A01 protocol filtering.
- Updates ZHA to 2.0.1, the frontend to 20260624.6, and core dependencies including aiohttp and yarl.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.7.3 and https://github.com/home-assistant/core/releases/tag/2026.7.4`,
    es_ES: `Actualiza Home Assistant a 2026.7.4, agrupando las versiones de corrección 2026.7.3 y 2026.7.4. Sin nuevas funciones ni cambios incompatibles.

- Corrige un fallo en la configuración de UniFi con conexiones WAN móviles/5G sin monitores.
- Corrige la autenticación de ProxmoxVE cuando el reino (realm) contiene letras mayúsculas.
- Corrige identificadores únicos duplicados en los sensores binarios de Hikvision y evita que las reparaciones de FRITZ!Box Tools sean persistentes.
- Corrige varios problemas de Overkiz: la segunda zona de calefacción de Hitachi Yutaki usaba los estados de la zona 1, y la apertura y el cierre de las persianas RTSGeneric.
- Mejora la compatibilidad con Roborock: detección dinámica de la base, reparación del mapeo de segmentos y filtrado de protocolos A01.
- Actualiza ZHA a 2.0.1, la interfaz a 20260624.6 y dependencias principales como aiohttp y yarl.

Notas de la versión completas: https://github.com/home-assistant/core/releases/tag/2026.7.3 y https://github.com/home-assistant/core/releases/tag/2026.7.4`,
    de_DE: `Aktualisiert Home Assistant auf 2026.7.4 und fasst damit die Fehlerbehebungs-Releases 2026.7.3 und 2026.7.4 zusammen. Keine neuen Funktionen und keine Breaking Changes.

- Behebt einen Absturz bei der UniFi-Einrichtung mit Mobilfunk-/5G-WAN-Verbindungen ohne Monitore.
- Behebt die fehlschlagende ProxmoxVE-Authentifizierung, wenn der Realm Großbuchstaben enthält.
- Behebt doppelte eindeutige IDs bei Hikvision-Binärsensoren und sorgt dafür, dass FRITZ!Box-Tools-Reparaturen nicht mehr dauerhaft sind.
- Behebt mehrere Overkiz-Probleme: die zweite Heizzone von Hitachi Yutaki nutzte die Zustände von Zone 1, sowie Öffnen und Schließen von RTSGeneric-Rollläden.
- Verbessert die Roborock-Unterstützung: dynamische Dock-Erkennung, Reparatur der Segmentzuordnung und Filterung der A01-Protokolle.
- Aktualisiert ZHA auf 2.0.1, das Frontend auf 20260624.6 sowie Kernabhängigkeiten wie aiohttp und yarl.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.7.3 und https://github.com/home-assistant/core/releases/tag/2026.7.4`,
    pl_PL: `Aktualizuje Home Assistant do 2026.7.4, obejmując wydania poprawkowe 2026.7.3 i 2026.7.4. Bez nowych funkcji i bez zmian powodujących niezgodność.

- Naprawia awarię konfiguracji UniFi przy połączeniach WAN komórkowych/5G bez monitorów.
- Naprawia uwierzytelnianie ProxmoxVE, gdy nazwa realmu zawiera wielkie litery.
- Naprawia zduplikowane unikalne identyfikatory czujników binarnych Hikvision i sprawia, że naprawy FRITZ!Box Tools nie są trwałe.
- Naprawia kilka problemów z Overkiz: druga strefa grzewcza Hitachi Yutaki używała stanów strefy 1 oraz otwieranie i zamykanie rolet RTSGeneric.
- Ulepsza obsługę Roborock: dynamiczne wykrywanie stacji dokującej, naprawę mapowania segmentów i filtrowanie protokołów A01.
- Aktualizuje ZHA do 2.0.1, interfejs do 20260624.6 oraz kluczowe zależności, w tym aiohttp i yarl.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.7.3 i https://github.com/home-assistant/core/releases/tag/2026.7.4`,
    fr_FR: `Met à jour Home Assistant vers 2026.7.4, regroupant les versions correctives 2026.7.3 et 2026.7.4. Aucune nouvelle fonctionnalité ni changement incompatible.

- Corrige un plantage de la configuration UniFi sur les connexions WAN cellulaires/5G sans moniteurs.
- Corrige l'authentification ProxmoxVE qui échouait lorsque le domaine (realm) contient des majuscules.
- Corrige les identifiants uniques dupliqués des capteurs binaires Hikvision et rend non persistantes les réparations de FRITZ!Box Tools.
- Corrige plusieurs problèmes Overkiz : la seconde zone de chauffage Hitachi Yutaki utilisait les états de la zone 1, ainsi que l'ouverture et la fermeture des volets RTSGeneric.
- Améliore la prise en charge de Roborock : détection dynamique de la station, réparation du mappage des segments et filtrage des protocoles A01.
- Met à jour ZHA vers 2.0.1, l'interface vers 20260624.6 et des dépendances centrales dont aiohttp et yarl.

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.7.3 et https://github.com/home-assistant/core/releases/tag/2026.7.4`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
