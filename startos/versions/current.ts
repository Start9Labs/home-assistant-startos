import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.10.1:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.10.1 and start-sdk to 3.0.4.

**Features and fixes**

- Redesigned maps and profiles, easier automation trigger selection, expanded dashboard visibility conditions, and a Modbus connections panel.
- New local SolarEdge Modbus integration and one-click MCP server setup in Home Assistant's AI settings.
- Fixes automation trace storage, camera stream TLS compatibility, and generic thermostat timing.
- Remove HACS now also deletes its saved \`hacs.*\` stores instead of leaving them behind.

**Before updating**

- Back up your service and read the incompatible changes linked below. Authentication drops legacy username handling; resolve any username-normalization repairs.
- State conditions using \`for\` with attributes, lists of states, or another entity's state now fail validation. MQTT publish/dump and Synology reboot/shutdown actions require an administrator when called by a user.
- Mealie integrations require server 3.2 or newer. Several obsolete integrations are removed, including SolarEdge Local; use SolarEdge Modbus for local access. Linode and Tank Utility are disabled. OmniLogic's configurable polling interval is removed.

[Monthly release notes and incompatible changes](https://www.home-assistant.io/blog/2026/10/07/release-202610/)
[2026.10.1 fixes](https://github.com/home-assistant/core/releases/tag/2026.10.1)`,
    es_ES: `Actualiza Home Assistant a 2026.10.1 y start-sdk a 3.0.4.

**Funciones y correcciones**

- Mapas y perfiles rediseñados, selección más sencilla de disparadores de automatizaciones, condiciones de visibilidad ampliadas y un panel de conexiones Modbus.
- Nueva integración local SolarEdge Modbus y configuración del servidor MCP con un clic en los ajustes de IA de Home Assistant.
- Corrige el almacenamiento de trazas de automatizaciones, la compatibilidad TLS de cámaras y la temporización del termostato genérico.
- Eliminar HACS ahora también borra sus datos guardados \`hacs.*\` en lugar de dejarlos atrás.

**Antes de actualizar**

- Haz una copia de seguridad y lee los cambios incompatibles enlazados abajo. La autenticación elimina el manejo heredado de nombres de usuario; resuelve las reparaciones de normalización de nombres.
- Las condiciones de estado que combinan \`for\` con atributos, listas de estados o el estado de otra entidad ahora fallan la validación. Las acciones de publicación/volcado de MQTT y reinicio/apagado de Synology requieren un administrador cuando las invoca un usuario.
- Mealie requiere un servidor 3.2 o posterior. Se eliminan varias integraciones obsoletas, incluida SolarEdge Local; usa SolarEdge Modbus para acceso local. Linode y Tank Utility quedan desactivadas. Se elimina el intervalo de sondeo configurable de OmniLogic.

[Notas mensuales y cambios incompatibles](https://www.home-assistant.io/blog/2026/10/07/release-202610/)
[Correcciones de 2026.10.1](https://github.com/home-assistant/core/releases/tag/2026.10.1)`,
    de_DE: `Aktualisiert Home Assistant auf 2026.10.1 und start-sdk auf 3.0.4.

**Funktionen und Fehlerbehebungen**

- Überarbeitete Karten und Profile, einfachere Auswahl von Automatisierungs-Triggern, erweiterte Sichtbarkeitsbedingungen und eine Übersicht der Modbus-Verbindungen.
- Neue lokale SolarEdge-Modbus-Integration und MCP-Server-Einrichtung mit einem Klick in den KI-Einstellungen von Home Assistant.
- Behebt die Speicherung von Automatisierungsabläufen, TLS-Kompatibilität von Kamerastreams und Zeitsteuerung des generischen Thermostats.
- HACS entfernen löscht nun auch die gespeicherten \`hacs.*\`-Daten, statt sie zurückzulassen.

**Vor dem Update**

- Eine Sicherung erstellen und die unten verlinkten inkompatiblen Änderungen lesen. Die Authentifizierung entfernt die alte Benutzernamenbehandlung; Reparaturhinweise zur Normalisierung von Benutzernamen beheben.
- Zustandsbedingungen mit \`for\` zusammen mit Attributen, Zustandslisten oder dem Zustand einer anderen Entität scheitern nun an der Validierung. MQTT-Veröffentlichungs-/Dump-Aktionen und Synology-Neustart-/Herunterfahren-Aktionen erfordern bei Benutzeraufrufen Administratorrechte.
- Mealie erfordert Server 3.2 oder neuer. Mehrere veraltete Integrationen entfallen, darunter SolarEdge Local; für lokalen Zugriff SolarEdge Modbus verwenden. Linode und Tank Utility sind deaktiviert. Das konfigurierbare Abfrageintervall von OmniLogic entfällt.

[Monatliche Versionshinweise und inkompatible Änderungen](https://www.home-assistant.io/blog/2026/10/07/release-202610/)
[Fehlerbehebungen in 2026.10.1](https://github.com/home-assistant/core/releases/tag/2026.10.1)`,
    pl_PL: `Aktualizuje Home Assistant do 2026.10.1 i start-sdk do 3.0.4.

**Funkcje i poprawki**

- Przeprojektowane mapy i profile, łatwiejszy wybór wyzwalaczy automatyzacji, rozszerzone warunki widoczności oraz panel połączeń Modbus.
- Nowa lokalna integracja SolarEdge Modbus i konfiguracja serwera MCP jednym kliknięciem w ustawieniach AI Home Assistant.
- Naprawia zapisywanie śladów automatyzacji, zgodność TLS strumieni kamer i sterowanie czasowe termostatu ogólnego.
- Usuwanie HACS usuwa teraz również zapisane dane \`hacs.*\`, zamiast je pozostawiać.

**Przed aktualizacją**

- Utwórz kopię zapasową i przeczytaj podlinkowane zmiany powodujące niezgodność. Uwierzytelnianie usuwa starszą obsługę nazw użytkowników; rozwiąż zgłoszenia napraw dotyczące normalizacji nazw.
- Warunki stanu łączące \`for\` z atrybutami, listami stanów lub stanem innej encji nie przechodzą teraz walidacji. Akcje publikowania/zrzutu MQTT oraz restartu/wyłączania Synology wymagają administratora, gdy wywołuje je użytkownik.
- Mealie wymaga serwera 3.2 lub nowszego. Usunięto kilka przestarzałych integracji, w tym SolarEdge Local; do dostępu lokalnego użyj SolarEdge Modbus. Linode i Tank Utility są wyłączone. Usunięto konfigurowalny interwał odpytywania OmniLogic.

[Miesięczne informacje o wydaniu i zmianach powodujących niezgodność](https://www.home-assistant.io/blog/2026/10/07/release-202610/)
[Poprawki w 2026.10.1](https://github.com/home-assistant/core/releases/tag/2026.10.1)`,
    fr_FR: `Met à jour Home Assistant vers 2026.10.1 et start-sdk vers 3.0.4.

**Fonctionnalités et correctifs**

- Cartes et profils repensés, sélection simplifiée des déclencheurs d'automatisation, conditions de visibilité enrichies et panneau des connexions Modbus.
- Nouvelle intégration locale SolarEdge Modbus et configuration du serveur MCP en un clic dans les réglages IA de Home Assistant.
- Corrige l'enregistrement des traces d'automatisation, la compatibilité TLS des flux de caméras et la temporisation du thermostat générique.
- Supprimer HACS efface désormais aussi ses données enregistrées \`hacs.*\` au lieu de les laisser en place.

**Avant la mise à jour**

- Sauvegardez le service et lisez les changements incompatibles ci-dessous. L'authentification abandonne l'ancien traitement des noms d'utilisateur ; résolvez les réparations de normalisation des noms.
- Les conditions d'état combinant \`for\` avec des attributs, des listes d'états ou l'état d'une autre entité échouent désormais à la validation. Les actions de publication/vidage MQTT et de redémarrage/arrêt Synology exigent un administrateur lorsqu'un utilisateur les appelle.
- Mealie exige un serveur 3.2 ou plus récent. Plusieurs intégrations obsolètes sont supprimées, dont SolarEdge Local ; utilisez SolarEdge Modbus pour l'accès local. Linode et Tank Utility sont désactivées. L'intervalle d'interrogation configurable d'OmniLogic est supprimé.

[Notes mensuelles et changements incompatibles](https://www.home-assistant.io/blog/2026/10/07/release-202610/)
[Correctifs de 2026.10.1](https://github.com/home-assistant/core/releases/tag/2026.10.1)`,
  },
  migrations: {},
})
