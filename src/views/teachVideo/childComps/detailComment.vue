<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="3" :xs="{span: 24, offset: 0}">
        <el-col :xs="{span: 22, offset: 2}">
          <span class="tabTitle el-icon-chat-dot-square">课程讨论</span>
        </el-col>

        <el-col :xs="{span: 12 , offset: 2}">
          <eltabs :eltabs="eltabs" @handleClick="handleClick"/>
        </el-col>

        <el-col :span="24" :xs="{span: 24}" v-for="(data, index) in commentData" :key="index"  v-show="isShow(index)">
         
          <el-col :span="24" class="comConBox">

            <el-card class="comCon">
              <!-- 讨论数量计算 -->
              <p class="comNum">
                <span>{{comNum}}</span>个讨论
              </p>
              <!-- 输入框 -->
              <comment-textarea :form="form"/>

              <el-row v-for="(item, index) in data" :key="index">
                <!-- 一级评论 -->
                <el-col
                  :xs="{span: 4, offset: 0}"
                  :sm="{span: 4, offset: 1}"
                  :md="{span: 3, offset: 1}"
                  :lg="{span:2, offset: 1}"
                  :span="2"
                >
                  <img src="~assets/img/test/test1.jpg" alt />
                </el-col>
                <el-col :span="22" :xs="20" :sm="{span: 19}">
                  <el-col class="conDetail">
                    <p>{{item.username}}</p>
                    <p>{{item.content}}</p>
                    <p>
                      {{item.date}}
                      <span @click="openInput">回复</span>
                    </p>
                  <!-- 一级评论结束点 -->
                  </el-col>
                  
                  <!-- 二级评论框 -->
                  <el-col v-for="(item2, index2) in item.secondLevelData" :key="index2">
                    <!-- 二级评论 -->
                    <el-col
                      :xs="{span: 4, offset: 0}"
                      :sm="{span: 4, offset: 0}"
                      :md="{span: 3, offset: 0}"
                      :lg="{span:2, offset: 0}"
                      :span="2"
                    >
                      <img src="~assets/img/test/test1.jpg" alt />
                    </el-col>
                    <el-col :span="22" :xs="{span: 20}" :sm="{span: 19}">
                      <el-col class="conDetail">
                        <p>{{item2.username}}</p>
                        <p>{{item2.content}}</p>
                        <p>
                          {{item.date}}
                          <span @click="openInput">回复</span>
                        </p>
                      </el-col>
                    <!-- 二级评论结束点 -->
                    </el-col>
                  <!-- 二级评论框结束点 -->
                  </el-col>

                  <!-- 二级输入框 -->
                  <comment-textarea :form="form" v-show="isClick"/>


                </el-col>
              </el-row>
              
            </el-card>

          </el-col>
        </el-col>
      </el-col>

      <!-- 轮播图 -->
      <el-col :span="4" :push="1" :xs="{span: 0, offset: 0, push: 0}">
        <elrotation :rotation="rotation" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Eltabs from "components/common/element/Eltabs"; //tab栏插件
