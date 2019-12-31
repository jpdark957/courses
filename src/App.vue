<template>
  <div id="app">
    <main-tab-bar />
    <!-- <keep-alive> -->
    <router-view v-if="isRouterAlive" />
    <!-- </keep-alive> -->
    <c-footer />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
import cFooter from "components/content/footer/Footer";
import "element-ui/lib/theme-chalk/display.css";

export default {
  name: "App",
  components: {
    MainTabBar,
    cFooter
  },
  provide() {
    // 注册一个方法
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
