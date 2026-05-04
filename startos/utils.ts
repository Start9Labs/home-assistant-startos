import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'

export const uiPort = 8123

export const haSubcontainer = (effects: T.Effects, name: string) =>
  sdk.SubContainer.of(
    effects,
    { imageId: 'home-assistant' },
    sdk.Mounts.of()
      .mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/data',
        readonly: false,
      })
      .mountVolume({
        volumeId: 'config',
        subpath: null,
        mountpoint: '/config',
        readonly: false,
      }),
    name,
  )
