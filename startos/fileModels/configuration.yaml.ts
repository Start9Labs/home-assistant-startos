import { matches, FileHelper } from '@start9labs/start-sdk'

const { object } = matches

const shape = object({
  default_config: object({}),
})

export const configurationYaml = FileHelper.yaml(
  {
    volumeId: 'config',
    subpath: 'configuration.yaml',
  },
  shape,
)
