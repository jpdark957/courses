<template>
  <el-row>
    <el-col
      :span="18"
      :offset="3"
      :xs="{span: 24, offset: 0}"
      class="dataCon"
      v-for="(item, index) in vData"
      :key="index"
    >
      <el-col
        :span="2"
        class="imgCon"
        :xs="{span: 5, offset: 1}"
        :offset="1"
        @click.native="itemClick(index)"
      >
        <img :src="item.vImage" alt />
      </el-col>
      <el-col
        :lg="{span: 15}"
        :md="{span: 14}"
        :sm="{span: 13}"
        class="textCon"
        :offset="1"
        :xs="{span: 16}"
      >
        <h2 @click="itemClick(index)">{{item.dataTitle}}</h2>
        <el-col :span="24">
          <span>
            <i class="el-icon-film el-icon--left"></i>视频地址：
            <span class="videoRou">{{item.vTit}}</span>
          </span>
        </el-col>
        <el-col :span="24" class="textDetail">
          <span>
            <i class="el-icon-time el-icon--left"></i>
            {{item.dTime}}
          </span>
          <span>
            <i class="el-icon-thumb el-icon--left"></i>
            {{item.dColl}}
          </span>
        </el-col>
      </el-col>
      <el-col :span="3" class="btnCon" :offset="1" :xs="{span: 0, offset: 0}">
        <el-button type="primary" @click="itemClick(index)">
          查看全部
          <i class="el-icon-folder-opened el-icon--right"></i>
        </el-button>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import { inDetail } from 'common/mixin'
export default {
  name: "detaMain",
  data() {
    return {
      vData: [
        {
          id: "g1tg23",
          vImage: require("assets/img/test/test1.jpg"),
          dataTitle: "2019最全Linux系统教学视频配套课件",
          vTit: "2019最全Linux系统全套视频",
          dTime: "2019-12-12 17:54",
          dColl: 4532
        },
        {
          id: "15dg32",
          vImage: require("assets/img/test/test2.jpg"),
          dataTitle: "虹猫蓝兔七侠传2006 (1-108)",
          vTit: "虹猫蓝兔七侠传2006 (1-108)",
          dTime: "2019-10-15 10:52",
          dColl: 786
        },
        {
          id: "gbh236",
          vImage: require("assets/img/test/test3.jpg"),
          dataTitle: "陶瓷艺术鉴赏与制作",
          vTit: "陶瓷艺术鉴赏与制作",
          dTime: "2019-05-16 06:13",
          dColl: 3453
        },
        {
          id: "g35f2",
          vImage: require("assets/img/test/test4.jpg"),
          dataTitle: "薪火传承·中国传统哲学通论",
          vTit: "薪火传承·中国传统哲学通论",
          dTime: "2019-11-11 11:11",
          dColl: 86
        },
        {
          id: "yh5682",
          vImage: require("assets/img/test/test1.jpg"),
          dataTitle: "2019最全Linux系统教学视频配套课件",
          vTit: "2019最全Linux系统全套视频",
          dTime: "2019-12-12 17:54",
          dColl: 4532
        },
        {
          id: "y1ts12",
          vImage: require("assets/img/test/test2.jpg"),
          dataTitle: "虹猫蓝兔七侠传2006 (1-108)",
          vTit: "虹猫蓝兔七侠传2006 (1-108)",
          dTime: "2019-10-15 10:52",
          dColl: 786
        },
        {
          id: "1s6df",
          vImage: require("assets/img/test/test3.jpg"),
          dataTitle: "陶瓷艺术鉴赏与制作",
          vTit: "陶瓷艺术鉴赏与制作",
          dTime: "2019-05-16 06:13",
          dColl: 3453
        },
        {
          id: "f48g3",
          vImage: require("assets/img/test/test4.jpg"),
          dataTitle: "薪火传承·中国传统哲学通论",
          vTit: "薪火传承·中国传统哲学通论",
          dTime: "2019-11-11 11:11",
          dColl: 86
        },
        {
          id: "dfg36s",
          vImage: require("assets/img/test/test1.jpg"),
          dataTitle: "2019最全Linux系统教学视频配套课件",
          vTit: "2019最全Linux系统全套视频",
          dTime: "2019-12-12 17:54",
          dColl: 4532
        },
        {
          id: "as53f2",
          vImage: require("assets/img/test/test2.jpg"),
          dataTitle: "虹猫蓝兔七侠传2006 (1-108)",
          vTit: "虹猫蓝兔七侠传2006 (1-108)",
          dTime: "2019-10-15 10:52",
          dColl: 786
        },
        {
          id: "g1tg23",
          vImage: require("assets/img/test/test3.jpg"),
          dataTitle: "陶瓷艺术鉴赏与制作",
          vTit: "陶瓷艺术鉴赏与制作",
          dTime: "2019-05-16 06:13",
          dColl: 3453
        },
        {
          id: "g1tg23",
          vImage: require("assets/img/test/test4.jpg"),
          dataTitle: "薪火传承·中国传统哲学通论",
          vTit: "薪火传承·中国传统哲学通论",
          dTime: "2019-11-11 11:11",
          dColl: 86
        },
        {
          id: "g1tg23",
          vImage: require("assets/img/test/test1.jpg"),
          dataTitle: "2019最全Linux系统教学视频配套课件",
          vTit: "2019最全Linux系统全套视频",
          dTime: "2019-12-12 17:54",
          dColl: 4532
        },
        {
          id: "g1tg23",
          vImage: require("assets/img/test/test2.jpg"),
          dataTitle: "虹猫蓝兔七侠传2006 (1-108)",
          vTit: "虹猫蓝兔七侠传2006 (1-108)",
          dTime: "2019-10-15 10:52",
          dColl: 786
        },
        {
          id: "g1tg23",
          vImage: require("assets/img/test/test3.jpg"),
          dataTitle: "陶瓷艺术鉴赏与制作",
          vTit: "陶瓷艺术鉴赏与制作",
          dTime: "2019-05-16 06:13",
          dColl: 3453
        },
        {
          id: "g1tg23",
          vImage: require("assets/img/test/test4.jpg"),
          dataTitle: "薪火传承·中国传统哲学通论",
          vTit: "薪火传承·中国传统哲学通论",
          dTime: "2019-11-11 11:11",
          dColl: 86
        }
      ]
    };
  },
  mixins: [ inDetail ],

};
</script>

<style scoped>
.el-row {
  background-color: #f1f1f1;
  margin-top: 2vh;
}
.dataCon {
  height: 18vh;
  background-color: #fff;
  border-top: 1px dotted rgba(209, 209, 209, 0.8);
}
.dataCon:hover {
  border: 1px solid #4b98ff;
}
.imgCon {
  height: 14vh;
  margin-top: 2vh;
  box-shadow: -1px 0px 2px rgba(209, 209, 209, 0.8);
  border-radius: 5px;
}
.imgCon > img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
}
.imgCon > img:hover {
  opacity: 75%;
  transition: 0.2s;
}
.textCon {
  height: 14vh;
  /* background-color: green; */
  margin-top: 2vh;
}
.textCon > h2 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

h2 {
  margin-top: 0.8em;
  cursor: pointer;
}
h2:hover {
  color: var(--color-main);
}
.textCon > .el-col {
  margin-left: 0.5em;
  margin-top: 2em;
  color: rgba(153, 153, 153, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.btnCon {
  margin-top: 8vh;
  /* background-color: red; */
}
@media (max-width: 768px) {
  h2 {
    font-size: 14px;
  }
  .textCon > .el-col {
    margin-left: 0em;
    margin-top: 0.5em;
    font-size: 12px;
  }
}
</style>