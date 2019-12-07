<template>
    <div class="item">
        <!--                  评价item-->
        <el-row :gutter="20"  class="commentItem"  v-cloak>
            <!--                          左边头像-->
            <el-col :span="3">
                <div class="grid-content bg-purple iocn">
                    <el-image class="iocnImg"
                              style="width: 70px; height: 70px"
                              :src="RouteContext+comment.user.userIcon"
                    ></el-image>
                </div>
            </el-col>
            <!--                          中间内容-->
            <el-col :span="17"><div class="grid-content bg-purple">
                <div class="main">
                    <h4 >{{comment.user.userNickname}}</h4>
                    <p class="commen">{{comment.userContent}}</p>
                    <!--                              老师回复-->
                    <div class="huifu" v-if="comment.adminContent!=null">
                        <h4>老师回复:</h4>
                        <p>{{comment.adminContent}}</p>
                    </div>
                </div>
            </div></el-col>
            <!--                          右边时间-->
            <el-col :span="4"><div class="grid-content bg-purple" style="padding-top: 15px;">
                <elrate style="margin-bottom: 15px"
                        :disabled="gradeDisabled"
                        :value="comment.grade"
                />
                <p>{{comment.updatatime|showDate}}</p>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
    import {formatDate} from "../../../common/utils";
    import {RouteContext} from "../../../common/const";
    import Elrate from "../../../components/common/Elrate";

    export default {
        name: "CommentItem",
        data(){
            return {
                RouteContext,
                gradeDisabled:true,
            }
        },
        components:{
            Elrate
        },
        props:{
            comment :{
                type:Object,
                default() {
                    return {}
                }
            }
        },
        filters: {
            showDate:  (value) => {
                let date = new Date(value);
                return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .commentItem  div{
    }
    .iocn{
        padding: 20px;
    }
    .iocnImg{
        border-radius:100%;
        float: right;
    }
    .main{
        padding-top: 15px;
    }
    .commen{
        font-size: 15px;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .huifu{
        background-color: #e7e7e7;
        padding: 5px 10px 5px 10px;
        font-size: 15px;
    }
    .item{
        padding-bottom: 20px;
        border-bottom: 1px #bfbfbf solid;
    }
    [v-cloak] {
        display: none;
    }
</style>