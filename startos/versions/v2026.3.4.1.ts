import { VersionInfo } from '@start9labs/start-sdk'

export const v_2026_3_4_1 = VersionInfo.of({
  version: '2026.3.4:1',
  releaseNotes: {
    en_US: 'Fix reverse proxy configuration to resolve 400 Bad Request on web UI',
    es_ES: 'Corrección de la configuración del proxy inverso para resolver el error 400 en la interfaz web',
    de_DE: 'Reverse-Proxy-Konfiguration behoben, um den 400-Bad-Request-Fehler der Weboberfläche zu beheben',
    pl_PL: 'Naprawa konfiguracji reverse proxy w celu rozwiązania błędu 400 w interfejsie webowym',
    fr_FR: 'Correction de la configuration du proxy inverse pour résoudre l\'erreur 400 sur l\'interface web',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
