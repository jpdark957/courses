<template>
  <div>
    <el-row>

      <el-col :span="12" :offset="3" :xs="{span: 24, offset: 0}">

        <el-col :xs="{span: 22, offset: 2}">
          <span class="tabTitle el-icon-chat-dot-square">课程讨论</span>
        </el-col>

        <el-col :xs="{span: 12 , offset: 2}">
          <eltabs :eltabs="eltabs" class="eltab" />
        </el-col>
        <el-col :span="12" :xs="{span: 24}">

        </el-col>
      </el-col>

      <el-col :span="4" :push="1" :xs="{span: 0, offset: 0, push: 0}" >
        <elrotation :rotation="rotation"/>
      </el-col>


    </el-row>
  </div>
</template>

<script>
import Eltabs from "components/common/element/Eltabs";
import Elrotation from "components/common/element/Elrotation";
export default {
  name: "detailComment",
  data() {
    return {
      rotation: [
        require('assets/img/test/test1.jpg'),
        require('assets/img/test/test2.jpg'),
        require('assets/img/test/test3.jpg')
      ],
      eltabs: ["按热度排序", "按时间排序"]
    };
  },
  components: {
    Eltabs,
    Elrotation
  },
  methods: {}
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

</style>