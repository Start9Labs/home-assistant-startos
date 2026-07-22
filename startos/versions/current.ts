import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.7.3:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.7.3, a bug-fix release with dependency bumps only — no new features and no breaking changes.

- Fixes several Roborock issues (A01 protocol filtering, vacuum segment mapping, dynamic dock support) and updates the Roborock library.
- Fixes a UniFi setup crash on cellular/5G WAN connections without monitors.
- Fixes Overkiz Hitachi Yutaki second-zone heating and RTSGeneric cover open/close, and updates the Overkiz library.
- Fixes duplicate Hikvision binary sensor unique IDs and makes FRITZ!Box repairs non-persistent.
- Bumps ZHA to 2.0.1 and updates the frontend to 20260624.6.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.7.3`,
    es_ES: `Actualiza Home Assistant a 2026.7.3, una versión de corrección de errores con solo actualizaciones de dependencias: sin nuevas funciones ni cambios incompatibles.

- Corrige varios problemas de Roborock (filtrado de protocolos A01, mapeo de segmentos de la aspiradora, compatibilidad con la base dinámica) y actualiza la biblioteca de Roborock.
- Corrige un fallo en la configuración de UniFi en conexiones WAN móviles/5G sin monitores.
- Corrige la calefacción de la segunda zona del Hitachi Yutaki en Overkiz y la apertura/cierre de las persianas RTSGeneric, y actualiza la biblioteca de Overkiz.
- Corrige los identificadores únicos duplicados de los sensores binarios de Hikvision y hace que las reparaciones de FRITZ!Box no sean persistentes.
- Actualiza ZHA a 2.0.1 y la interfaz a 20260624.6.

Notas de la versión completas: https://github.com/home-assistant/core/releases/tag/2026.7.3`,
    de_DE: `Aktualisiert Home Assistant auf 2026.7.3, ein Fehlerbehebungs-Release mit ausschließlich Abhängigkeits-Updates – keine neuen Funktionen und keine Breaking Changes.

- Behebt mehrere Roborock-Probleme (A01-Protokollfilterung, Segmentzuordnung des Saugroboters, Unterstützung der dynamischen Dockingstation) und aktualisiert die Roborock-Bibliothek.
- Behebt einen Absturz bei der UniFi-Einrichtung an Mobilfunk-/5G-WAN-Verbindungen ohne Monitore.
- Behebt die Heizung der zweiten Zone des Hitachi Yutaki in Overkiz sowie das Öffnen/Schließen von RTSGeneric-Rollläden und aktualisiert die Overkiz-Bibliothek.
- Behebt doppelte eindeutige IDs von Hikvision-Binärsensoren und macht FRITZ!Box-Reparaturen nicht mehr dauerhaft.
- Aktualisiert ZHA auf 2.0.1 und das Frontend auf 20260624.6.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.7.3`,
    pl_PL: `Aktualizuje Home Assistant do 2026.7.3 — wydania z poprawkami błędów zawierającego wyłącznie aktualizacje zależności. Bez nowych funkcji i bez zmian powodujących niezgodność.

- Naprawia kilka problemów z Roborockiem (filtrowanie protokołów A01, mapowanie segmentów odkurzacza, obsługę dynamicznej stacji dokującej) oraz aktualizuje bibliotekę Roborock.
- Naprawia awarię konfiguracji UniFi na połączeniach WAN komórkowych/5G bez monitorów.
- Naprawia ogrzewanie drugiej strefy Hitachi Yutaki w Overkiz oraz otwieranie/zamykanie rolet RTSGeneric i aktualizuje bibliotekę Overkiz.
- Naprawia zduplikowane unikatowe identyfikatory czujników binarnych Hikvision i sprawia, że naprawy FRITZ!Box nie są trwałe.
- Aktualizuje ZHA do 2.0.1 oraz interfejs do 20260624.6.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.7.3`,
    fr_FR: `Met à jour Home Assistant vers 2026.7.3, une version corrective comportant uniquement des mises à jour de dépendances — aucune nouvelle fonctionnalité ni changement incompatible.

- Corrige plusieurs problèmes Roborock (filtrage des protocoles A01, cartographie des segments de l'aspirateur, prise en charge de la station d'accueil dynamique) et met à jour la bibliothèque Roborock.
- Corrige un plantage de la configuration UniFi sur les connexions WAN cellulaires/5G sans moniteurs.
- Corrige le chauffage de la deuxième zone du Hitachi Yutaki dans Overkiz ainsi que l'ouverture/fermeture des volets RTSGeneric, et met à jour la bibliothèque Overkiz.
- Corrige les identifiants uniques dupliqués des capteurs binaires Hikvision et rend les réparations FRITZ!Box non persistantes.
- Met à jour ZHA vers 2.0.1 et l'interface vers 20260624.6.

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.7.3`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
