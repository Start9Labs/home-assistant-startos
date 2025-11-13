import { VersionGraph } from '@start9labs/start-sdk'
import { current, other } from './versions'
import { configurationYaml } from '../fileModels/configuration.yaml'

export const versionGraph = VersionGraph.of({
  current,
  other,
  preInstall: async (effects) => {
    await configurationYaml.write(effects, { default_config: {} })
  },
})
