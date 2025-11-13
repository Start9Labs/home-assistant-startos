import { VersionInfo } from '@start9labs/start-sdk'

export const v_2025_11_1 = VersionInfo.of({
  version: '2025.11.1:0',
  releaseNotes: 'Initial release for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
