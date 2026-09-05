import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.9.0:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.9.0.

- The Security dashboard gains active alerts and favorites, and History and Activity share a new Sources panel. Activity details can now trace why a change happened.
- Matter gains a network map, while tile cards add controls for light effects, vacuum fan speed, and climate humidity.
- Modbus support is modernized so integrations can share connections and provide UI-based setup; 13 new integrations are included.
- Breaking changes affect Flexit fireplace mode, initial KNX expose values, LLM tool names, persistent-notification update types, UniFi Protect versions, update and Z-Wave action permissions, and custom vacuum battery reporting. Review the complete notes before updating if you use any of these.

Full release notes: https://www.home-assistant.io/blog/2026/09/02/release-20269/`,
    es_ES: `Actualiza Home Assistant a 2026.9.0.

- El panel de Seguridad incorpora alertas activas y favoritos, e Historial y Actividad comparten un nuevo panel de fuentes. Los detalles de Actividad ahora pueden mostrar por qué se produjo un cambio.
- Matter incorpora un mapa de red, mientras que las tarjetas de mosaico añaden controles para efectos de luz, velocidad del ventilador de aspiradoras y humedad del clima.
- Se moderniza la compatibilidad con Modbus para que las integraciones compartan conexiones y ofrezcan configuración desde la interfaz; se incluyen 13 integraciones nuevas.
- Hay cambios incompatibles que afectan al modo chimenea de Flexit, los valores iniciales expuestos por KNX, los nombres de herramientas LLM, los tipos de actualización de notificaciones persistentes, las versiones de UniFi Protect, los permisos de acciones de actualización y Z-Wave y la información de batería de aspiradoras personalizadas. Revisa las notas completas antes de actualizar si utilizas alguno de ellos.

Notas completas de la versión: https://www.home-assistant.io/blog/2026/09/02/release-20269/`,
    de_DE: `Aktualisiert Home Assistant auf 2026.9.0.

- Das Sicherheits-Dashboard erhält aktive Warnungen und Favoriten. Verlauf und Aktivität teilen sich ein neues Quellen-Panel, und Aktivitätsdetails können jetzt zeigen, warum eine Änderung erfolgte.
- Matter erhält eine Netzwerkkarte. Kachelkarten bieten neue Steuerelemente für Lichteffekte, Staubsauger-Lüfterstufen und die Luftfeuchtigkeit von Klimageräten.
- Die Modbus-Unterstützung wurde modernisiert, sodass Integrationen Verbindungen gemeinsam nutzen und eine Einrichtung über die Benutzeroberfläche anbieten können; 13 neue Integrationen sind enthalten.
- Breaking Changes betreffen den Flexit-Kaminmodus, anfängliche KNX-Expose-Werte, LLM-Werkzeugnamen, Aktualisierungstypen dauerhafter Benachrichtigungen, UniFi-Protect-Versionen, Berechtigungen für Update- und Z-Wave-Aktionen sowie die Batterieanzeige benutzerdefinierter Staubsauger. Lies vor dem Update die vollständigen Hinweise, wenn du eine dieser Funktionen verwendest.

Vollständige Versionshinweise: https://www.home-assistant.io/blog/2026/09/02/release-20269/`,
    pl_PL: `Aktualizuje Home Assistant do 2026.9.0.

- Panel Bezpieczeństwo otrzymuje aktywne alerty i ulubione, a Historia i Aktywność współdzielą nowy panel źródeł. Szczegóły aktywności mogą teraz pokazać, dlaczego nastąpiła zmiana.
- Matter otrzymuje mapę sieci, a kafelki nowe elementy sterujące efektami światła, prędkością wentylatora odkurzacza i wilgotnością klimatyzacji.
- Obsługa Modbus została unowocześniona, dzięki czemu integracje mogą współdzielić połączenia i oferować konfigurację w interfejsie; dodano 13 nowych integracji.
- Zmiany powodujące niezgodność dotyczą trybu kominka Flexit, początkowych wartości KNX expose, nazw narzędzi LLM, typów aktualizacji trwałych powiadomień, wersji UniFi Protect, uprawnień akcji aktualizacji i Z-Wave oraz raportowania baterii przez niestandardowe odkurzacze. Jeśli korzystasz z którejkolwiek z tych funkcji, przed aktualizacją przeczytaj pełne informacje.

Pełne informacje o wydaniu: https://www.home-assistant.io/blog/2026/09/02/release-20269/`,
    fr_FR: `Met à jour Home Assistant vers 2026.9.0.

- Le tableau de bord Sécurité propose des alertes actives et des favoris. Historique et Activité partagent un nouveau panneau Sources, et les détails d'activité peuvent maintenant expliquer la cause d'un changement.
- Matter bénéficie d'une carte du réseau, tandis que les cartes Tuile ajoutent des commandes pour les effets lumineux, la vitesse des aspirateurs et l'humidité des appareils de climatisation.
- La prise en charge de Modbus est modernisée afin que les intégrations puissent partager les connexions et proposer une configuration dans l'interface ; 13 nouvelles intégrations sont incluses.
- Des changements incompatibles concernent le mode cheminée de Flexit, les valeurs initiales exposées par KNX, les noms des outils LLM, les types de mise à jour des notifications persistantes, les versions d'UniFi Protect, les autorisations des actions de mise à jour et Z-Wave, ainsi que le niveau de batterie des aspirateurs personnalisés. Consultez les notes complètes avant la mise à jour si vous utilisez l'un de ces éléments.

Notes de version complètes : https://www.home-assistant.io/blog/2026/09/02/release-20269/`,
  },
  migrations: {},
})
