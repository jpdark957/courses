<template>
  <div class="tab-bar-top">


    <div class="top-user">
      <a href="#" class="user-login ">登录</a>
      <i class="user-i "></i>
      <a href="#" class="user-register ">注册</a>
    </div>

    <img src="~assets/img/common/top.jpg" alt="" class="top-img"/>

  </div>
</template>

<script>
export default {
  name: 'TabBarTop',
}
</script>

<style scoped>
  .tab-bar-top {
    width: 100%;
    background-color: var(--color-main);
  }

  .top-user {
    float: right;
    width: 20%;
    height: 35px;
    margin-right: 10%;
    line-height: 33px;
  }
  .user-i {
    border: .7px solid white;
  }
  .top-user a {
    text-decoration: none;
    margin: 0px 20px 0px 20px ;
    color: white;
    font-size: 14px;
  }
  .top-user a:hover{
    color: 	#DAA520;
  }
  
  .tab-bar-top .top-img {
    width: 100%;
    height: 300px;
  }
</style>