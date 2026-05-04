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
  'Username': 8,
  'Password Reset': 9,
  'Your password has been reset. Use the new password below to log in.': 10,
  'Password': 11,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
