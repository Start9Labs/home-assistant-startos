import { setupManifest } from '@start9labs/start-sdk'
import i18n from './i18n'

export const manifest = setupManifest({
  id: 'home-assistant',
  title: 'Home Assistant',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9Labs/home-assistant-startos',
  upstreamRepo: 'https://github.com/home-assistant/core/',
  marketingUrl: 'https://homeassistant.io/',
  donationUrl: null,
  docsUrls: ['https://www.home-assistant.io/docs/'],
  description: i18n.description,
  volumes: ['main', 'config'],
  images: {
    'home-assistant': {
      source: { dockerTag: 'ghcr.io/home-assistant/home-assistant:2026.4.2' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
