import { utils } from '@start9labs/start-sdk'
import { readFile } from 'fs/promises'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

// HA's homeassistant auth provider stores users (username + bcrypt hash) here.
// Other auth providers (trusted_networks, command_line, ...) are out of scope:
// they don't have passwords to reset.
const authStoreSubpath = '.storage/auth_provider.homeassistant'

const readUsernames = async (): Promise<string[]> => {
  try {
    const raw = await readFile(
      sdk.volumes.config.subpath(authStoreSubpath),
      'utf-8',
    )
    const parsed = JSON.parse(raw) as {
      data?: { users?: { username?: unknown }[] }
    }
    return (parsed.data?.users ?? [])
      .map((u) => u.username)
      .filter((u): u is string => typeof u === 'string' && u.length > 0)
  } catch {
    return []
  }
}

const inputSpec = InputSpec.of({
  username: Value.dynamicSelect(async () => {
    const usernames = await readUsernames()
    return {
      name: i18n('Username'),
      default: usernames[0] ?? '',
      values: Object.fromEntries(usernames.map((u) => [u, u])),
    }
  }),
})

export const resetPassword = sdk.Action.withInput(
  // id
  'reset-password',

  // metadata
  async () => ({
    name: i18n('Reset Password'),
    description: i18n('Reset a Home Assistant user password'),
    warning: null,
    // Home Assistant must be stopped: it caches auth provider state in memory
    // and overwrites the on-disk file on graceful shutdown, which would
    // silently revert the reset.
    allowedStatuses: 'only-stopped',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  // prefill
  async () => {},

  // handler
  async ({ effects, input }) => {
    const password = utils.getDefaultString({
      charset: 'a-z,A-Z,1-9',
      len: 22,
    })

    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'home-assistant' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'config',
        subpath: null,
        mountpoint: '/config',
        readonly: false,
      }),
      'reset-password',
      async (sub) => {
        await sub.execFail([
          'hass',
          '--script',
          'auth',
          '-c',
          '/config',
          'change_password',
          input.username,
          password,
        ])
      },
    )

    return {
      version: '1',
      title: i18n('Password Reset'),
      message: i18n(
        'Your password has been reset. Use the new password below to log in.',
      ),
      result: {
        type: 'group',
        value: [
          {
            type: 'single',
            name: i18n('Username'),
            description: null,
            value: input.username,
            masked: false,
            copyable: true,
            qr: false,
          },
          {
            type: 'single',
            name: i18n('Password'),
            description: null,
            value: password,
            masked: true,
            copyable: true,
            qr: false,
          },
        ],
      },
    }
  },
)
