import { getTeacherListApi } from '@/services/teacher'
import { TEACHER_INFO_LIST } from './types'

const actions = {
  getTeachersList({ state, commit, rootState }) {
    getTeacherListApi()
    .then(res => {
      commit(TEACHER_INFO_LIST, res.data)
    })
  }
}

export default actions
