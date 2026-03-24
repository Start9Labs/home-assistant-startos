import { configurationYaml } from '../fileModels/configuration.yaml'
import { sdk } from '../sdk'

export const seedFiles = sdk.setupOnInit(async (effects) => {
  await configurationYaml.merge(effects, {})
})
