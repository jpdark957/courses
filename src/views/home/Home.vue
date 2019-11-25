<template>
  <div class="home">
    <div class="content">
      <h-course-introduce :HomeTabAContent="HomeTabAContent"/>
    </div>
  </div>
</template>

<script>
import HCourseIntroduce from './childComps/HCourseIntroduce'
import { getHomeTab } from 'network/home'
export default {
  name: 'Home',
  data() {
    return {
      HomeTabAContent: [],
      // cContent: [
      //   {
      //     // iamges: require(""),
      //     content: []
      //   }
      // ]
    }
  },
  components: {
    HCourseIntroduce
  },
  created() {
    this.getHomeTab()
  },
  methods: {
    getHomeTab() {
      getHomeTab().then(res => {
        console.log(res)
        console.log(res[0])
        this.HomeTabAContent = res
        // this.tabs = res.homeLabel
      })
    }
  }
}
</script>

<style scoped>
  .home {
    width: 100%;
    background-color:#f0f0f0;
    
  }

  .content {
    width: 100%;
    background-color:#f0f0f0;
  }
  .courseIntroduce {
    width: 80%;
    height: 620px;
    background-color: #fff;
    margin: 30px auto 50px auto;
    box-shadow: 0 0 20px #e7e7e7;
  }

</style>