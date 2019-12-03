<template>
  <div class="footerBox" v-if="this.path != '/teachVideo/'+this.rou">
    <slot>
      <footer-con />
    </slot>
  </div>
</template>

<script>
import FooterCon from "./childComps/FooterCon";
import { wRoute } from "common/mixin";
export default {
  name: "cFooter",
  data() {
    return {
      rou: "asda"
    };
  },
  components: {
    FooterCon
  },
  mixins: [wRoute]
};
</script>

<style scoped>
.footerBox {
  width: 100%;
  height: 50px;
  background-color: rgba(33, 68, 131);
}
</style>