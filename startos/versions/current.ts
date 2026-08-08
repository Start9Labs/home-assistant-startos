import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.8.1:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.8.1, the monthly feature release plus its first bug-fix release.

- Home Assistant now manages its web server settings (port, trusted proxies) in its own interface instead of \`configuration.yaml\`. StartOS moves the reverse proxy settings over for you, so nothing needs doing — leave the port at 8123 for the dashboard to stay reachable.
- Every integration now keeps its own device entry instead of merging devices set up through two integrations. Merged devices are split automatically, and a repair may appear.
- You can now rename entity IDs and control how they are ordered.
- Developer Tools is now just Tools, and "advanced"/"expert" wording is gone from around 43 places.
- New moon and vibration triggers and conditions, media search in the media browser, and a redesigned Home Assistant Cloud page.
- Breaking changes: Volvo On Call and Permobil are removed, the deprecated \`battery_level\` attribute is gone from robot vacuums (use the battery sensor), UniFi Protect requires 7.1 or newer and drops AI Port devices and detection scores, and Paperless-ngx requires server 2.19 or newer.

Full release notes: https://www.home-assistant.io/blog/2026/08/05/release-20268/ and https://github.com/home-assistant/core/releases/tag/2026.8.1`,
    es_ES: `Actualiza Home Assistant a 2026.8.1, la versión mensual de funciones más su primera versión de corrección.

- Home Assistant ahora gestiona la configuración de su servidor web (puerto, proxies de confianza) desde su propia interfaz en lugar de \`configuration.yaml\`. StartOS traslada por ti la configuración del proxy inverso, así que no hay nada que hacer: mantén el puerto 8123 para que el panel siga siendo accesible.
- Cada integración mantiene ahora su propia entrada de dispositivo en lugar de fusionar los dispositivos configurados por dos integraciones. Los dispositivos fusionados se separan automáticamente y puede aparecer una reparación.
- Ya puedes renombrar los identificadores de entidad y controlar su orden.
- Herramientas para desarrolladores pasa a llamarse simplemente Herramientas, y se ha eliminado la palabra «avanzado»/«experto» de unos 43 lugares.
- Nuevos disparadores y condiciones de luna y vibración, búsqueda en el explorador multimedia y una página rediseñada de Home Assistant Cloud.
- Cambios incompatibles: se eliminan Volvo On Call y Permobil, desaparece el atributo obsoleto \`battery_level\` de los robots aspiradores (usa el sensor de batería), UniFi Protect requiere la versión 7.1 o posterior y elimina los dispositivos AI Port y las puntuaciones de detección, y Paperless-ngx requiere un servidor 2.19 o posterior.

Notas de la versión completas: https://www.home-assistant.io/blog/2026/08/05/release-20268/ y https://github.com/home-assistant/core/releases/tag/2026.8.1`,
    de_DE: `Aktualisiert Home Assistant auf 2026.8.1, das monatliche Funktions-Release samt erstem Fehlerbehebungs-Release.

- Home Assistant verwaltet die Einstellungen seines Webservers (Port, vertrauenswürdige Proxys) jetzt in der eigenen Oberfläche statt in \`configuration.yaml\`. StartOS überträgt die Reverse-Proxy-Einstellungen für dich, es ist also nichts zu tun — belasse den Port bei 8123, damit das Dashboard erreichbar bleibt.
- Jede Integration behält nun ihren eigenen Geräteeintrag, statt Geräte aus zwei Integrationen zusammenzuführen. Zusammengeführte Geräte werden automatisch getrennt, und eine Reparatur kann erscheinen.
- Entitäts-IDs lassen sich jetzt umbenennen und in ihrer Reihenfolge steuern.
- Aus den Entwicklerwerkzeugen werden schlicht die Werkzeuge, und die Begriffe „erweitert“/„Experte“ verschwinden an rund 43 Stellen.
- Neue Trigger und Bedingungen für Mond und Vibration, Mediensuche im Medien-Browser und eine neu gestaltete Home-Assistant-Cloud-Seite.
- Breaking Changes: Volvo On Call und Permobil wurden entfernt, das veraltete Attribut \`battery_level\` fällt bei Saugrobotern weg (nutze den Batteriesensor), UniFi Protect erfordert 7.1 oder neuer und entfernt AI-Port-Geräte sowie Erkennungswerte, und Paperless-ngx erfordert Server 2.19 oder neuer.

Vollständige Versionshinweise: https://www.home-assistant.io/blog/2026/08/05/release-20268/ und https://github.com/home-assistant/core/releases/tag/2026.8.1`,
    pl_PL: `Aktualizuje Home Assistant do 2026.8.1, comiesięcznego wydania funkcji wraz z pierwszym wydaniem poprawkowym.

- Home Assistant zarządza teraz ustawieniami swojego serwera WWW (port, zaufane proxy) we własnym interfejsie zamiast w \`configuration.yaml\`. StartOS przenosi za Ciebie ustawienia odwrotnego proxy, więc nie musisz nic robić — pozostaw port 8123, aby panel pozostał dostępny.
- Każda integracja zachowuje teraz własny wpis urządzenia zamiast łączyć urządzenia skonfigurowane przez dwie integracje. Połączone urządzenia są rozdzielane automatycznie i może pojawić się naprawa.
- Możesz teraz zmieniać nazwy identyfikatorów encji i decydować o ich kolejności.
- Narzędzia deweloperskie to teraz po prostu Narzędzia, a określenia „zaawansowane”/„eksperckie” zniknęły z około 43 miejsc.
- Nowe wyzwalacze i warunki dotyczące księżyca i wibracji, wyszukiwanie w przeglądarce multimediów oraz przeprojektowana strona Home Assistant Cloud.
- Zmiany powodujące niezgodność: usunięto Volvo On Call i Permobil, zniknął przestarzały atrybut \`battery_level\` w robotach sprzątających (użyj czujnika baterii), UniFi Protect wymaga wersji 7.1 lub nowszej i usuwa urządzenia AI Port oraz oceny wykrywania, a Paperless-ngx wymaga serwera 2.19 lub nowszego.

Pełne informacje o wydaniu: https://www.home-assistant.io/blog/2026/08/05/release-20268/ i https://github.com/home-assistant/core/releases/tag/2026.8.1`,
    fr_FR: `Met à jour Home Assistant vers 2026.8.1, la version mensuelle de fonctionnalités et sa première version corrective.

- Home Assistant gère désormais les réglages de son serveur web (port, proxys de confiance) dans sa propre interface plutôt que dans \`configuration.yaml\`. StartOS y transfère les réglages du proxy inverse pour vous : rien à faire, laissez le port sur 8123 pour que le tableau de bord reste accessible.
- Chaque intégration conserve maintenant sa propre fiche d'appareil au lieu de fusionner les appareils configurés par deux intégrations. Les appareils fusionnés sont séparés automatiquement et une réparation peut apparaître.
- Vous pouvez désormais renommer les identifiants d'entité et contrôler leur ordre.
- Les outils pour développeurs deviennent simplement les Outils, et les mots « avancé »/« expert » disparaissent d'environ 43 endroits.
- Nouveaux déclencheurs et conditions pour la lune et les vibrations, recherche dans le navigateur multimédia et page Home Assistant Cloud repensée.
- Changements incompatibles : Volvo On Call et Permobil sont supprimés, l'attribut obsolète \`battery_level\` disparaît des robots aspirateurs (utilisez le capteur de batterie), UniFi Protect exige la version 7.1 ou plus récente et supprime les appareils AI Port ainsi que les scores de détection, et Paperless-ngx exige un serveur 2.19 ou plus récent.

Notes de version complètes : https://www.home-assistant.io/blog/2026/08/05/release-20268/ et https://github.com/home-assistant/core/releases/tag/2026.8.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
