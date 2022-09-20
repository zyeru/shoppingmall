<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from './component/content/maintabbar/MainTabBar.vue';

export default {
  name: '#app',
  components: {
    MainTabBar,
    
}
}
</script>

<style>
@import 'assets/css/base.css';
</style>