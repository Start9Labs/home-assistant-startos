import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const trustedProxy = '10.0.3.0/24' as const

const httpDefaults = {
  use_x_forwarded_for: true as const,
  trusted_proxies: [trustedProxy],
}

const shape = z.object({
  default_config: z.object({}).catch({}),
  http: z
    .object({
      use_x_forwarded_for: z.literal(httpDefaults.use_x_forwarded_for).catch(httpDefaults.use_x_forwarded_for),
      trusted_proxies: z.array(z.literal(trustedProxy)).catch(httpDefaults.trusted_proxies),
    })
    .catch(httpDefaults),
})

export const configurationYaml = FileHelper.yaml(
  {
    base: sdk.volumes.config,
    subpath: 'configuration.yaml',
  },
  shape,
)
