import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'
import { sdk } from '../sdk'

export const v_2026_4_2_2 = VersionInfo.of({
  version: '2026.4.2:2',
  releaseNotes: {
    en_US:
      'Fix UI-created automations, scripts, and scenes not loading. configuration.yaml is now bootstrapped by Home Assistant itself; any manual edits to it will be lost. (start-sdk 1.4.1)',
    es_ES:
      'Soluciona que las automatizaciones, scripts y escenas creadas en la interfaz no se carguen. configuration.yaml ahora es generado por Home Assistant; cualquier edición manual se perderá. (start-sdk 1.4.1)',
    de_DE:
      'Behebt, dass über die Benutzeroberfläche erstellte Automatisierungen, Skripte und Szenen nicht geladen werden. configuration.yaml wird jetzt von Home Assistant erstellt; manuelle Änderungen gehen verloren. (start-sdk 1.4.1)',
    pl_PL:
      'Naprawia, że automatyzacje, skrypty i sceny utworzone w interfejsie nie są ładowane. configuration.yaml jest teraz generowany przez Home Assistant; ręczne zmiany zostaną utracone. (start-sdk 1.4.1)',
    fr_FR:
      "Corrige le fait que les automatisations, scripts et scènes créés dans l'interface ne sont pas chargés. configuration.yaml est désormais généré par Home Assistant ; toute modification manuelle sera perdue. (start-sdk 1.4.1)",
  },
  migrations: {
    up: async ({ effects }) => {
      // Remove the prior :1 seed so HA's first-run logic re-runs and writes
      // a complete configuration.yaml + empty automations/scripts/scenes.
      // bootstrapHa picks this up next.
      await rm(sdk.volumes.config.subpath('configuration.yaml'), {
        force: true,
      })
    },
    down: IMPOSSIBLE,
  },
})
