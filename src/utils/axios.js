import nativeAxios from 'axios'
import Vue from 'vue'
import config from '@/config/dev.config'

const instance = nativeAxios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf8'
  },
  baseURL: `${config.url}${config.subfix}`
})

instance.interceptors.request.use(function (conf) {
  if (conf.method === 'get') {
    if (!conf.params) {
      conf.params = {}
    }
    conf.params[`_t`] = Date.now()
    
    const search = Object.keys(conf.params).map(key => {
      return `${key}=${conf.params[key]}`
    }).join('&')
  
    conf = Object.assign(conf, {
      url: `${conf.url}?${search}`
    })
  }
  return conf
})

instance.interceptors.response.use(res => {
  return res = res.data
})


let _instance = {
  install: function (Vue, options) {
    Vue.axios = instance
    Object.defineProperties(Vue.prototype, {
      axios: {
        get () {
          return instance
        }
      },
      $axios: {
        get () {
          return instance
        }
      }
    })
  }
}
// Vue.use(_instance)

export default instance
export const axios = _instance
