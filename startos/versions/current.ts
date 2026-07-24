import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.7.4:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.7.4, a bug-fix release rolling up 2026.7.3 and 2026.7.4. No new features and no breaking changes.

- Fixes several Overkiz issues: Hitachi Yutaki heat pumps using the wrong heating-zone state, and RTSGeneric covers failing to open or close.
- Fixes a UniFi setup crash on cellular/5G WAN connections that have no monitors.
- Fixes many Roborock issues, including vacuum segment-mapping repairs, A01 protocol filtering, and dynamic dock support.
- Fixes duplicate Hikvision binary-sensor IDs, and stops FRITZ!Box repairs from becoming persistent.
- Fixes ProxmoxVE authentication failing when the realm contains uppercase letters, and Enphase Envoy diagnostics downloads on non-UTF-8 responses.
- Exempts certain protocol integrations from the entity limit, updates ZHA and the frontend, and refreshes many dependencies (aiohttp, yarl, python-roborock, and more).

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.7.3 and https://github.com/home-assistant/core/releases/tag/2026.7.4`,
    es_ES: `Actualiza Home Assistant a 2026.7.4, una versión de corrección de errores que agrupa 2026.7.3 y 2026.7.4. Sin nuevas funciones ni cambios incompatibles.

- Corrige varios problemas de Overkiz: las bombas de calor Hitachi Yutaki usaban el estado incorrecto de la zona de calefacción, y las persianas RTSGeneric no se abrían ni se cerraban.
- Corrige un fallo en la configuración de UniFi con conexiones WAN móviles/5G que no tienen monitores.
- Corrige muchos problemas de Roborock, incluyendo reparaciones del mapeo de segmentos de la aspiradora, el filtrado del protocolo A01 y la compatibilidad con bases dinámicas.
- Corrige los ID duplicados de los sensores binarios de Hikvision, e impide que las reparaciones de FRITZ!Box se vuelvan persistentes.
- Corrige el fallo de autenticación de ProxmoxVE cuando el dominio contiene letras mayúsculas, y las descargas de diagnósticos de Enphase Envoy con respuestas que no son UTF-8.
- Exime a determinadas integraciones de protocolo del límite de entidades, actualiza ZHA y el frontend, y renueva muchas dependencias (aiohttp, yarl, python-roborock y más).

Notas de la versión completas: https://github.com/home-assistant/core/releases/tag/2026.7.3 y https://github.com/home-assistant/core/releases/tag/2026.7.4`,
    de_DE: `Aktualisiert Home Assistant auf 2026.7.4, ein Fehlerbehebungs-Release, das 2026.7.3 und 2026.7.4 zusammenfasst. Keine neuen Funktionen und keine Breaking Changes.

- Behebt mehrere Overkiz-Probleme: Hitachi Yutaki Wärmepumpen verwenden den falschen Heizzonen-Status, und RTSGeneric-Rollläden lassen sich nicht öffnen oder schließen.
- Behebt einen UniFi-Einrichtungsabsturz bei Mobilfunk-/5G-WAN-Verbindungen ohne Monitore.
- Behebt viele Roborock-Probleme, darunter Reparaturen der Segmentzuordnung von Staubsaugern, A01-Protokollfilterung und Unterstützung dynamischer Docks.
- Behebt doppelte Hikvision-Binärsensor-IDs und verhindert, dass FRITZ!Box-Reparaturen dauerhaft werden.
- Behebt fehlschlagende ProxmoxVE-Authentifizierung, wenn der Realm Großbuchstaben enthält, sowie Enphase Envoy Diagnose-Downloads bei Nicht-UTF-8-Antworten.
- Nimmt bestimmte Protokoll-Integrationen vom Entitätenlimit aus, aktualisiert ZHA und das Frontend und frischt viele Abhängigkeiten auf (aiohttp, yarl, python-roborock und weitere).

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.7.3 und https://github.com/home-assistant/core/releases/tag/2026.7.4`,
    pl_PL: `Aktualizuje Home Assistant do 2026.7.4 — wydania z poprawkami błędów, obejmującego 2026.7.3 i 2026.7.4. Bez nowych funkcji i bez zmian powodujących niezgodność.

- Naprawia kilka problemów z Overkiz: pompy ciepła Hitachi Yutaki używające niewłaściwego stanu strefy grzewczej oraz rolety RTSGeneric, które nie otwierają się ani nie zamykają.
- Naprawia awarię konfiguracji UniFi przy połączeniach WAN komórkowych/5G, które nie mają monitorów.
- Naprawia wiele problemów z Roborock, w tym poprawki mapowania segmentów odkurzacza, filtrowanie protokołu A01 oraz obsługę dynamicznej stacji dokującej.
- Naprawia zduplikowane identyfikatory czujników binarnych Hikvision oraz sprawia, że naprawy FRITZ!Box nie stają się trwałe.
- Naprawia niepowodzenie uwierzytelniania ProxmoxVE, gdy domena (realm) zawiera wielkie litery, oraz pobieranie diagnostyki Enphase Envoy przy odpowiedziach spoza UTF-8.
- Zwalnia niektóre integracje protokołów z limitu encji, aktualizuje ZHA i interfejs użytkownika oraz odświeża wiele zależności (aiohttp, yarl, python-roborock i inne).

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.7.3 i https://github.com/home-assistant/core/releases/tag/2026.7.4`,
    fr_FR: `Met à jour Home Assistant vers 2026.7.4, une version corrective regroupant 2026.7.3 et 2026.7.4. Aucune nouvelle fonctionnalité ni changement incompatible.

- Corrige plusieurs problèmes Overkiz : les pompes à chaleur Hitachi Yutaki utilisant le mauvais état de zone de chauffage, et les volets RTSGeneric ne parvenant pas à s'ouvrir ou à se fermer.
- Corrige un plantage de configuration UniFi sur les connexions WAN cellulaires/5G dépourvues de moniteurs.
- Corrige de nombreux problèmes Roborock, dont les réparations de cartographie des segments de l'aspirateur, le filtrage du protocole A01 et la prise en charge des stations d'accueil dynamiques.
- Corrige les identifiants de capteurs binaires Hikvision en double, et empêche les réparations FRITZ!Box de devenir persistantes.
- Corrige l'échec d'authentification ProxmoxVE lorsque le domaine contient des lettres majuscules, ainsi que les téléchargements de diagnostics Enphase Envoy sur les réponses non-UTF-8.
- Exempte certaines intégrations de protocole de la limite d'entités, met à jour ZHA et l'interface, et actualise de nombreuses dépendances (aiohttp, yarl, python-roborock, et plus encore).

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.7.3 et https://github.com/home-assistant/core/releases/tag/2026.7.4`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
