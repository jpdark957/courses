<template>
    <div class="chat">
        <div class="box-card box-cards">
            <el-row class="con">
                <el-col :span="7">
                    <div class="lefthead">
                        <el-avatar class="touxiang" :size="50" :src="this.$store.state.user.userIcon"></el-avatar>
                        <h3>{{this.$store.state.user.userNickname}}</h3>
                    </div>
                    <div class="leftbottom">
                        <div class="item"   v-for="(item, index) in appuser" :key="index" @click="tochatlog(item.userId,item.userNickname)"
                             v-show="item.userId != $store.state.user.userId"
                        >
                            <el-avatar class="itemtouxiang" :size="40" :src="item.userIcon" ></el-avatar>
                            <h5>{{item.userNickname}}<el-badge is-dot class="items" v-if="item.xinxi"></el-badge></h5>
                        </div>

                        <div class="item">
                            <el-avatar class="itemtouxiang" :size="40" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                            <h5>数据查询<el-badge is-dot class="items"></el-badge></h5>
                        </div>
                    </div>
                </el-col>
                <el-col :span="17" v-if="showright">
                   <div class="righthead">
                       <h4>{{userNickname}}</h4>
                   </div>
                   <div class="context">
                       <el-row class="itemchat" v-for="(item, index) in chatlogList" :key="index" >
                       <el-avatar class="chattouxiang" :class="item.tpye==0?'right':'left'" :size="40" :src="item.userIocn"></el-avatar>
                           <div class="send" :class="item.tpye==0?'right':'left'">
                               <span>{{item.cltext}}
                               </span>
                               <div class="arrow"  :class="item.tpye==0?'sendright':'sendleft'"/>
                           </div>
                           <span :class="item.tpye==0?'right':'left'" class="clstate">{{item.clstate==0?'未读':'已读'}}
                               </span>
                       </el-row>

                   </div>
                        <div class="rightbottom">
                          <textarea v-model="textarea" @keydown.13="send" ></textarea>
                        </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {appuser,chatlog} from "../../network/chat";

    export default {
        name: "Chat",
        data(){
            return {
                textarea:'',
                appuser:[],
                chatlogList:[],
                userNickname:'',
                showright:false,

            }
        },
        beforeCreate() {
        },
        methods:{
            tochatlog(touser,userNickname){
                chatlog(touser).then(res=>{
                    console.log(res)
                    this.chatlogList=  res.data
                    this.userNickname=userNickname
                    this.showright=true
                })
            },
            toappuser(){
                appuser().then(res=>{
                    console.log(res)
                    this.appuser=res.data
                })
            },
            send(){
                console.log("发送")
                const log = {
                    "userIocn": "http://gdkmlzh.cn-gd.ufileos.com/img%2F5e3af915-83c8-4f23-9953-25ccb46363c1.jpg?UCloudPublicKey=TOKEN_0c9d0118-e892-4784-8702-34bf5b992604&Signature=8p462HhcXyhM%2FJmhhnygrZotLjw%3D&Expires=1891772663",
                    "cltext": this.textarea,
                    "clstate": "0",
                    "tpye": "0"
                }
                this.chatlogList.push(log)
                this.textarea=''
            }
        },
        mounted() {
            // setInterval(() => {
            //     this.toappuser();
            // }, 300);
           this.toappuser();
        }
    }
</script>

<style scoped>

    .chat{
    }
    .clstate{
        font-size: 11px;margin-top: 20px;margin-left: 10px;margin-right: 10px
    }
    textarea{
        width: 100%;
        height: 100%;
        resize:none;
        border: none;
        outline: none;
    }
    .items{
        margin-left:5px ;
    }
    .item{
        height: 70px;
        background-color: #2E2E2E;
        border: 0;
        margin-top: 1px;
        line-height: 70px;
        color: white;
        border-radius: 5px;

    }
    .itemtouxiang{
        float: left;
         margin:15px 10px 0px 15px;
    }
    .touxiang{
       margin-top: 15px;
       margin-left: 15px;
        margin-right: 10px;
       float: left;
    }
    .con{
        width: 100%;
    }
    .box-cards {
        width: 65%;
        margin: 20px auto;
    }
    .lefthead{
        height: 80px;
        background-color: #2E2E2E;
        border-bottom: 1px white solid;
        line-height: 80px;
        color: white;
    }
    ::-webkit-scrollbar {
        width: 0 !important;
    }
    .leftbottom{
        height: 530px;
        background-color: #3D3D3D;
        overflow: auto;

    }
    .righthead{
        height: 60px;
        border-bottom: 1px #F5F5F5  solid;
        background-color: white;
        line-height: 60px;
        padding-left: 20px;
    }
    .context{
        height: 360px;
        border-bottom: 1px #E8E8E8  solid;
        overflow: auto;
        background-color: #F5F5F5;
        padding: 20px 20px;

    }
    .rightbottom{
        height: 130px;
        padding: 10px 10px;
        background-color: #FFFFFF;
    }
    .send {
        position:relative;
        background:#3399FF;
        border-radius:5px; /* 圆角 */
        padding:10px 10px;
        line-height: 20px;
        max-width: 60%;
    }
    .send .arrow {
        position:absolute;
        top:9px;
        width:0;
        height:0;
        font-size:0;
        border:solid 8px;
    }
    .send .sendright{
        right:-15px; /* 圆角的位置需要细心调试哦 */
        border-color:#F5F5F5 #F5F5F5 #F5F5F5 #3399FF;
    }
    .send .sendleft{
        left:-15px; /* 圆角的位置需要细心调试哦 */
        border-color:#F5F5F5 #3399FF #F5F5F5 #F5F5F5;
    }

    .send span{
      font-size: 15px;
      word-break:break-word;
    }
    .chattouxiang{
        margin-left: 20px;
        margin-right: 20px;
    }
    .right{
        float: right;
    }
    .left{
        float: left;
    }

    .itemchat{
        margin-top: 10px;
    }
</style>