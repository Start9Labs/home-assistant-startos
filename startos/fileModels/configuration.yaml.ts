import { FileHelper, yaml, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const trustedProxy = '10.0.3.0/24' as const

const httpDefaults = {
  use_x_forwarded_for: true as const,
  trusted_proxies: [trustedProxy],
}

// HA's YAML loader supports several custom tags. Without registering handlers
// for each, the standard parser silently drops them on read — corrupting any
// such directive (e.g. `themes: !include_dir_merge_named themes`) when we
// round-trip the file. Users may legitimately add any of these via SSH.
class HaTag {
  constructor(
    public tag: string,
    public value: string,
  ) {}
}

const HA_TAGS = [
  '!include',
  '!include_dir_list',
  '!include_dir_named',
  '!include_dir_merge_list',
  '!include_dir_merge_named',
  '!secret',
  '!env_var',
] as const

const customTags: yaml.ScalarTag[] = HA_TAGS.map((tag) => ({
  identify: (v: unknown): v is HaTag => v instanceof HaTag && v.tag === tag,
  tag,
  resolve: (str: string) => new HaTag(tag, str),
  stringify: (item) => (item.value as HaTag).value,
}))

const shape = z.object({
  http: z
    .object({
      use_x_forwarded_for: z
        .literal(httpDefaults.use_x_forwarded_for)
        .catch(httpDefaults.use_x_forwarded_for),
      trusted_proxies: z
        .array(z.literal(trustedProxy))
        .catch(httpDefaults.trusted_proxies),
    })
    .catch(httpDefaults),
})

export const configurationYaml = FileHelper.yaml(
  {
    base: sdk.volumes.config,
    subpath: 'configuration.yaml',
  },
  shape,
  { customTags },
)
