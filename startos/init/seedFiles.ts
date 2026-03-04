import { configurationYaml } from '../fileModels/configuration.yaml'
import { sdk } from '../sdk'

export const seedFiles = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return
  await configurationYaml.merge(effects, {})
})
