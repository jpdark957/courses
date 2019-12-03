export const wRoute = {
  data() {
    return {
      path: '',
      oldpath: ''
    }
  },
  watch: {
    $route(to,old) {
      this.path = to.path;
      this.oldpath = old.path;
    }
  }
}
