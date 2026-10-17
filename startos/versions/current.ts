import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.10.2:0',
  releaseNotes: {
    en_US: `Updated Home Assistant to 2026.10.2 and start-sdk to 3.0.6.

- Fixes MQTT device triggers and tags firing twice after reload, and restores lists of states in conditions with a duration.
- Revokes refresh tokens when removing a user and redacts sensitive data in several integrations' diagnostics.
- Includes fixes for Modbus reloads without YAML configuration and group sensors with no members.

Full release notes: https://github.com/home-assistant/core/releases/tag/2026.10.2`,
    es_ES: `Actualiza Home Assistant a 2026.10.2 y start-sdk a 3.0.6.

- Corrige los disparadores de dispositivos y etiquetas MQTT que se activaban dos veces tras recargar y restaura las listas de estados en condiciones con duración.
- Revoca los tokens de actualización al eliminar un usuario y oculta datos sensibles en los diagnósticos de varias integraciones.
- Incluye correcciones para las recargas de Modbus sin configuración YAML y los sensores de grupo sin miembros.

Notas completas de la versión: https://github.com/home-assistant/core/releases/tag/2026.10.2`,
    de_DE: `Aktualisiert Home Assistant auf 2026.10.2 und start-sdk auf 3.0.6.

- Behebt doppelt ausgelöste MQTT-Geräte-Trigger und Tags nach dem Neuladen und ermöglicht wieder Zustandslisten in Bedingungen mit einer Dauer.
- Widerruft Aktualisierungstoken beim Entfernen eines Benutzers und entfernt sensible Daten aus den Diagnosen mehrerer Integrationen.
- Enthält Korrekturen für das Neuladen von Modbus ohne YAML-Konfiguration und Gruppensensoren ohne Mitglieder.

Vollständige Versionshinweise: https://github.com/home-assistant/core/releases/tag/2026.10.2`,
    pl_PL: `Aktualizuje Home Assistant do 2026.10.2 i start-sdk do 3.0.6.

- Naprawia podwójne wyzwalanie wyzwalaczy urządzeń i tagów MQTT po przeładowaniu oraz przywraca listy stanów w warunkach z czasem trwania.
- Unieważnia tokeny odświeżania po usunięciu użytkownika i ukrywa dane wrażliwe w diagnostyce kilku integracji.
- Zawiera poprawki przeładowywania Modbus bez konfiguracji YAML oraz czujników grup bez członków.

Pełne informacje o wydaniu: https://github.com/home-assistant/core/releases/tag/2026.10.2`,
    fr_FR: `Met à jour Home Assistant vers 2026.10.2 et start-sdk vers 3.0.6.

- Corrige le double déclenchement des déclencheurs d'appareils et des tags MQTT après rechargement et rétablit les listes d'états dans les conditions avec une durée.
- Révoque les jetons de rafraîchissement lors de la suppression d'un utilisateur et masque les données sensibles dans les diagnostics de plusieurs intégrations.
- Inclut des correctifs pour le rechargement de Modbus sans configuration YAML et les capteurs de groupe sans membres.

Notes de version complètes : https://github.com/home-assistant/core/releases/tag/2026.10.2`,
  },
  migrations: {},
})
