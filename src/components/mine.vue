<template>
<div>
  <header>
    <div id="title">我的预约</div>
    <i class="el-icon-arrow-left" @click="tohome"></i>

  </header>
  <div class="login" @click="login">
    <span>{{uname}}</span><br/>
    <span>{{label}}</span>
  </div>

</div>
</template>

<script>
    export default {
        name: "mine",
      data(){
          return{
            uname: '未登录',
            label:'点击登录'
          }
      },
      methods:{
        tohome:function () {
          this.$router.push({path:'./#'})
        },
        login:function () {
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
  .el-icon-circle-close{
    font-size: 1.15rem;
    position: absolute;
    right: 2.5rem;
    top: 5.65rem;
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
  .login{
    text-align: left;
    margin-left: 50px;
  }
</style>
