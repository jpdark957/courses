<template>
  <div class="main-tab-bar">

    <tab-bar-top></tab-bar-top>
    <tab-bar></tab-bar>

  </div>
</template>

<script>
import TabBarTop from './childComps/TabBarTop'
import TabBar from './childComps/TabBar'

export default {
  name: 'MainTabBar',
  components: {
    TabBarTop,
    TabBar
  }

}
</script>

<style scoped>
  .main-tab-bar {
    width: 100%;
    position: relative;
  }
</style>