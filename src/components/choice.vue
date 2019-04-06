<template>
<div>
  <el-row>
    <el-button type="success" plain @click="insertInfor">我要预约</el-button>
    <el-button type="info" plain @click="getApprovalDetail">我要审批</el-button>

  </el-row>
</div>
</template>

<script>
    export default {
        name: "choice",
      methods:{
        insertInfor:function () {
          this.$router.push({path:'./insertInfor'})
        },
        getApprovalDetail:function () {
          this.$router.push({path:'./getApprovalDetail'})
        }
      }
    }
</script>

<style scoped>

</style>
