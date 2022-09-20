<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isACtive">
    <slot name="item-icon"></slot>
  </div>
  <div v-else>
    <slot name="item-icon-active"></slot>
  </div>
  <div :style="activeStyle">
    <slot name="item-text"></slot>
  </div>
</div>
</template>

<script>
import { red } from 'color-name'

export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default:"red"
    }
  },
  data() {
    return {
      // isACtive:true
    }
  },
  computed: {
    isACtive() {
      return this.$route.path === this.path
    },
    activeStyle() {
      return this.isACtive ? {color : this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      //1.点击item，图标变化，文字变红
      //2.内容改变，本质路由：组件和路径的映射--路径跳转
      this.$router.push(this.path)
    }
  },
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 3px 0 2px;
}
</style>