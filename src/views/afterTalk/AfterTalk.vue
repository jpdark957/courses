<template>
  <div>
    <ul v-for="(student,index) in students" :key="index">
      <!-- {{index+1}}:{{student.name}}-{{student.age}}  -->
      {{student}}
      <li v-for="(s, index) in student" :key="index">{{s}}</li>
    </ul>
  </div>
</template>

<script>
import { sortByKey } from "common/computed";
export default {
  name: "AfterTalk",
  data() {
    return {
      aaa: 1,
      students: [
        [
          { name: "Andrew Ng", age: "42" },
          { name: "Jason Niu", age: "25" },
          { name: "Geoffrey Hinton", age: "76" }
        ],
        [
          { name: "Andrew ", age: "24" },
          { name: "Jason ", age: "16" },
          { name: "Geoffrey ", age: "543" }
        ],
        [
          { name: " Ng", age: "53" },
          { name: " Niu", age: "844" },
          { name: " Hinton", age: "125" }
        ]
      ]
    };
  },

  computed: {
  //  student:function() {
  //    console.log('sss')
  //   return sortByKey(this.students[this.aaa], 'age')
  //  }
  },
  mounted() {
    sortByKey(this.students[this.aaa], 'age')
  }
};
</script>

<style scoped>
</style>