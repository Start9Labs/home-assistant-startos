import { VersionGraph } from '@start9labs/start-sdk'
import { v_2026_4_2_1 } from './v2026.4.2_1'
import { v_2026_4_2_2 } from './v2026.4.2_2'

export const versionGraph = VersionGraph.of({
  current: v_2026_4_2_2,
  other: [v_2026_4_2_1],
})
