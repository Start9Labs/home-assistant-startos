import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.11.0:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.11.0. Requires StartOS 0.4.1 or later.

- The built-in Marketplace replaces HACS and automatically adopts existing installations and their downloads. The StartOS Set Up HACS and Remove HACS actions are removed; manage community projects in Settings → Marketplace.
- Adds target exclusions, automatic dashboard sections, action history, and live integration logs.
- Before updating, back up the service, update custom dashboard cards, and read the incompatible changes below. Entity display names change; entity IDs remain intact. Some deprecated integration entities and actions are removed, including legacy Telegram notifications and Nanoleaf touch triggers.
- Z-Wave requires zwave-js-server 3.11.0 or newer (schema 51), or Z-Wave JS UI 11.24.2 or newer. The Uptime Kuma integration requires server 2.0.0 or newer. Update those servers first if used.

[Full release notes and incompatible changes](https://www.home-assistant.io/blog/2026/11/04/release-202611/)
[Full changelog](https://www.home-assistant.io/changelogs/core-2026.11)`,
    es_ES: `Actualiza Home Assistant a 2026.11.0. Requiere StartOS 0.4.1 o posterior.

- El Marketplace integrado sustituye a HACS y adopta automáticamente las instalaciones existentes y sus descargas. Se eliminan las acciones Configurar HACS y Eliminar HACS de StartOS; gestiona los proyectos de la comunidad en Ajustes → Marketplace.
- Añade exclusiones de destinos, secciones automáticas del panel, historial de acciones y registros de integraciones en directo.
- Antes de actualizar, haz una copia de seguridad, actualiza las tarjetas personalizadas y lee los cambios incompatibles enlazados abajo. Cambian los nombres mostrados de las entidades; sus identificadores se conservan. Se eliminan algunas entidades y acciones obsoletas, incluidas las notificaciones antiguas de Telegram y los disparadores táctiles de Nanoleaf.
- Z-Wave requiere zwave-js-server 3.11.0 o posterior (esquema 51), o Z-Wave JS UI 11.24.2 o posterior. La integración de Uptime Kuma requiere un servidor 2.0.0 o posterior. Actualiza primero esos servidores si los usas.

[Notas completas y cambios incompatibles](https://www.home-assistant.io/blog/2026/11/04/release-202611/)
[Registro completo de cambios](https://www.home-assistant.io/changelogs/core-2026.11)`,
    de_DE: `Aktualisiert Home Assistant auf 2026.11.0. Erfordert StartOS 0.4.1 oder neuer.

- Der integrierte Marketplace ersetzt HACS und übernimmt bestehende Installationen und deren Downloads automatisch. Die StartOS-Aktionen „HACS einrichten“ und „HACS entfernen“ entfallen; Community-Projekte werden unter Einstellungen → Marketplace verwaltet.
- Neue Zielausschlüsse, automatische Dashboard-Abschnitte, Aktionsverlauf und Live-Protokolle für Integrationen.
- Vor dem Update den Dienst sichern, benutzerdefinierte Dashboard-Karten aktualisieren und die unten verlinkten inkompatiblen Änderungen lesen. Anzeigenamen von Entitäten ändern sich; Entitäts-IDs bleiben erhalten. Einige veraltete Entitäten und Aktionen entfallen, darunter alte Telegram-Benachrichtigungen und Nanoleaf-Berührungstrigger.
- Z-Wave erfordert zwave-js-server 3.11.0 oder neuer (Schema 51) oder Z-Wave JS UI 11.24.2 oder neuer. Die Uptime-Kuma-Integration erfordert Server 2.0.0 oder neuer. Diese Server bei Nutzung zuerst aktualisieren.

[Vollständige Versionshinweise und inkompatible Änderungen](https://www.home-assistant.io/blog/2026/11/04/release-202611/)
[Vollständiges Änderungsprotokoll](https://www.home-assistant.io/changelogs/core-2026.11)`,
    pl_PL: `Aktualizuje Home Assistant do 2026.11.0. Wymaga StartOS 0.4.1 lub nowszego.

- Wbudowany Marketplace zastępuje HACS i automatycznie przejmuje istniejące instalacje oraz pobrane projekty. Usunięto akcje StartOS „Skonfiguruj HACS” i „Usuń HACS”; zarządzaj projektami społeczności w Ustawienia → Marketplace.
- Dodaje wykluczenia celów, automatyczne sekcje panelu, historię akcji i dzienniki integracji na żywo.
- Przed aktualizacją utwórz kopię zapasową, zaktualizuj niestandardowe karty panelu i przeczytaj podlinkowane zmiany powodujące niezgodność. Nazwy wyświetlane encji zmieniają się; identyfikatory encji pozostają bez zmian. Usunięto część przestarzałych encji i akcji, w tym starsze powiadomienia Telegram i wyzwalacze dotykowe Nanoleaf.
- Z-Wave wymaga zwave-js-server 3.11.0 lub nowszego (schemat 51) albo Z-Wave JS UI 11.24.2 lub nowszego. Integracja Uptime Kuma wymaga serwera 2.0.0 lub nowszego. Jeśli ich używasz, najpierw zaktualizuj te serwery.

[Pełne informacje o wydaniu i zmianach powodujących niezgodność](https://www.home-assistant.io/blog/2026/11/04/release-202611/)
[Pełny wykaz zmian](https://www.home-assistant.io/changelogs/core-2026.11)`,
    fr_FR: `Met à jour Home Assistant vers 2026.11.0. Nécessite StartOS 0.4.1 ou ultérieur.

- Le Marketplace intégré remplace HACS et reprend automatiquement les installations existantes et leurs téléchargements. Les actions StartOS « Configurer HACS » et « Supprimer HACS » sont supprimées ; gérez les projets communautaires dans Paramètres → Marketplace.
- Ajoute les exclusions de cibles, les sections automatiques du tableau de bord, l'historique des actions et les journaux d'intégration en direct.
- Avant la mise à jour, sauvegardez le service, mettez à jour les cartes personnalisées et lisez les changements incompatibles ci-dessous. Les noms affichés des entités changent ; leurs identifiants restent inchangés. Certaines entités et actions obsolètes sont supprimées, notamment les anciennes notifications Telegram et les déclencheurs tactiles Nanoleaf.
- Z-Wave exige zwave-js-server 3.11.0 ou ultérieur (schéma 51), ou Z-Wave JS UI 11.24.2 ou ultérieur. L'intégration Uptime Kuma exige un serveur 2.0.0 ou ultérieur. Mettez d'abord ces serveurs à jour si vous les utilisez.

[Notes complètes et changements incompatibles](https://www.home-assistant.io/blog/2026/11/04/release-202611/)
[Journal complet des modifications](https://www.home-assistant.io/changelogs/core-2026.11)`,
  },
  migrations: {},
})
