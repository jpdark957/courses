<template>
  <div class="vDetail">
    <video src="~assets/video/aaa.mp4" controls></video>
    <div class="videoList">
      <ul>
        <li v-for="(item, index) in vListCon" :key="index">
          <img src="~assets/img/common/play.png" alt />
          <p class="vName">{{item.vConName}}</p>
          <p class="vTime">{{item.vConTime}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  data() {
    return {
      vListCon: [
        {
          vConName: '1.1 Linux系统简介-UNIX发展历史和发行版本',
          vConTime: '09:41'
        },
        {
          vConName: '1.2 Linux系统简介-Linux发展历史和发行版本',
          vConTime: '09:41'
        },
        {
          vConName: '1.3 Linux系统简介-Linux应用领域-开源软件简介',
          vConTime: '09:41'
        },
        {
          vConName: '1.4 Linux系统简介-Linux学习方法',
          vConTime: '09:41'
        },
        {
          vConName: '2.1 Linux系统安装-VMware虚拟机安装与使用',
          vConTime: '09:41'
        },
        {
          vConName: '2.2 Linux系统安装-系统分区',
          vConTime: '09:41'
        },
        {
          vConName: '2.3 Linux系统安装-Linux系统安装',
          vConTime: '09:41'
        },
        {
          vConName: '2.4 Linux系统安装-远程登录管理工具',
          vConTime: '09:41'
        },
        {
          vConName: '3.1 给初学者的建议-注意事项',
          vConTime: '09:41'
        },
        {
          vConName: '3.2 给初学者的建议-服务器管理和维护建议',
          vConTime: '09:41'
        },
        {
          vConName: '4.1.1 Linux常用命令-文件处理命令-命令格式与目录处理命令ls',
          vConTime: '09:41'
        },
        {
          vConName: '4.1.2 Linux常用命令-文件处理命令-目录处理命令',
          vConTime: '09:41'
        },
        {
          vConName: '4.1.3 Linux常用命令-文件处理命令-文件处理命令',
          vConTime: '09:41'
        },
        {
          vConName: '4.1.4 Linux常用命令-文件处理命令-链接命令',
          vConTime: '09:41'
        },
        {
          vConName: '4.2.1 Linux常用命令-权限管理命令-权限管理命令chmod',
          vConTime: '09:41'
        },
        {
          vConName: '4.2.2 Linux常用命令-权限管理命令-其他权限管理命令',
          vConTime: '09:41'
        },
        {
          vConName: '4.3.1 Linux常用命令-文件搜索命令-文件搜索命令find',
          vConTime: '09:41'
        },
        {
          vConName: '4.3.2 Linux常用命令-文件搜索命令-其他文件搜索命令',
          vConTime: '09:41'
        },
        {
          vConName: '4.4 Linux常用命令-文件搜索命令-帮助命令',
          vConTime: '09:41'
        },
        {
          vConName: '4.5 Linux常用命令-文件搜索命令-用户管理命令',
          vConTime: '09:41'
        },
      ]
    }
  },
  components: {
  }
};
</script>

<style scoped>
.vDetail {
  width: 100%;
  height: 697px;
}
video {
  width: 75%;
  height: 697px;
  padding: 0 2%;
  background-color: black;
  outline: none;
  float: left;
}

.videoList {
  width: 21%;
  height: 100%;
  float: left;
}
.videoList ul {
  width: 100%;
  height: 100%;
  overflow: auto;
  list-style: none;
}

::-webkit-scrollbar {
  width: 0 !important;
} 

ul li {
  width: 100%;
  height: 9%;
  /* margin-bottom: 2%; */
  border: 1px solid #bfbfbf;
  background-color: #fff;
  border-top: none;
  cursor: pointer;
  color: #8a8a8a;
  font-family: 'Microsoft YaHei';
}
li:hover {
  background-color: #e9e9e9;
  color: var(--color-main)
}
li img {
  width: 28px;
  height: 28px;
  padding: 4% 3% 0 3% ;
  float: left;
}
li p {
  font-size: 14px;
  padding-top: 5%;
}
.vName {
  width: 60%;
  float: left;

  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.vTime {
  width: 15%;
  padding-right: 4%;
  float: right;
}
</style>