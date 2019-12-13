<template>
  <el-row class="tab-bar">

    <el-col :span="19" :offset="5">

      <el-col :span="2" v-for="(item, index) in navData" :key="index">
        <nav-main :path="item.liPath">
          <ul>
            <li><i :class="item.icon"></i>&nbsp;{{item.liCon}}</li>
          </ul>
        </nav-main>
      </el-col>

      <el-col :span="4" :offset="4">
        <nav-search />
      </el-col>

    </el-col>

  </el-row>
</template>

<script>
import NavMain from "./NavMain";
import NavSearch from "./NavSearch";
export default {
  name: "TabBar",
  components: {
    NavMain,
    NavSearch
  },
  data() {
    return {
      navData: [
        {
          liCon: "首页",
          icon:"el-icon-s-home",
          liPath: "/home"
        },
        {
          liCon: "教学视频",
          icon:"el-icon-video-camera",
          liPath: "/teachVideo"
        },
        {
          liCon: "教学资料",
          icon:"el-icon-tickets",
          liPath: "/home"
        },
        {
          liCon: "课程讨论",
          icon:"el-icon-chat-dot-square",
          liPath: "/home"
        },
        {
          liCon: "教学反馈",
          icon:"el-icon-chat-line-square",
          liPath: "/comment"
        }
      ]
    };
  }
};
</script>

<style scoped>
.tab-bar {
  height: 50px;
  border-top: 3px solid #cfb872;
  background-color: var(--color-main);
  color: #fff;
}

ul li {
  font-size: 14px;
  line-height: 47px;
  float: right;
  list-style: none;
  text-align: center;
  cursor: pointer;
}
ul li:hover {
  color: #daa520;
}
.search {
  height: 100%;
  float: left;
}
</style>