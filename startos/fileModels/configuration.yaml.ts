import { matches, FileHelper } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const { object } = matches

const shape = object({
  default_config: object({}),
})

export const configurationYaml = FileHelper.yaml(
  {
    base: sdk.volumes.config,
    subpath: 'configuration.yaml',
  },
  shape,
)
