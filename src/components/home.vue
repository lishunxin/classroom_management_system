<template>
<div class="a">
  <header>
    <div id="title">首页</div>
  </header>
  <a><div class="tologin" @click="login">{{lo}}</div></a>
  <img class="welcome" src="../assets/welcome.jpg"/>
  <div class="footer">
    <el-row>
      <el-button type="primary" plain style="margin:1rem" @click="getRoom">教室查询</el-button>
      <el-button type="success" plain style="margin:1rem" @click="insertInfor">教室预约</el-button><br>
      <el-button type="info" plain style="margin:1rem" @click="getRoomDetailByIdAndDate">教室审批</el-button>
      <el-button type="warning" plain style="margin:1rem" @click="tomine">我的预约</el-button>

    </el-row>
  </div>
</div>
</template>

<script>
  import foowrap from "./foowrap"
  import axios from "axios"
    export default {
        name: "home",
      data(){
         return{
           lo:'登录/注册',
           username:'',
           userId:this.userId,
           foowrap:foowrap
         }
      },
      components: {
        foowrap: foowrap
      },
      methods:{
        login:function () {
          this.$router.push({path:'./login'})
        },
        tomine:function(){
          this.$router.push({path:'./mine',query:{'userId': this.userId,'username':this.username}})
        },
        getRoom:function () {
          this.$router.push({path:'./getRoom',query:{'userId': this.userId}})
        },
        insertInfor:function(){
          this.$router.push({path:'./insertInfor',query:{'userId': this.userId}})
        },
        getRoomDetailByIdAndDate:function () {
          this.$router.push({path:'./getApprovalDetail',query:{'userId': this.userId}})
        },
        gin:function(){
          let data1 = ({
            "userId": this.userId,
            "password": this.password,
            "rememberMe":this.rememberMe
          })
          console.log(data1)
          axios({
            method: 'get',
            url: 'http://yizhuoyang.free.idcfengye.com/login/logout',
            data: data1
          }).then((response) => {
            console.log(response.data.code)
            if (response.data.code === 1) {
              this.$router.push({path: '/#', query: {'uid': this.uId}})
            } else if (response.data === 0) {
            }
          }).catch(error => function () {
          })
        }
      }
    }
</script>

<style scoped>
  .a{
    width: 100%;
    height: 600px;
    background-image: url("../assets/home.jpg");
    background-size: 100% 600px;
    position: relative;
  }
  .tologin{
    text-align: right;
    margin-top: 10px;
    margin-right: 20px;
  }
.welcome{
  width: 90%;
  margin: 100px 5% 0 5%;
}
  .footer{

    width: 100%;
    position: absolute;
    bottom: 60px;
  }
</style>
