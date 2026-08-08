import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const trustedProxy = '10.0.3.0/24' as const

// Home Assistant's own web server settings, which it manages from the UI and
// reads back unvalidated — only the keys the reverse proxy depends on are
// modelled here so the rest of the store round-trips untouched. Nothing is
// defaulted, so a read can tell an absent key from one already holding the
// value the package wants; `stable` is absent until Home Assistant migrates
// the store, so it is optional too.
const shape = z.object({
  data: z.object({
    stable: z
      .object({
        use_x_forwarded_for: z.boolean().optional(),
        trusted_proxies: z.array(z.string()).optional(),
      })
      .optional(),
  }),
})

export const httpStoreJson = FileHelper.json(
  {
    base: sdk.volumes.config,
    subpath: '.storage/http',
  },
  shape,
)
