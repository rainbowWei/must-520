import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import * as types from './types'

const _teacher = {
  state,
  actions,
  getters,
  mutations,
  types
}
export default _teacher
export const teacher = { ..._teacher 
}