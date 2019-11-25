<template>
  <div :class="{active : isActive}" @click="navClick" class="nav-on">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarNav",
  data() {
    return {};
  },
  props: {
    path: String
  },
  methods: {
    navClick() {
      this.$router.replace(this.path).catch(err => {
        console.log(err)
      });
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  }
};
</script>

<style scoped>
.nav-on {
  width: 15%;
  height: 100%;
  float: left;
}
.nav-on:hover {
  background-color: 	rgba(10,37,120,.4);
  
  box-shadow: 0px 0px 3px #fff;
  transition-duration:.5s;
}
.active {
  /* background-color: #191970; */
}
</style>