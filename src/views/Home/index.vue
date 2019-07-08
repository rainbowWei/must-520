<template>
  <section>
    <h4 class="bo">{{name}}</h4>
    <SelfButton type="danger" @click="handleClick" size="small">
      <span class="icon iconfont icon-icon-test"></span>
      {{name}}
    </SelfButton>
    <SelfButton haha=0 type='success' @click="getTeachersList" size="large">获取教师列表</SelfButton>
    <SelfButton @click="addNumber">成功按钮</SelfButton>
    <div>
      <span v-for="province in getProvince" :key="province.label">⭐️{{province.value}} </span>
    </div>
    <div class="clearfix" v-show="teacherList.length">
      <div class="teacher" v-for="teacher in teacherList" :key="teacher.id">
        <p class="photo"><img :src="teacher.avator" alt="头像"/></p>
        <p class="name">{{teacher.name}}</p>
        <p class="register-time">{{teacher.registerDate}}</p>
      </div>
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
  .teacher {
    float: left;
  }
  .photo {
    margin: 12px 18px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    > img {
      @include size(120px);
    }
  }
</style>
