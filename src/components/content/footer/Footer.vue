<template>
  <div class="footerBox" v-if="this.path != '/teachVideo/'+$route.params.id ">
    <div class="fOne">
      <span v-for="(item, index) in firstCon" :key="index">{{item}}</span>
    </div>
    <div class="fTwo">
      <span v-for="(item, index) in lastCon" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
// import FooterCon from "./childComps/FooterCon";
import { wRoute } from "common/mixin";
export default {
  name: "cFooter",
  data() {
    return {
      firstCon: [
        "COPYRIGHT",
        "©",
        "2019",
        "广东科贸职业学院",
        "ALL RIGHTS RESERVED."
      ],
      lastCon: [
        "石井校区地址：广州市白云区石庆路388号",
        "邮编：510430",
        "备案号：粤ICP备07027005号-1",
        "技术支持：综合楼614"
      ]
    };
  },
  mixins: [wRoute]
};
</script>

<style scoped>
.footerBox {
  width: 100%;
  background-color: rgba(33, 68, 131);
  clear: both;
}
.footerBox > div:first-child {
  padding-top: 5px;
}
.footerBox > div {
  color: #fff;
  text-align: center;
}
span {
  padding-left: 6px;
}
</style>