<template>
  <div>
    <header>
      <div id="title">登录</div>
      <i class="el-icon-arrow-left" @click="tohome"></i>
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
        <el-col :span="6">密码：</el-col>
        <el-col :span="14"><el-input
          placeholder="请输入密码"
          v-model="input2">
        </el-input></el-col>
      </el-row>
    </div>

    <div class="pass">

      <el-row>
        <el-col :span="12"><el-checkbox v-model="checked" style="line-height: 40px">记住密码</el-checkbox></el-col>
        <el-col :span="6"><el-button type="text" @click="register" >去注册</el-button></el-col>
      </el-row>
    </div>
    <div class="btn">
      <el-button type="primary">   登录   </el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
        return{

        }
      },
      methods:{
      register : function () {
        this.$router.push({path:'./register'})
      },
        tohome:function () {
          this.$router.push({path:'./#'})
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
