import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

// Tracks whether the HACS bootstrap files are present in the config volume.
// Written by the install/uninstall actions; read reactively in their metadata
// so the two actions toggle visibility (only one is shown at a time) and a
// re-install can't downgrade an already-bootstrapped (and self-updating) HACS.
const shape = z
  .object({
    hacsInstalled: z.boolean().catch(false),
  })
  .strip()

export const storeJson = FileHelper.json(
  {
    base: sdk.volumes.main,
    subpath: '/store.json',
  },
  shape,
)
