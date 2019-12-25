<template>
  <div id="app">
    <main-tab-bar />
    <keep-alive exclude="teachVideo">
      <router-view />
    </keep-alive>
    <c-footer />

  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
import cFooter from 'components/content/footer/Footer'
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: 'App',
  components: {
    MainTabBar,
    cFooter
  }
}
</script>

<style scoped>
  @import "assets/css/base.css";

</style>
