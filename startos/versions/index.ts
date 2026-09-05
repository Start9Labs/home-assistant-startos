import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_2026_8_2_0 } from './v2026.8.2_0'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_2026_8_2_0],
})
