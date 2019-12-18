<template>
  <div>
    <el-row>
      <el-col :span="18" :offset="3" :xs="{span: 24, offset: 0}">
        <el-col :xs="{span: 12 , offset: 6}" class="eltab" >
          <eltabs :eltabs="eltabs" @handleClick="handleClick"/>
        </el-col>
      </el-col>

    </el-row>
    <el-row :gutter="60">
      <el-col :span="21" :offset="1" v-for="(vctent, index2) in vData" :key="index2" :xs="{span: 24, offset: 0}">
        <el-col
          :span="5"
          :offset="1"
          v-for="(item, index) in vctent"
          :key="index"
          class="vContent"
          v-show="isShow(index2)" 
          :v-model="vctent"
          :xs="{span: 24,offset: 0}"
          :sm="{span: 8,offset: 0}"
          :md="{span: 8, offset: 0}"
          :lg="{span: 5,offset: 1}"
        >
          <div class="vImg" @click="itemClick(index)">
            <img :src="item.vImage" alt>
          </div>
          <div class="vCon">
            <p class="vTitle" @click="itemClick(index)">{{item.vTit}}</p>
            <div class="vBottom">
              <div>
                <img src="~assets/img/common/playbackVolume.png" alt />
                {{item.vPlay}}
              </div>
              <div>
                <img src="~assets/img/common/collection.png" alt />
                {{item.vColl}}
              </div>
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Eltabs from "components/common/element/Eltabs"//tab栏插件
import { sortByKey } from 'common/computed'
import { inDetail } from 'common/mixin'

