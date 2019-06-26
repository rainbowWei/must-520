import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import country from './country'
import teacher from './teacher'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    country,
    teacher
  }
})
