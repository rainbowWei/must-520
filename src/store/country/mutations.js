import * as types from './types'
const mutation = {
  [types.COUNTRY_INIT_DATA](state, data) {
    console.log(data, '00000jjjjjjj')
    state.countryList = data
  },
  ['xxxx'](state, data) {
    state.x = data
  }
}

export default mutation
