<template>
  <div>
    <header>
      <i class="el-icon-arrow-left" @click="tologin"></i>
      <div id="title">注册</div>
    </header>

    <div class="pass">
      <el-row>
        <el-col :span="6">学号：</el-col>
        <el-col :span="14"><el-input
          placeholder="请输入学号"
          v-model="input2">
        </el-input></el-col>
      </el-row>
    </div>
    <div class="pass">
      <el-row>
        <el-col :span="6">姓名：</el-col>
        <el-col :span="14"><el-input
          placeholder="请输入姓名"
          v-model="input2">
        </el-input></el-col>
      </el-row>
    </div>

    <div class="pass">
      <el-row>
        <el-col :span="6">密码：</el-col>
        <el-col :span="14"><el-input
          placeholder="请输入密码"
          v-model="input2">
        </el-input></el-col>
      </el-row>
    </div>

    <div class="pass">
      性别：
      <el-radio v-model="radio3" label="1" border>男</el-radio>
      <el-radio v-model="radio3" label="2" border>女</el-radio>
    </div>

    <div class="pass">
      身份：
      <el-radio v-model="radio3" label="1" border>学生</el-radio>
      <el-radio v-model="radio3" label="2" border>管理员</el-radio>
    </div>
    <div class="btn">
      <el-button type="primary">   注册   </el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "register",
      data(){
        return{

        }
      },
      methods:{
        tologin : function () {
          this.$router.push({path:'./login'})
        }
      }
    }
</script>

<style scoped>
  header{
    width: 100%;
    height:1.58rem;
    background-color: #fff;
  }
 .el-icon-arrow-left{
    font-size: 1.45rem;
    position: absolute;
    left: 1.5rem;
    top: 3.65rem;
  }
  header #title{
    float: left;
    text-align: center;
    font-size: 1.2rem;
    width: 100%;
    height: 1.58rem;
    line-height: 1.68rem;
    margin-bottom: 1rem;
  }
  .pass{
    margin-bottom: 1rem;
  }
</style>
