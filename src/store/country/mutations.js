import * as types from './types'
const mutation = {
  [types.COUNTRY_INIT_DATA] (state, data) {
    state.countryList = data
  }
}

export default mutation
