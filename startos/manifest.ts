import { setupManifest } from '@start9labs/start-sdk'
import { SDKImageInputSpec } from '@start9labs/start-sdk/base/lib/types/ManifestTypes'

const BUILD = process.env.BUILD || ''

const architectures =
  BUILD === 'x86_64' || BUILD === 'aarch64' ? [BUILD] : ['x86_64', 'aarch64']

export const manifest = setupManifest({
  id: 'home-assistant',
  title: 'Home Assistant',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/home-assistant-startos/',
  upstreamRepo: 'https://github.com/home-assistant/core/',
  supportSite: 'https://community.home-assistant.io/',
  marketingSite: 'https://homeassistant.io/',
  donationUrl: null,
  docsUrl: 'https://www.home-assistant.io/docs/',
  description: {
    short:
      'Open source home automation that puts local control and privacy first',
    long: 'Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts',
  },
  volumes: ['main', 'config'],
  images: {
    'home-assistant': {
      source: { dockerTag: 'ghcr.io/home-assistant/home-assistant:2025.11.1' },
      arch: architectures,
    } as SDKImageInputSpec,
  },
  hardwareRequirements: {
    arch: architectures,
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
