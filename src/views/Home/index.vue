<template>
  <section>
    <h4 class="bo">{{name}}</h4>
    <SelfButton type="danger" @click="handleClick" a="123">
      <span class="icon iconfont icon-icon-test"></span>
      {{name}}
    </SelfButton>
    <SelfButton type='success' @click="defaultHandle"></SelfButton>
    <SelfButton>成功按钮</SelfButton>
    <div @click="h">
      <span v-for="province in getProvince" :key="province.label">⭐️{{province.value}} </span>
    </div>
  </section>
</template>

<script>
import server from '@/services/a'
import { mapState, mapActions, mapGetters } from 'vuex'
import { SelfButton } from '@/components'

export default {
  name: 'home',
  components: {
    SelfButton
  },
  data () {
    return {
      name: '首页 Home'
    }
  },
  async mounted () {
    this.getInitCountries()
  },
  computed: {
    // ...mapState({
    //   'countryList': state => state.country.countryList 
    // })
    ...mapState(['countryList']),
    ...mapGetters(['getProvince'])
  },
  methods: {
    // ...mapActions('country', ['getInitCountries'])
    ...mapActions(['getInitCountries']),
    h () {
      console.log('h')
    },
    handleClick () {
      console.log('按钮事件哦~~')
    },
    defaultHandle () {
      console.log('000000')
    }
  }
}
</script>

<style lang="scss" scoped>
  .bo {
    color: $danger-color;
  }
</style>
