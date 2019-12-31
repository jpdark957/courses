<template>
  <div class="fCon">
    <div class="fOne">
      <span v-for="(item, index) in firstCon" :key="index">{{item}}</span>
    </div>
    <div class="fTwo">
      <span v-for="(item, index) in lastCon" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterCon',
  data() {
    return {
      firstCon: ['COPYRIGHT','©','2019','广东科贸职业学院','ALL RIGHTS RESERVED.'],
      lastCon: ['石井校区地址：广州市白云区石庆路388号','邮编：510430','备案号：粤ICP备07027005号-1','技术支持：综合楼614']
    }
  }
}
</script>

<style scoped>
  .fCon {
    height: 100%;
    margin: auto;
    text-align: center;
    color: #fff;
  }
  .fCon div {
    padding-top: 5px;
  }
  span {
    padding-left: 6px;
  }


</style>