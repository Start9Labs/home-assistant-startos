import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z
  .object({
    default_config: z.object({}).catch({}),
  })
  .strip()

export const configurationYaml = FileHelper.yaml(
  {
    base: sdk.volumes.config,
    subpath: 'configuration.yaml',
  },
  shape,
)
