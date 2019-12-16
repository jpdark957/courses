export const wRoute = {
  data() {
    return {
      path: '',
      oldpath: ''
    }
  },
  watch: {
    $route(to, old) {
      this.path = to.path;
      this.oldpath = old.path;
    }
  }
}

export const inDetail = {
  data() {
    return {
      
    }
  },
  methods: {
    itemClick(index) {
      if(this.vData[this.sActive]) 
        this.$router.push(this.$route.path + '/' + this.vData[this.sActive][index].id)
      else 
        this.$router.push(this.$route.path + '/' + this.vData[index].id)
      
    }
  }
}