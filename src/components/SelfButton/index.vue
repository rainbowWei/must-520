<template>
  <button :class="['button', 'self-button', typeClass]" @click="handleClick">
    <slot>按钮</slot>
  </button>
</template>

<script>
const TYPES = {
  'default': 'primary',
  'primary': 'primary',
  'danger': 'danger',
  'success': 'success'
}
export default {
  name: 'SelfButton',
  data () {
    return {
      typeClass: ''
    }
  },
  props: {
    type: String
  },
  created () {
    console.log(this.type, '99999')
    this.typeClass = `${TYPES[this.type]}-button`
  },
  mounted () {
    console.log(this.type, '90909')
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  color: $primary-color;
  border-color: $primary-color;
  padding: 8px 10px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  font-size: 16px;
  user-select: none;
  &:hover {
    color: $primary-hcolor;
    border-color: $primary-hcolor;
  }
  &.self-button {
    min-width: 120px;
    font-size: 16px;
    margin: 4px 8px;
  }
  &.danger-button {
    color: $danger-color;
    border-color: $danger-color;
    &:hover {
      color: $danger-hcolor;
      border-color: $danger-hcolor;
    }
  }
  &.success-button {
    color: $success-color;
    border-color: $success-color;
    &:hover {
      color: $success-hcolor;
      border-color: $success-hcolor;
    }
  }
}
</style>
