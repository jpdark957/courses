<template>
    <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in eltabs" :key="index" :label="item" :name="index"></el-tab-pane>
    </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Eltabs",
        data(){
            return {
                activeName :""
            }
        },
        props:{
            eltabs : {
                type: Array,
                default(){
                    return []
                }
            },
            index : {
                type: String,
                default(){
                    return null
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