<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="3" :xs="{span: 24, offset: 0}">
        <el-col :xs="{span: 22, offset: 2}">
          <span class="tabTitle el-icon-chat-dot-square">课程讨论</span>
        </el-col>

        <el-col :xs="{span: 12 , offset: 2}">
          <eltabs :eltabs="eltabs" @handleClick="handleClick" />
        </el-col>

        <comment :commentData="commentData" :sActive="sActive" />
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
import Comment from "components/content/comment/Comment"; //封装的讨论内容组件
export default {
  name: "detailComment",
  data() {
    return {
      sActive: 0,
      rotation: [
        //轮播图数据
        require("assets/img/test/test1.jpg"),
        require("assets/img/test/test2.jpg"),
        require("assets/img/test/test3.jpg")
      ],
      eltabs: ["按热度排序", "按时间排序"],
      commentData: [
        [
          {
            username: "JP.Dark",
            content:
              "入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……",
            date: "2018-07-20 20:35",
            secondLevelData: [
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              }
            ]
          },
          {
            username: "JP.Dark",
            content: "asffa",
            date: "2018-07-20 20:35",
            secondLevelData: [
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              }
            ]
          },
          {
            username: "JP.Dark",
            content: "hsdfhdfhdfhdf",
            date: "2018-07-20 20:35",
            secondLevelData: [
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              }
            ]
          },
          {
            username: "JP.Dark",
            content: "3规范1人23她她",
            date: "2018-07-20 20:35",
            secondLevelData: [
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              }
            ]
          },
          {
            username: "JP.Dark",
            content:
              "入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……",
            date: "2018-07-20 20:35",
            secondLevelData: [
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              },
              {
                username: "JP.Dark",
                content: "asfasgfatg3sdvgds",
                date: "2018-07-20 20:35"
              }
            ]
          },
          {
            username: "JP.Dark",
            content:
              "入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……",
            date: "2018-07-20 20:35",
            secondLevelData: [
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              },
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              },
              {
                username: "JP.Dark",
                content: "asfasgfatg3sdvgds",
                date: "2018-07-20 20:35"
              }
            ]
          }
        ],
        [
          {
            username: "JP.Dark",
            content:
              "入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……",
            date: "2018-07-20 20:35",
            secondLevelData: [
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              }
            ]
          },
          {
            username: "JP.Dark",
            content:
              "入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……",
            date: "2018-07-20 20:35",
            secondLevelData: [
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              },
              {
                username: "JP.Dark",
                content: "asfasgfatg3sdvgds",
                date: "2018-07-20 20:35"
              }
            ]
          },
          {
            username: "JP.Dark",
            content:
              "入门的数据结构真心推荐郝斌老师的，讲得特别好，上课代码现敲，是在培训班上课的时候录屏的，没有任何对着屏幕念字的情况，都是自己举例子，包括名词解释都能现敲，目前b站看了那么多，没有一个能超过郝斌老师在我心中的地位……",
            date: "2018-07-20 20:35",
            secondLevelData: [
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              },
              {
                username: "JP.Dark",
                content: "51686186168156",
                date: "2018-07-20 20:35"
              },
              {
                username: "JP.Dark",
                content: "asfasgfatg3sdvgds",
                date: "2018-07-20 20:35"
              }
            ]
          }
        ]
      ]
    };
  },
  components: {
    Eltabs,
    Elrotation,
    Comment
  },
  methods: {
    handleClick(tab) {
      this.sActive = parseInt(tab.index); //要将String转成integer类型
    }
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

.comNum > span {
  margin-right: 0.2em;
}

.OneCommentBox {
  border-top: 1px solid rgb(228, 231, 237);
  margin: 1em 0;
}
.el-row > .el-col {
  margin-top: 1.2em;
}
</style>