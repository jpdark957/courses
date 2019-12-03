<template>
  <el-row class="tab-bar">

    <el-col :span="19" :offset="5">

      <el-col :span="2" v-for="(item, index) in navData" :key="index">
        <nav-main :path="item.liPath">
          <ul>
            <li>{{item.liCon}}</li>
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
          liPath: "/home"
        },
        {
          liCon: "教学视频",
          liPath: "/teachVideo"
        },
        {
          liCon: "教学资料",
          liPath: "/home"
        },
        {
          liCon: "课后谈论",
          liPath: "/afterTalk"
        },
        {
          liCon: "教学反馈",
          liPath: "/home"
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