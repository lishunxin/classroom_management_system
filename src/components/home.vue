<template>
<div>
  <header>
    <div id="title">首页</div>
  </header>
  <div class="home">
    <el-row>
      <el-button type="primary" plain style="margin:1rem" @click="getRoom">教室查询</el-button>
      <el-button type="success" plain style="margin:1rem" @click="insertInfor">教室预约</el-button><br>
      <el-button type="info" plain style="margin:1rem" @click="getRoomDetailByIdAndDate">我的预约</el-button>
      <el-button type="warning" plain style="margin:1rem" @click="togetApprovalDetail">教室审批</el-button>

    </el-row>
  </div>
  <foowrap class="footer"></foowrap>
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
        togetApprovalDetail:function(){
          this.$router.push({path:'./getApprovalDetail'})
        },
        getRoom:function () {
          this.$router.push({path:'./getRoom'})
        },
        insertInfor:function(){
          this.$router.push({path:'./insertInfor'})
        },
        getRoomDetailByIdAndDate:function () {
          this.$router.push({path:'./getRoomDetailByIdAndDate'})
        }
      }
    }
</script>

<style scoped>
.home{
  width: 100%;
  height: 80%;
}
  .footer{
    width: 100%;
    height: 20%;
  }
</style>
