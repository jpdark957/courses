<template>
  <div>
    <el-row :type="flex" :justify="end">
      <el-col :span="12" :offset="3" :xs="{span: 24, offset: 0, push: 0, class: sss}" >
        <video src="~assets/video/aaa.mp4" controls></video>
      </el-col>
      <el-col :span="4" class="videoList" :push="1" :xs="{span: 24, offset: 0, push: 0}">
        <el-col :span="24" class="listHeader">
          <span class="el-icon-s-grid">视频选集</span>
          <span>{{this.sActive+1}}/{{this.comLength}}</span>
        </el-col>
        <el-col :span="24" class="listDetail">
          <ul class="listUl">
            <li v-for="(item, index) in vListCon" :key="index" class="listLi" :class="{active: sActive === index}" @click="active(index)">
              <span>{{item.vConName}}</span>
              <span>{{item.vConTime}}</span>
            </li>
          </ul>
        </el-col>
      </el-col>
    </el-row>

  <detail-comment />





  </div>
</template>

<script>
import detailComment from './detailComment'
export default {
  name: "videoDetail",
  data() {
    return {
      nowVideo: 0,
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
      ],
      sActive: 0,
    }
  },
  components: {
    detailComment
  },
  methods: {
    active(index) {
      this.sActive = index 
    }
  },
  computed: {
   comLength() {
     return this.vListCon.length
   }
  }
};
</script>

<style scoped>
.el-row {
  margin-top: 4em;
}
video {
  width: 100%;
  height: 30vmax;
  transition: 1s;
  background-color: black;
  outline: none;
}

.videoList {
  height: 30vmax;
  background-color: rgba(209,209,209,.5);
}

.listHeader {
  font-size: 16px;
  padding-top: 3%;
  margin-bottom: 2%;
  /* position:fixed; */
}
.listHeader>span:first-child {
  padding-left: 1em;
}
.listHeader>span:last-child {
  color: #999999;
  font-size: 12px;
  float: right;
  text-align: center;
  padding-right: 1em;
  padding-top: .2em;
}
.listUl {
  overflow: auto;
  margin-left: 5%;
  width: 90%;
  list-style: none;
}
@media screen {
  .listUl {
    height: 27vmax;
    transition: 1s;
  }
}


@media (min-width: 420px) and (max-width: 768px){
  video {
    height: 50vmax;
    transition: 1s;
  }
}
@media (max-width: 420px) {
  video {
    height: 40vmax;
    transition: 1s;
  }
}
@media (max-width: 768px){
  .listUl {
    height: 22vmax;
    transition: 1s;
  }
  .el-row {
    margin-top: 0em;
  }

}
::-webkit-scrollbar {
  width: 0 !important;
} 


.listLi {
  cursor: pointer;
  height: 35px;
  line-height: 35px;
  border-radius: 5px 5px;
}
.listLi:hover {
  background-color: rgba(255,255,255,.2);
  color: var(--color-main);
  font-weight: 500;
}
.listLi>span:first-child {
  width: 70%;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  float: left;
  padding-left: 2%;
}
.listLi>span:last-child {
  width: 15%;
  float: right;
  font-weight: bolder;
}

.active {
  background-color: rgba(255,255,255,.5);
  color: var(--color-main);
  font-weight: bolder;
}

/* .vDetail {
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
  margin-bottom: 2%; 
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
} */
 </style>