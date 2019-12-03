<template>
  <div class="top-user-video">
    <button @click="backClick">
      <img src="~assets/img/common/back.png" alt />
    </button>

    <span class="titleSpan">{{vTitle}}</span>

    <div class="UImgBox">
     <img src="~assets/img/common/top.jpg" class="userImg">
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoTab",
  data() {
    return {
      vTitle: '1.1 Linux简介'
    }
  },
  methods: {
    backClick() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.top-user-video {
  width: 100%;
  height: 60px;
  background-color: #333;
  color: white;
  align-items:center;
}
.top-user-video button {
  width: 60px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
.top-user-video button img {
  width: 33.3%;
  height: 33.3%;
}
.titleSpan {
  font-size: 16px;
  margin-left: 20px;
}

.UImgBox {
  width: 60px;
  height: 100%;
  float: right;
  margin-right: 3%;
  text-align: center;
}
.userImg {
  width: 60%;
  height: 60%;
  margin-top: 20%;
  border-radius: 50%;
  border: 1px solid #f0f0f0;
}
</style>