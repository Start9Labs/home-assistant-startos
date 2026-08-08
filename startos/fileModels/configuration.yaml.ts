import { FileHelper, yaml, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

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

// Home Assistant owns the web server settings in its own store and ignores this
// block, which is modelled only so the version migration can drop what earlier
// releases of this package wrote.
const shape = z.object({
  http: z.unknown().optional(),
})

export const configurationYaml = FileHelper.yaml(
  {
    base: sdk.volumes.config,
    subpath: 'configuration.yaml',
  },
  shape,
  { customTags },
)
