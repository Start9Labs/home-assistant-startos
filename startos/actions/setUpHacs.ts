import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'

export const setUpHacs = sdk.Action.withoutInput(
  // id
  'set-up-hacs',

  // metadata
  async ({ effects }) => {
    const installed =
      (await storeJson.read().const(effects))?.hacsInstalled ?? false
    return {
      name: i18n('Set Up HACS'),
      description: i18n(
        "Add the HACS (Home Assistant Community Store) files to Home Assistant. You then finish setup inside Home Assistant - see this service's Instructions.",
      ),
      warning: i18n(
        'HACS installs community code that Start9 does not review and that runs with full access inside Home Assistant. It also needs a free GitHub account and cannot install StartOS-style add-ons. Continue only if you accept this.',
      ),
      // HACS files under custom_components/ only matter at startup and are never
      // rewritten by HA (unlike the auth store that forces reset-password to be
      // "only-stopped"), so this works whether HA is running or stopped: if it
      // is running we restart it to load HACS, if it is stopped the files take
      // effect on the next start.
      allowedStatuses: 'any',
      group: null,
      // Hidden once set up; the Remove HACS action takes its place. This also
      // prevents a re-run from overwriting (and downgrading) a HACS that has
      // since updated itself.
      visibility: installed ? 'hidden' : 'enabled',
    }
  },

  // handler
  async ({ effects }) => {
    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'home-assistant' },
      sdk.Mounts.of()
        .mountVolume({
          volumeId: 'config',
          subpath: null,
          mountpoint: '/config',
          readonly: false,
        })
        // The HACS release archive is bundled in the package (assets/hacs.zip),
        // so this needs no network access.
        .mountAssets({ subpath: null, mountpoint: '/assets' }),
      'set-up-hacs',
      async (sub) => {
        // Idempotent: clear any partial leftover so the extract is a clean state.
        await sub.execFail(['rm', '-rf', '/config/custom_components/hacs'])
        await sub.execFail(['mkdir', '-p', '/config/custom_components'])
        // Pure-stdlib extraction (python3 is in the image — the same runtime
        // reset-password relies on). Needs no bash/unzip; the archive's files
        // land directly under custom_components/hacs/.
        await sub.execFail(
          [
            'python3',
            '-m',
            'zipfile',
            '-e',
            '/assets/hacs.zip',
            '/config/custom_components/hacs',
          ],
          {},
          null,
        )
        // Fail loudly if the integration manifest did not land.
        await sub.execFail([
          'test',
          '-f',
          '/config/custom_components/hacs/manifest.json',
        ])
      },
    )

    await storeJson.merge(effects, { hacsInstalled: true })

    // Restart to load HACS only if HA is actually running; if it is stopped the
    // files take effect on the next start.
    if ((await sdk.getStatus(effects).once())?.started) {
      await sdk.restart(effects)
    }

    return {
      version: '1',
      title: i18n('HACS Files Added'),
      message: i18n(
        'The HACS files have been added. HACS is not active yet - open this service\'s Instructions and follow "Finish setting up HACS" to add the integration and authorize it with your GitHub account.',
      ),
      result: null,
    }
  },
)
