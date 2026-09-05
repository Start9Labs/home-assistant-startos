import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.9.1:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.9.1.

- Fixes backup receiving to stream data reliably and avoid deadlocks.
- Corrects inline-image handling in SMTP notifications.
- Includes integration and device-registry fixes, including UniFi Protect host overrides and cleanup of unreachable deleted devices.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.9.1`,
    es_ES: `Actualiza Home Assistant a 2026.9.1.

- Corrige la recepción de copias de seguridad para transmitir los datos de forma fiable y evitar bloqueos.
- Corrige el manejo de imágenes insertadas en las notificaciones SMTP.
- Incluye correcciones de integraciones y del registro de dispositivos, como la sustitución del host en UniFi Protect y la limpieza de dispositivos eliminados inaccesibles.

Notas completas de la versión: https://github.com/home-assistant/core/releases/tag/2026.9.1`,
    de_DE: `Aktualisiert Home Assistant auf 2026.9.1.

- Behebt den Empfang von Sicherungen, damit Daten zuverlässig gestreamt und Deadlocks vermieden werden.
- Korrigiert die Verarbeitung eingebetteter Bilder in SMTP-Benachrichtigungen.
- Enthält Fehlerbehebungen für Integrationen und die Geräteregistrierung, darunter die Host-Überschreibung für UniFi Protect und das Bereinigen nicht erreichbarer gelöschter Geräte.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.9.1`,
    pl_PL: `Aktualizuje Home Assistant do 2026.9.1.

- Naprawia odbieranie kopii zapasowych, zapewniając niezawodne strumieniowanie danych i unikając zakleszczeń.
- Poprawia obsługę osadzonych obrazów w powiadomieniach SMTP.
- Zawiera poprawki integracji i rejestru urządzeń, w tym zastępowania hosta UniFi Protect oraz usuwania nieosiągalnych, skasowanych urządzeń.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.9.1`,
    fr_FR: `Met à jour Home Assistant vers 2026.9.1.

- Corrige la réception des sauvegardes afin de diffuser les données de manière fiable et d'éviter les interblocages.
- Corrige la gestion des images intégrées dans les notifications SMTP.
- Inclut des correctifs pour les intégrations et le registre des appareils, notamment le remplacement de l'hôte UniFi Protect et le nettoyage des appareils supprimés inaccessibles.

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.9.1`,
  },
  migrations: {},
})
