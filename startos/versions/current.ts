import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.7.0:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.7.0, the monthly feature release.

**New features**

- Purpose-specific automation triggers and conditions — build automations in plain language — are now the default.
- Redesigned Activity Timeline (logbook) with a vertical layout, day grouping, and colored state dots.
- New "Update all" button to apply multiple available updates in one click.
- Dedicated Infrared (IR) and Radio Frequency (RF) device panels under Settings.
- ZHA Zigbee management moved to a full-page view with tabs for clusters, bindings, and neighbors.
- Raspberry Pi EEPROM/bootloader firmware updates via Settings > Updates.
- 10 new integrations, plus roughly 40% faster template rendering.

**Breaking changes / required actions**

- Several automation triggers and conditions were renamed (e.g. battery.low → battery.became_low, update.update_became_available → update.became_available); update any affected automations.
- The battery_level attribute was removed from iCloud, StarLine, and Tractive — use their dedicated battery sensors instead.
- Z-Wave JS now requires a Z-Wave JS server version 3.9.0 or newer.
- 18 long-defunct integrations were removed.

Full release notes: https://www.home-assistant.io/blog/2026/07/01/release-20267/`,
    es_ES: `Se ha actualizado Home Assistant a la versión 2026.7.0, la publicación mensual de nuevas funciones.

**Nuevas funciones**

- Las condiciones y los desencadenantes de automatización orientados a un propósito específico —que permiten crear automatizaciones en lenguaje natural— son ahora la opción predeterminada.
- Rediseño de la Cronología de actividad (registro) con una disposición vertical, agrupación por días y puntos de estado de colores.
- Nuevo botón «Actualizar todo» para aplicar varias actualizaciones disponibles con un solo clic.
- Paneles de dispositivos dedicados de infrarrojos (IR) y radiofrecuencia (RF) en Ajustes.
- La gestión de ZHA Zigbee se ha trasladado a una vista de página completa con pestañas para clústeres, enlaces y vecinos.
- Actualizaciones de firmware de EEPROM/gestor de arranque de Raspberry Pi a través de Ajustes > Actualizaciones.
- 10 nuevas integraciones, además de una renderización de plantillas aproximadamente un 40 % más rápida.

**Cambios incompatibles / acciones necesarias**

- Se han renombrado varias condiciones y desencadenantes de automatización (por ejemplo, battery.low → battery.became_low, update.update_became_available → update.became_available); actualiza las automatizaciones afectadas.
- Se ha eliminado el atributo battery_level de iCloud, StarLine y Tractive; usa en su lugar sus sensores de batería dedicados.
- Z-Wave JS requiere ahora un servidor Z-Wave JS con la versión 3.9.0 o posterior.
- Se han eliminado 18 integraciones obsoletas desde hace tiempo.

Notas de la versión completas: https://www.home-assistant.io/blog/2026/07/01/release-20267/`,
    de_DE: `Home Assistant wurde auf 2026.7.0 aktualisiert, das monatliche Feature-Release.

**Neue Funktionen**

- Zweckgebundene Automatisierungs-Trigger und -Bedingungen – Automatisierungen in natürlicher Sprache erstellen – sind jetzt der Standard.
- Neu gestaltete Aktivitäts-Timeline (Logbuch) mit vertikalem Layout, Gruppierung nach Tagen und farbigen Statuspunkten.
- Neue Schaltfläche „Alle aktualisieren“, um mehrere verfügbare Updates mit einem Klick anzuwenden.
- Eigene IR- (Infrarot) und RF- (Radiofrequenz) Gerätebereiche unter Einstellungen.
- Die ZHA-Zigbee-Verwaltung wurde in eine Vollseitenansicht mit Tabs für Cluster, Bindungen und Nachbarn verschoben.
- Raspberry Pi EEPROM-/Bootloader-Firmware-Updates über Einstellungen > Updates.
- 10 neue Integrationen sowie ein rund 40 % schnelleres Template-Rendering.

**Breaking Changes / erforderliche Maßnahmen**

- Mehrere Automatisierungs-Trigger und -Bedingungen wurden umbenannt (z. B. battery.low → battery.became_low, update.update_became_available → update.became_available); passen Sie betroffene Automatisierungen an.
- Das Attribut battery_level wurde aus iCloud, StarLine und Tractive entfernt – verwenden Sie stattdessen deren eigene Batteriesensoren.
- Z-Wave JS erfordert jetzt eine Z-Wave JS-Serverversion 3.9.0 oder neuer.
- 18 seit Langem nicht mehr funktionsfähige Integrationen wurden entfernt.

Vollständige Release Notes: https://www.home-assistant.io/blog/2026/07/01/release-20267/`,
    pl_PL: `Zaktualizowano Home Assistant do wersji 2026.7.0 — comiesięcznego wydania z nowymi funkcjami.

**Nowe funkcje**

- Wyzwalacze i warunki automatyzacji przeznaczone do konkretnych zadań — tworzenie automatyzacji zwykłym językiem — są teraz ustawieniem domyślnym.
- Przeprojektowana Oś czasu aktywności (dziennik zdarzeń) z układem pionowym, grupowaniem według dni i kolorowymi kropkami stanów.
- Nowy przycisk „Aktualizuj wszystko” pozwalający zastosować wiele dostępnych aktualizacji jednym kliknięciem.
- Dedykowane panele urządzeń podczerwieni (IR) i częstotliwości radiowej (RF) w Ustawieniach.
- Zarządzanie ZHA Zigbee przeniesione do widoku pełnoekranowego z kartami dla klastrów, powiązań i sąsiadów.
- Aktualizacje oprogramowania układowego EEPROM/bootloadera Raspberry Pi przez Ustawienia > Aktualizacje.
- 10 nowych integracji oraz około 40% szybsze renderowanie szablonów.

**Zmiany powodujące niezgodność / wymagane działania**

- Zmieniono nazwy kilku wyzwalaczy i warunków automatyzacji (np. battery.low → battery.became_low, update.update_became_available → update.became_available); zaktualizuj wszystkie objęte tym automatyzacje.
- Atrybut battery_level został usunięty z iCloud, StarLine i Tractive — zamiast niego korzystaj z ich dedykowanych czujników baterii.
- Z-Wave JS wymaga teraz serwera Z-Wave JS w wersji 3.9.0 lub nowszej.
- Usunięto 18 od dawna nieużywanych integracji.

Pełne informacje o wydaniu: https://www.home-assistant.io/blog/2026/07/01/release-20267/`,
    fr_FR: `Mise à jour de Home Assistant vers la version 2026.7.0, la version mensuelle apportant de nouvelles fonctionnalités.

**Nouvelles fonctionnalités**

- Les déclencheurs et conditions d'automatisation dédiés à un usage précis — permettant de créer des automatisations en langage clair — sont désormais activés par défaut.
- Chronologie d'activité (journal) repensée avec une disposition verticale, un regroupement par jour et des pastilles d'état colorées.
- Nouveau bouton « Tout mettre à jour » pour appliquer plusieurs mises à jour disponibles en un seul clic.
- Panneaux d'appareils dédiés Infrarouge (IR) et Radiofréquence (RF) dans les Réglages.
- La gestion Zigbee de ZHA a été déplacée vers une vue pleine page avec des onglets pour les clusters, les liaisons et les voisins.
- Mises à jour du micrologiciel EEPROM/bootloader du Raspberry Pi via Réglages > Mises à jour.
- 10 nouvelles intégrations, ainsi qu'un rendu des modèles environ 40 % plus rapide.

**Changements incompatibles / actions requises**

- Plusieurs déclencheurs et conditions d'automatisation ont été renommés (par ex. battery.low → battery.became_low, update.update_became_available → update.became_available) ; mettez à jour les automatisations concernées.
- L'attribut battery_level a été supprimé d'iCloud, StarLine et Tractive — utilisez plutôt leurs capteurs de batterie dédiés.
- Z-Wave JS nécessite désormais une version 3.9.0 ou ultérieure du serveur Z-Wave JS.
- 18 intégrations obsolètes depuis longtemps ont été supprimées.

Notes de version complètes : https://www.home-assistant.io/blog/2026/07/01/release-20267/`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
