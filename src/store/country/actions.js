import * as types from './types'
import server from '@/services/a'

const action = {
  getInitCountries ({state, commit, rootState}) {
    try {
      const res = server.getCountry()
      res.then(res => {
        console.log(res, 'iiiii')
        commit(types.COUNTRY_INIT_DATA, res.data)
      })
      // const res = await server.getCountry()
      // commit(types.COUNTRY_INIT_DATA, res.data)
    } catch (e) {
      throw new Error(e)
    }
  }
}
export default action
