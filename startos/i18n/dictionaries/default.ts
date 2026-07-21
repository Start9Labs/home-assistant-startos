export const DEFAULT_LANG = 'en_US'

const dict = {
  'Starting Home Assistant!': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,
  'Web UI': 4,
  'The web interface of Home Assistant': 5,
  'Reset Password': 6,
  'Reset a Home Assistant user password': 7,
  Username: 8,
  'Password Reset': 9,
  'Your password has been reset. Use the new password below to log in.': 10,
  Password: 11,
  'Set Up HACS': 12,
  "Add the HACS (Home Assistant Community Store) files to Home Assistant. You then finish setup inside Home Assistant - see this service's Instructions.": 13,
  'HACS installs community code that Start9 does not review and that runs with full access inside Home Assistant. It also needs a free GitHub account and cannot install StartOS-style add-ons. Continue only if you accept this.': 14,
  'HACS Files Added': 15,
  'The HACS files have been added. HACS is not active yet - open this service\'s Instructions and follow "Finish setting up HACS" to add the integration and authorize it with your GitHub account.': 16,
  'Remove HACS': 17,
  "Remove the HACS (Home Assistant Community Store) files from Home Assistant. Things you installed through HACS are kept - see this service's Instructions.": 18,
  'If you activated HACS, first remove its integration in Home Assistant (Settings > Devices & Services > HACS > Delete). This action then deletes the HACS files; integrations, cards, and themes you installed through HACS remain, and your GitHub authorization is not revoked.': 19,
  'HACS Removed': 20,
  "HACS has been removed. Anything you installed through HACS (integrations, cards, and themes) is still present - see this service's Instructions to remove those or revoke GitHub access.": 21,
  'Generating Home Assistant configuration': 22,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
