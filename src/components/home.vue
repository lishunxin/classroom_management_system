<template>
<div>
  <div>
    <el-row>
      <el-button type="primary" round>登录</el-button>
      <el-button type="primary" round>注册</el-button>
    </el-row>
  </div>
  <div>
    <el-row>
      <el-button type="primary" plain style="margin:1rem">教室查询</el-button>
      <el-button type="success" plain style="margin:1rem">教室预约</el-button><br>
      <el-button type="info" plain style="margin:1rem">我的预约</el-button>
      <el-button type="warning" plain style="margin:1rem">教室审批</el-button>

    </el-row>

  </div>
</div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
