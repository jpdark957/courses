<template>
  <div>
<!--      头部登录与注册-->
    <div class="top-user" v-if="this.path != '/teachVideo/'+this.rou">
            <login-and-reg v-if="!user"/>
            <user v-if="user"/>
    </div>
<!--      头部登录与注册-->
    <video-tab v-else />
    <img src="~assets/img/common/top.jpg" alt class="top-img" v-if="this.path === '/home'" />
  </div>
</template>

<script>
import { wRoute } from "common/mixin";
import VideoTab from "./VideoTab";
import LoginAndReg from "./LoginAndReg";
import User from "./User";
export default {
  name: "TabBarTop",
  data() {
    return {
      rou: "asda",
    };
  },
    computed:{
        user(){
            return  this.$store.state.user.id != null
        }
    },
  components: {
    VideoTab,
    LoginAndReg,
    User
  },
  mixins: [wRoute],
  methods:{

  }
};
</script>

<style scoped>

.top-user {
  width: 100%;
  height: 35px;
  padding-top: 6px;
  padding-bottom: 2px;
  background-color: var(--color-main);
  color: white;
}

.top-img {
  width: 100%;
  height: 300px;
}


</style>