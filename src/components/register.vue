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
      姓名：
      <el-input
        placeholder="请输入姓名"
        v-model="input22">
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
      性别：
      <el-radio v-model="radio" label="1">男</el-radio>
      <el-radio v-model="radio" label="2">女</el-radio>
    </div>
    <div>
      身份：
      <el-radio v-model="radio" label="1">学生</el-radio>
      <el-radio v-model="radio" label="2"></el-radio>
    </div>
    <div>
      注册
    </div>
  </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>

</style>
