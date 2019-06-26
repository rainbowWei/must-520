import axios from '@/utils/axios'

export default {
  getCountry () {
    return axios.get(`/country`, { params: { size: 2 } })
  }
}
