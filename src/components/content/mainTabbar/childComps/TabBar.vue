<template>
  <div class="tab-bar">

    <div class="nav">
      <nav-main path="/home">
        <ul>
          <li>首页</li>
        </ul>
      </nav-main>

      <nav-main path="/teachVideo">
        <ul>
          <li>教学视频</li>
        </ul>
      </nav-main>

      <nav-main>
        <ul>
          <li>教学资料</li>
        </ul>
      </nav-main>

      <nav-main>
        <ul>
          <li>课后谈论</li>
        </ul>
      </nav-main>

      <nav-main>
        <ul>
          <li>教学反馈</li>
        </ul>
      </nav-main>
    </div>

    <div class="search">
      <nav-search />
    </div>

  </div>
</template>

<script>
import NavMain from "./NavMain"
import NavSearch from "./NavSearch"
export default {
  name: "TabBar",
  components: {
    NavMain,
    NavSearch
  },
  data() {
    return {
      path: String
    };
  },
  methods: {}
};
</script>

<style scoped>
.tab-bar {
  width: 100%;
  height: 50px;
  background-color: var(--color-main);
  /* background-color: #f0f0f0; */
  border-top: 3px solid #cfb872;
}

.nav {
  width: 50%;
  height: 100%;
  margin-left: 17%;
  float: left;
}

.nav ul li {
  font-size: 18px;
  color: white;
  float: right;
  list-style: none;
  text-align: center;
  line-height: 50px;
}

.nav ul li:hover {
  color: 	#DAA520;
}

.search {
  width: 20%;
  height: 100%;
  margin-left: 0%;
  float: left;
}









</style>