import axios from '@/utils/axios'

export const getTeacherListApi = () => {
  return axios.post('/teacherList', {
    token: 'jfslk3jfdksjofqtkjfiour43jfdu9802'
  })
}