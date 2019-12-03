<template>
  <div>
    <div class="top-user" v-if="this.path != '/teachVideo/'+this.rou">
      <div>
        <span class="user-login">登录</span>
        <i class="user-i"></i>
        <span class="user-register">注册</span>
      </div>
    </div>

    <video-tab v-else />

    <img src="~assets/img/common/top.jpg" alt class="top-img" v-if="this.path === '/home'" />
  </div>
</template>

<script>
import { wRoute } from "common/mixin";
import VideoTab from "./VideoTab";
export default {
  name: "TabBarTop",
  data() {
    return {
      rou: "asda"
    };
  },
  components: {
    VideoTab
  },
  mixins: [wRoute]
};
</script>

<style scoped>
/* .top-user {
    background-color: #fff;
    color: black;
  }
  .user-i {
    border: 1px solid black;
  } */

.top-user {
  width: 100%;
  height: 35px;
  padding-top: 10px;
  text-align: right;

  background-color: var(--color-main);
  color: white;
}

.user-i {
  border: 1px solid white;
}

.top-user > div {
  margin-left: -15%;
}
.top-user span {
  margin: 0px 20px;
  font-size: 14px;
  cursor: pointer;
}

.top-user span:hover {
  color: #daa520;
}

.top-img {
  width: 100%;
  height: 300px;
}
</style>