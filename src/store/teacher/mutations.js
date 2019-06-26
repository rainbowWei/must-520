import { TEACHER_INFO_LIST } from './types'

const mutations = {
  [TEACHER_INFO_LIST](state, params) {
    state.teacherList = params
  }
}
export default mutations