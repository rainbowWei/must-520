import Vue from 'vue'
import Vuex from 'vuex'
import country from './country'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    x: {
      heihei: 2
    }
  },
  ...country
})
