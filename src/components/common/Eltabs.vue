<template>
    <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in eltabs" :key="index" :label="item" :name="item"></el-tab-pane>
    </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Eltabs",
        data(){
            return {
                index: 0 ,
                activeName :""
            }
        },
        props:{
                eltabs : {
                    type: Array,
                    default(){
                        return []
                    }
            }
        },
        methods: {
            handleClick(tab, event) {
                this.$emit('handleClick',tab, event)
            }
        }
    }
</script>

<style scoped>

</style>