import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'
import { configurationYaml } from '../fileModels/configuration.yaml'
import { regenerateDefaults } from '../init/bootstrapHa'
import { sdk } from '../sdk'

export const v_2026_4_2_2 = VersionInfo.of({
  version: '2026.4.2:2',
  releaseNotes: {
    en_US:
      "Fix UI-created automations, scripts, and scenes not loading. configuration.yaml is reseeded with Home Assistant's upstream defaults; any top-level settings already in your file are preserved and merged on top. (start-sdk 1.4.1)",
    es_ES:
      'Soluciona que las automatizaciones, scripts y escenas creadas en la interfaz no se carguen. configuration.yaml se vuelve a generar con los valores predeterminados de Home Assistant; los ajustes de nivel superior que ya tenías se conservan y se aplican encima. (start-sdk 1.4.1)',
    de_DE:
      'Behebt, dass über die Benutzeroberfläche erstellte Automatisierungen, Skripte und Szenen nicht geladen werden. configuration.yaml wird mit den Standardwerten von Home Assistant neu erstellt; bereits vorhandene Einstellungen auf oberster Ebene bleiben erhalten und werden darüber gelegt. (start-sdk 1.4.1)',
    pl_PL:
      'Naprawia, że automatyzacje, skrypty i sceny utworzone w interfejsie nie są ładowane. configuration.yaml jest ponownie tworzony z domyślnymi wartościami Home Assistant; ustawienia najwyższego poziomu, które już masz, są zachowywane i nakładane na wierzch. (start-sdk 1.4.1)',
    fr_FR:
      "Corrige le fait que les automatisations, scripts et scènes créés dans l'interface ne sont pas chargés. configuration.yaml est régénéré avec les valeurs par défaut de Home Assistant ; les paramètres de premier niveau déjà présents dans votre fichier sont conservés et fusionnés par-dessus. (start-sdk 1.4.1)",
  },
  migrations: {
    up: async ({ effects }) => {
      // Stash the user's prior file (the :1 seed wrote `default_config: {}`,
      // but they may have added integrations or themes via SSH). If there's
      // no prior file, leave it to bootstrapHa to handle on next init.
      const userContent = await configurationYaml.read().once()
      if (!userContent) return

      // Force HA's first-run logic to rewrite the file with upstream defaults
      // (frontend.themes, !include directives for automations/scripts/scenes
      // — all of which the :1 seed suppressed), then merge the user's prior
      // settings on top. `default_config: {}` from the :1 seed survives
      // intact — HA accepts it equivalently to its own `default_config:` form.
      await rm(sdk.volumes.config.subpath('configuration.yaml'))
      await regenerateDefaults(effects)
      await configurationYaml.merge(effects, userContent)
    },
    down: IMPOSSIBLE,
  },
})
