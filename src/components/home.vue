<template>
<div class="a">
  <header>
    <div id="title">首页</div>
  </header>
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

    export default {
        name: "home",
      data(){
         return{
           foowrap:foowrap
         }
      },
      components: {
        foowrap: foowrap
      },
      methods:{
        tomine:function(){
          this.$router.push({path:'./mine'})
        },
        getRoom:function () {
          this.$router.push({path:'./getRoom'})
        },
        insertInfor:function(){
          this.$router.push({path:'./insertInfor'})
        },
        getRoomDetailByIdAndDate:function () {
          this.$router.push({path:'./getApprovalDetail'})
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
