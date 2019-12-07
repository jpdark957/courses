<template>
    <div>
        <el-card class="box-card box-cards">
            <eltabs :eltabs="eltabs" @handleClick="handleClick"/>
            <comment-item v-for="(item, index) in commentList" :key="index"
                          :comment="item"
                          v-loading="loading"

            />
            <div class="page"><elpagination @currentChange="currentChange" :PageInfo="PageInfo"/></div>
            <el-divider></el-divider>
            <div class="add"><comment-add @success="success"/></div>
        </el-card>
    </div>
</template>

<script>
    import Eltabs from "../../components/common/Eltabs";
    import CommentItem from "./commentComps/CommentItem";
    import Elpagination from "../../components/common/Elpagination";
    import CommentAdd from "./commentComps/CommentAdd";

    import {commentList} from "../../network/commen";
    import {PageInfo} from "../../common/utils";


    export default {
        name: "Comment",
        components: {
            Eltabs,
            CommentItem,
            Elpagination,
            CommentAdd
        },
        data() {
            return {
                eltabs: ["课程评价", "我的评论"],
                eltabsindex: 0,
                currentPage:1,
                pageSize:10,
                commentList:[],
                loading:true,
                PageInfo,

            }
        },
        created() {
            this.getCommentList(this.currentPage,this.pageSize)
        },
        mounted() {

        },
        methods: {
            //网络请求
            getCommentList(currentPage,pageSize) {
                    commentList(currentPage, pageSize).then(res => {
                        this.commentList = res.data.content
                        let currentPage=this.currentPage
                        let pageSize=res.data.size
                        let total = res.data.totalElements
                        this.PageInfo=new PageInfo(currentPage,pageSize,total)
                        this.loading=false
                    })
            },
            //事件处理
            handleClick(tab) {
                console.log(tab.index);
                this.eltabsindex = tab.index
            },
            currentChange(value){
               this.currentPage=value
               this.getCommentList(this.currentPage,this.pageSize)
            },
            success(){
                //添加成功刷新数据
                this.getCommentList(this.currentPage,this.pageSize)
            }
        }
    };
</script>

<style scoped>
    .box-cards {
        width: 80%;
        margin: 20px auto;
    }
    .page{
        margin:10px;
        text-align: center;
    }
    .add{
        margin-top: 100px;
    }
</style>