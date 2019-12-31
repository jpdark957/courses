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
      if (this.$route.path == '/teachVideo') {
        let videoId = this.vData[this.sActive][index].videoId
        this.$router.push({
          path: this.$route.path + '/' + this.vData[this.sActive][index].videoId,
          query: {
            videoId
          }
        })

        // console.log(this.vData[this.sActive][index].videoId)
      }
      // if(this.vData[this.sActive]) 
      //   this.$router.push(this.$route.path + '/' + this.vData[this.sActive][index].id)
      // else 
      //   this.$router.push(this.$route.path + '/' + this.vData[index].id)
      // else
      //   this.$router.push(this.$route.path + '/' + this.content[index].qid) 
    }
  }
}

export const TabRoute = {
  data() {
    return {
      navData: [
        {
          liCon: "首页",
          icon: "el-icon-s-home",
          liPath: "/home"
        },
        {
          liCon: "教学视频",
          icon: "el-icon-video-camera",
          liPath: "/teachVideo"
        },
        {
          liCon: "教学资料",
          liPath: "/teachData",
          icon: "el-icon-tickets",
        },
        {
          liCon: "课程讨论",
          icon: "el-icon-chat-dot-square",
          liPath: "/discussion"
        },
        {
          liCon: "教学反馈",
          icon: "el-icon-chat-line-square",
          liPath: "/comment"
        }
      ]
    }
  },
  methods: {
    navClick(item) {
      this.$router.push(item.liPath).catch(err => {
        console.log(err)
      });
    },
  }
}
