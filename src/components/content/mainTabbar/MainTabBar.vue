<template>
  <div class="main-tab-bar">
    <tab-bar-top />
    <tab-bar v-if="this.path != '/teachVideo/'+this.rou" />
  </div>
</template>

<script>
import TabBarTop from './childComps/TabBarTop'
import TabBar from './childComps/TabBar'
import { wRoute } from 'common/mixin';
export default {
  name: 'MainTabBar',
  data() {
    return {
      rou: 'asda'
    }
  },
  components: {
    TabBarTop,
    TabBar
  },
  mixins: [wRoute]

}
</script>

<style scoped>
  .main-tab-bar {
    width: 100%;
  }
</style>