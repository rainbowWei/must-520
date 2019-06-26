<template>
  <section>
    <h4 class="bo">{{name}}</h4>
    <SelfButton type="danger" @click="handleClick" a="123">
      <span class="icon iconfont icon-icon-test"></span>
      {{name}}
    </SelfButton>
    <SelfButton type='success' @click="getTeachersList">获取教师列表</SelfButton>
    <SelfButton @click="addNumber">成功按钮</SelfButton>
    <div>
      <span v-for="province in getProvince" :key="province.label">⭐️{{province.value}} </span>
    </div>
    <div v-show="teacherList.length">
      <span v-for="teacher in teacherList" :key="teacher.id">{{teacher.name}}</span>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { SelfButton } from '@/components'
import { debuglog } from 'util';

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
  mounted () {
    this.getInitCountries()
  },
  computed: {
    // ...mapState(['countryList', 'teacherList']),
    ...mapGetters(['getProvince']),
    ...mapState({
      teacherList: state => state.teacher.teacherList
    })
  },
  methods: {
    ...mapActions([
      'getInitCountries',
      'addNumber',
      'getTeachersList'
    ]),
    handleClick () {
      console.log('按钮事件哦~~')
    },
    defaultHandle () {
      this.getTeachersList()
    }
  }
}
</script>

<style lang="scss" scoped>
  .bo {
    color: $danger-color;
  }
</style>
