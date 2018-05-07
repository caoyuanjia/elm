<template>
  <div class="head_top">
    <router-link to="/home"><img src="../../../src/assets/搜索-2.png" alt="" id="fh"></router-link>
    <router-link to="/home"><span class="qhcs">切</span></router-link>
    <span class="dl">登录/注册</span>


  </div>
</template>

<script>
    export default {
        name: "Msite",

    }
</script>

<style scoped>
  .head{
    width: 100%;
    height: 28.45rem;
    background: #f5f5f5;
  }
  .head_top {
    width: 100%;
    height: 1.95rem;
    background: #3190e8;
  }
  #fh{
    width: 0.768rem;
    margin-left: 0.5rem;
    margin-top: 0.65rem;
  }
  .qhcs{
    margin-left: 6.2rem;
  }
  .dl {
    font-size: .65rem;
    margin-left: 3.8rem;
    color: #fff;
    transform: translateY(-50%);
  }
</style>
