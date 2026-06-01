import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'

export const removeHacs = sdk.Action.withoutInput(
  // id
  'remove-hacs',

  // metadata
  async ({ effects }) => {
    const installed =
      (await storeJson.read().const(effects))?.hacsInstalled ?? false
    return {
      name: i18n('Remove HACS'),
      description: i18n(
        "Remove the HACS (Home Assistant Community Store) files from Home Assistant. Things you installed through HACS are kept - see this service's Instructions.",
      ),
      warning: i18n(
        'If you activated HACS, first remove its integration in Home Assistant (Settings > Devices & Services > HACS > Delete). This action then deletes the HACS files; integrations, cards, and themes you installed through HACS remain, and your GitHub authorization is not revoked.',
      ),
      allowedStatuses: 'any',
      group: null,
      // The mirror of Set Up HACS: shown only while HACS is installed.
      visibility: installed ? 'enabled' : 'hidden',
    }
  },

  // handler
  async ({ effects }) => {
    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'home-assistant' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'config',
        subpath: null,
        mountpoint: '/config',
        readonly: false,
      }),
      'remove-hacs',
      async (sub) => {
        // Remove the integration code and HACS's stored data. Things HACS
        // pulled in (other custom_components, www/community assets) are the
        // user's and are left in place.
        await sub.execFail(['rm', '-rf', '/config/custom_components/hacs'])
        await sub.execFail(['rm', '-rf', '/config/.storage/hacs'])
      },
    )

    await storeJson.merge(effects, { hacsInstalled: false })

    // Restart only if HA is actually running; if it is stopped the removal
    // takes effect on the next start.
    if ((await sdk.getStatus(effects).once())?.started) {
      await sdk.restart(effects)
    }

    return {
      version: '1',
      title: i18n('HACS Removed'),
      message: i18n(
        "HACS has been removed. Anything you installed through HACS (integrations, cards, and themes) is still present - see this service's Instructions to remove those or revoke GitHub access.",
      ),
      result: null,
    }
  },
)