import Elrotation from "components/common/element/Elrotation"; //轮播图插件
import commentTextarea from 'components/content/overall/commentTextarea'//输入框
import { sortByKey } from 'common/computed'
export default {
  name: "detailComment",
  data() {
    return {
      form: {
        desc: ""
      },
      isClick: false,
      sActive: 0,
      rotation: [//轮播图数据
        require("assets/img/test/test1.jpg"),
        require("assets/img/test/test2.jpg"),
        require("assets/img/test/test3.jpg")
      ],
      eltabs: ["按热度排序", "按时间排序"],

      commentData: [
        [
          {
            username: 'JP.Dark',
            content: '入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……',
            date: '2018-07-20 20:35',
            secondLevelData: [
              {
                username: 'JP.Dark',
                content: '51686186168156',
                date: '2018-07-20 20:35',
              }
            ]
          },
          {
            username: 'JP.Dark',
            content: '入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……',
            date: '2018-07-20 20:35',
            secondLevelData: [
              {
                username: 'JP.Dark',
                content: '51686186168156',
                date: '2018-07-20 20:35',
              },
              {
                username: 'JP.Dark',
                content: 'asfasgfatg3sdvgds',
                date: '2018-07-20 20:35',
              }
            ]
          },
          {
            username: 'JP.Dark',
            content: '入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……',
            date: '2018-07-20 20:35',
            secondLevelData: [
              {
                username: 'JP.Dark',
                content: '51686186168156',
                date: '2018-07-20 20:35',
              },
              {
                username: 'JP.Dark',
                content: '51686186168156',
                date: '2018-07-20 20:35',
              },
              {
                username: 'JP.Dark',
                content: 'asfasgfatg3sdvgds',
                date: '2018-07-20 20:35',
              }
            ]
          },
        ],
        [
          {
            username: 'JP.Dark',
            content: '入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……',
            date: '2018-07-20 20:35',
            secondLevelData: [
              {
                username: 'JP.Dark',
                content: '51686186168156',
                date: '2018-07-20 20:35',
              }
            ]
          },
          {
            username: 'JP.Dark',
            content: '入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……',
            date: '2018-07-20 20:35',
            secondLevelData: [
              {
                username: 'JP.Dark',
                content: '51686186168156',
                date: '2018-07-20 20:35',
              },
              {
                username: 'JP.Dark',
                content: 'asfasgfatg3sdvgds',
                date: '2018-07-20 20:35',
              }
            ]
          },
          {
            username: 'JP.Dark',
            content: '入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……',
            date: '2018-07-20 20:35',
            secondLevelData: [
              {
                username: 'JP.Dark',
                content: '51686186168156',
                date: '2018-07-20 20:35',
              },
              {
                username: 'JP.Dark',
                content: '51686186168156',
                date: '2018-07-20 20:35',
              },
              {
                username: 'JP.Dark',
                content: 'asfasgfatg3sdvgds',
                date: '2018-07-20 20:35',
              }
            ]
          },
        ]
      ]
    };
  },
  components: {
    Eltabs,
    Elrotation,
    commentTextarea
  },
  methods: {
    handleClick(tab) {
      this.sActive = parseInt(tab.index)//要将String转成integer类型
    },
    isShow(index) {
      if(index === this.sActive) return true//判断显示哪部分视频
    },
    openInput() {
      this.isClick = !this.isClick
    },
  },
  computed: {
    comNum:function() {//计算讨论数量
      return this.commentData[0].length
    },
  },
  mounted() {//计算热度
    sortByKey(this.commentData[0],'secondLevelData')
  },
  beforeUpdate() {
    sortByKey(this.commentData[0],'secondLevelData')
  }
};
</script>

<style scoped>
.tabTitle {
  margin-top: 1.2em;
  margin-bottom: 0.5em;
  font-size: 18px;
}

@media (max-width: 768px) {
  .tabTitle {
    font-size: 12px;
  }
}
.el-carousel {
  margin-top: 2em;
}
.comNum {
  font-size: 16px;
  margin-left: 0.5em;
}
.comNum > span {
  margin-right: 0.2em;
}
.el-row {
  border-top: 1px solid rgb(228, 231, 237);
  border-bottom: 1px solid rgb(228, 231, 237);
}
.el-row > .el-col {
  margin-top: 1.2em;
}
.comConBox {
  margin-top: 2em;
}
.comCon {
  margin: .2em 0;
}

.comCon img {
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
}

.comCon p {
  margin: 0.8em 0em;
}

.conDetail > p:nth-child(1) {
  color: rgb(97, 122, 132);
  font-weight: 600;
  cursor: pointer;
}
.conDetail > p:nth-child(1):hover {
  color: rgb(0, 161, 214);
}
.conDetail > p:nth-child(3) {
  color: rgb(97, 122, 132);
}
.conDetail > p:nth-child(3) span {
  cursor: pointer;
  padding: 3px;
  border-radius: 15%;
}
.conDetail > p:nth-child(3) span:hover {
  color: rgb(0, 161, 214);
  background-color: rgb(229, 233, 239);
}
</style>