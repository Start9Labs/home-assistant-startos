import { sdk } from '../sdk'
import { resetPassword } from './resetPassword'
import { setUpHacs } from './setUpHacs'
import { removeHacs } from './removeHacs'

export const actions = sdk.Actions.of()
  .addAction(resetPassword)
  .addAction(setUpHacs)
  .addAction(removeHacs)
