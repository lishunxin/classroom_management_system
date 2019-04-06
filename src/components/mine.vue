<template>
<div>
  <header>
    <div id="title">我的</div>
    <i class="el-icon-arrow-left" @click="tohome"></i>

  </header>

</div>
</template>

<script>
    export default {
        name: "mine",
      methods:{
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
</style>
