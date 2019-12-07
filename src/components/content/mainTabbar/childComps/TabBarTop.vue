<template>
  <div>
    <div class="top-user" v-if="this.path != '/teachVideo/'+this.rou">
      <div>

          <el-dropdown v-if="$store.state.user.userName!=null"  @command="handleCommand" >
             <span class="el-dropdown-link" v-text="'您 好!--'+$store.state.user.userNickname">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>我的收藏</el-dropdown-item>
<!--                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>-->
                  <el-dropdown-item  command="logout" divided>注销</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>

        <span v-if="$store.state.user.userName==null" class="user-login" @click="centerDialogVisible = true">登录
        </span>

        <i class="user-i"></i>
        <span class="user-register">注册</span>
      </div>
    </div>

    <video-tab v-else />

    <img src="~assets/img/common/top.jpg" alt class="top-img" v-if="this.path === '/home'" />

    <eldialog :centerDialogVisible="centerDialogVisible">


      <div login="footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
      </div>
    </eldialog>

<!--登录对话框-->
    <el-dialog
            title="登录"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
      <span>
       <el-alert v-if="alert" style="width: 50%;margin: auto"
               :title="alerttext"
               type="error"
               :closable="false"
               show-icon>
        </el-alert>
      <div class="login" >
            <label>账号: <input v-model="name"/></label><br>
            <label>密码: <input v-model="pass" type="password"/></label>
       </div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="tologin">确 定</el-button>
      </span>
    </el-dialog>
<!--登录对话框-->

  </div>
</template>

<script>
import { wRoute } from "common/mixin";
import VideoTab from "./VideoTab";
import Eldialog from "../../../common/Eldialog";
import {login,logout} from "../../../../network/login";

export default {
  name: "TabBarTop",
  data() {
    return {
      rou: "asda",
      centerDialogVisible:false,
      name:'',
      pass:'',
      alert :false,
      alerttext: '',
      user: this.$store.state.user.user
    };
  },
  components: {
    VideoTab,
    Eldialog
  },
  mixins: [wRoute],
  methods:{
    tologin(){
      if (this.name==''){
        this.alerttext='账号不能为空'
        this.alert=true
      }else if(this.pass==''){
        this.alerttext='密码不能为空'
        this.alert=true
      }else {
        this.getUser(this.name,this.pass)
      }
    },
    getUser(name,pass){
      login(name,pass).then(res => {
        if(res.code==0){
          this.$message({ message: "登录成功", type: 'success' })
          this.$store.commit('SET_ID', res.data.sessionId)
          // this.$store.commit('SET_USER', JSON.stringify(res.data.user))
          this.$store.commit('SET_USER', res.data.user)
          this.centerDialogVisible=false
        }else{
          this.alerttext=res.msg
          this.alert=true
        }
      })
    },
    logout(){
        logout().then(res=>{
            console.log(res)
        })
      this.$message({ message: "注销成功", type: 'success' })
      this.$store.commit('LOGOUT')
    },
      handleCommand(command) {
          command=="logout" && this.logout()
      }
  }
};
</script>

<style scoped>

.top-user {
  width: 100%;
  height: 35px;
  padding-top: 10px;
  text-align: right;

  background-color: var(--color-main);
  color: white;
}

.user-i {
  border: 1px solid white;
}

.top-user > div {
  margin-left: -15%;
}
.top-user span {
  margin: 0px 20px;
  font-size: 14px;
  cursor: pointer;
}

.top-user span:hover {
  color: #daa520;
}

.top-img {
  width: 100%;
  height: 300px;
}

  .login{
    text-align: center;
  }
  .login input{
    width: 50%;
    height: 30px;
    margin-top:20px;

  }

.el-dropdown-link {
    cursor: pointer;
    color: #fff;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>