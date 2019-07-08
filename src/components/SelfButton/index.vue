<template>
  <button :class="typeClass" @click="handleClick" :size="size || 'normal'">
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
    type: String,
    size: String
  },
  created () {
    this.typeClass = `self-btn self-btn-${TYPES[this.type ? this.type : 'primary']}`
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
@mixin buttonStyle ($c, $bc,  $bgc: transparent) {
  color: $c;
  border-color: $bc;
  background-color: $bgc;
}
@mixin buttonType ($type, $theme-color, $theme-hcolor) {
  @if $type == fill {
    @include buttonStyle(#fff, $theme-color, $theme-color);
    &:hover {
      @include buttonStyle(#fff, $theme-hcolor, $theme-hcolor);
    }
  } @else {
    @include buttonStyle($theme-color, $theme-color);
    &:hover {
      @include buttonStyle($theme-hcolor, $theme-hcolor);
    }
  }
}
@mixin buttonSize ($size) {
  @if $size == large {
    margin: 12px 20px;
    font-size: 20px;
    padding: 8px 14px;
    min-width: 160px;
  } @else if $size == small {
    font-size: 14px;
    min-width: 100px;
  } @else {
    font-size: 16px;
    min-width: 120px;
  }
}
$btn: #{$prefix}-btn;
.#{$btn} {
  padding: 8px 10px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  font-size: 16px;
  user-select: none;
}
.#{$btn}-primary {
  @include buttonType(hollow, $primary-color, $primary-hcolor)
}
.#{$btn}-danger {
  @include buttonType(hollow, $danger-color, $danger-hcolor)
}
.#{$btn}-success {
  @include buttonType(fill, $success-color, $success-hcolor);
}
.#{$btn}[size=small] {
  @include buttonSize(small);
}
.#{$btn}[size=large] {
  @include buttonSize(large);
}
.#{$btn}[size=normal] {
  @include buttonSize(normal);
}
</style>
