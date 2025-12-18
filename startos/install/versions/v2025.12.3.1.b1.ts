import { VersionInfo } from '@start9labs/start-sdk'

export const v_2025_12_3_1_b1 = VersionInfo.of({
  version: '2025.12.3:1-beta.1',
  releaseNotes: 'Initial release for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