export default {
  name: "videoMain",
  data() {
    return {
      eltabs: ["按热度排序", "按时间排序"],
      sActive: 0,
      vData: [
        [
          {
            id: 'j12nia0',
            vImage: require("assets/img/common/top.jpg"),
            vTit: "2019最全Linux系统全套视频",
            vPlay: 123,
            vColl: 86
          },
          {
            id: 'as215td',
            vImage: require("assets/img/test/test3.jpg"),
            vTit: "陶瓷艺术鉴赏与制作",
            vPlay: 312,
            vColl: 453
          },
          {
            id: 'afg25sda',
            vImage: require("assets/img/test/test2.jpg"),
            vTit: "虹猫蓝兔七侠传2006 (1-108)",
            vPlay: 453,
            vColl: 54
          },
          {
            id: 'a251qf',
            vImage: require("assets/img/test/test4.jpg"),
            vTit: "薪火传承·中国传统哲学通论",
            vPlay: 4856,
            vColl: 301
          },
          {
            id: '15asfg5',
            vImage: require("assets/img/test/test1.jpg"),
            vTit: "逗逗迪迪之汉字小侦探",
            vPlay: 12,
            vColl: 48
          },
          {
            id: '15sdg6',
            vImage: require("assets/img/common/top.jpg"),
            vTit: "2019最全Linux系统全套视频",
            vPlay: 789,
            vColl: 86
          },
          {
            id: '16adsfg',
            vImage: require("assets/img/test/test3.jpg"),
            vTit: "陶瓷艺术鉴赏与制作",
            vPlay: 789789,
            vColl: 453
          },
          {
            id: 'sfhg75',
            vImage: require("assets/img/test/test2.jpg"),
            vTit: "虹猫蓝兔七侠传2006 (1-108)",
            vPlay: 34534,
            vColl: 54
          },
          {
            id: 'ag25312',
            vImage: require("assets/img/test/test4.jpg"),
            vTit: "薪火传承·中国传统哲学通论",
            vPlay: 8737,
            vColl: 301
          },
          {
            id: 'fg136g',
            vImage: require("assets/img/test/test1.jpg"),
            vTit: "逗逗迪迪之汉字小侦探",
            vPlay: 37544,
            vColl: 48
          },
          {
            id: '723gs1',
            vImage: require("assets/img/common/top.jpg"),
            vTit: "2019最全Linux系统全套视频",
            vPlay: 3453,
            vColl: 86
          },
          {
            id: '3574812',
            vImage: require("assets/img/test/test3.jpg"),
            vTit: "陶瓷艺术鉴赏与制作",
            vPlay: 2548,
            vColl: 453
          },
          {
            id: 'j12nia0',
            vImage: require("assets/img/test/test2.jpg"),
            vTit: "虹猫蓝兔七侠传2006 (1-108)",
            vPlay: 7863,
            vColl: 54
          },
          {
            id: 'j12nia0',
            vImage: require("assets/img/test/test4.jpg"),
            vTit: "薪火传承·中国传统哲学通论",
            vPlay: 37,
            vColl: 301
          },
          {
            id: 'j12nia0',
            vImage: require("assets/img/test/test1.jpg"),
            vTit: "逗逗迪迪之汉字小侦探",
            vPlay: 387,
            vColl: 48
          },
          {
            id: 'j12nia0',
            vImage: require("assets/img/common/top.jpg"),
            vTit: "2019最全Linux系统全套视频",
            vPlay: 1268,
            vColl: 86
          },
          {
            id: 'j12nia0',
            vImage: require("assets/img/test/test3.jpg"),
            vTit: "陶瓷艺术鉴赏与制作",
            vPlay: 4213,
            vColl: 453
          },
          {
            id: 'j12nia0',
            vImage: require("assets/img/test/test2.jpg"),
            vTit: "虹猫蓝兔七侠传2006 (1-108)",
            vPlay: 111,
            vColl: 514
          },
          {
            id: 'j12nia0',
            vImage: require("assets/img/test/test4.jpg"),
            vTit: "薪火传承·中国传统哲学通论",
            vPlay: 666,
            vColl: 301
          },
          {
            id: 'j12nia0',
            vImage: require("assets/img/test/test1.jpg"),
            vTit: "逗逗迪迪之汉字小侦探",
            vPlay: 888,
            vColl: 48
          },
        ],
        [
          {
            id: 'j12nia0',
            vImage: require("assets/img/test/test4.jpg"),
            vTit: "陶瓷艺术鉴赏与制作",
            vPlay: 999,
            vColl: 453
          },
          {
            id: '1tsdgf21',
            vImage: require("assets/img/common/top.jpg"),
            vTit: "2019最全Linux系统全套视频",
            vPlay: 45345,
            vColl: 86
          },
          {
            id: 'sdg23',
            vImage: require("assets/img/test/test1.jpg"),
            vTit: "逗逗迪迪之汉字小侦探",
            vPlay: 345345,
            vColl: 48
          },
          {
            id: '736efdg2',
            vImage: require("assets/img/test/test2.jpg"),
            vTit: "虹猫蓝兔七侠传2006 (1-108)",
            vPlay: 123783,
            vColl: 54
          },
          {
            id: '15qet1',
            vImage: require("assets/img/test/test3.jpg"),
            vTit: "薪火传承·中国传统哲学通论",
            vPlay: 345345,
            vColl: 301
          }
        ]
      ]
    };
  },
  components: {
    Eltabs
  },
  methods: {
    handleClick(tab) {
      this.sActive = parseInt(tab.index)//要将String转成integer类型
    },
    isShow(index2) {
      if(index2 === this.sActive) return true//判断显示哪部分视频
    },
  },
  mixins: [ inDetail ],//详情页混动
  mounted() {//计算热度
    sortByKey(this.vData[0],'vPlay')
  },
  beforeUpdate() {
    sortByKey(this.vData[0],'vPlay')
  }
  
};
</script>

<style scoped>
.el-row {
  margin-top: 20px;
  width: 100%;
}
.eltab {
  -webkit-tap-highlight-color:rgba(0,0,0,0);/* 除掉手机端点击高亮效果 */
  -webkit-tap-highlight-color:transparent;
}

.vContent {
  margin-bottom: 35px;
  height: 200px;
}

.vImg {
  width: 100%;
  height: 70%;
  box-shadow: 0 0 5px #d1d1d1;
  text-align: center;
  border: 1px solid #d1d1d1;
  border-bottom: none;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
}
.vImg img {
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
}
.vImg img:hover {
  opacity: 0.7;
}
.vCon {
  width: 100%;
  height: 27%;
  border-top: none;
  border: 1px solid #d1d1d1;
  background-color: #fff;
  border-bottom-left-radius: 3%;
  border-bottom-right-radius: 3%;
}
.vCon .vTitle {
  width: 90%;
  padding: 3% 6% 0 4%;
  cursor: pointer;
  font-weight: bolder;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.vTitle:hover {
  color: var(--color-main);
}
.vBottom {
  width: 100%;
  height: 100%;
}
.vBottom > div > img {
  width: 11px;
  height: 11px;
}
.vBottom > div {
  width: 26%;
  padding-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  float: left;
  color: #8a8a8a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .vContent {
    width: 50%;
    transition: .5s;
  }
}
@media (max-width: 442px) {
  .vContent {
    margin-left: 10%;
    width: 100%;
    transition: .5s;
  }
}

</style>