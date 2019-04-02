<template>
  <div>
    <div class="demo-input-suffix">
      学号：
      <el-input
        placeholder="请输入学号"
        v-model="input2">
      </el-input>
    </div>
    <div class="demo-input-suffix">
      密码：
      <el-input
        placeholder="请输入密码"
        v-model="input2">
      </el-input>
    </div>
    <div>
      记住密码：
      <el-radio v-model="radio"></el-radio>
    </div>
    <div class="btn">
      登录
    </div>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
