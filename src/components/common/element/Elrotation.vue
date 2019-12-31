<template>
  <el-carousel height="150px">
    <el-carousel-item v-for="(item, index) in rotation" :key="index">
      <img :src="item" alt class="rotationImg" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Elrotation",
  props: {
    rotation: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.rotationImg {
  width: 100%;
  height: 100%;
}
</style>