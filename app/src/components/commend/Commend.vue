<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/home"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">推荐有奖</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Commend"
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
    width: 0.8rem;
    margin-left: 0.4rem;
    margin-top: 0.5rem;
  }
  .head_dw{
    margin-left: 5.4rem;
    font-size: .8rem;
    color: #fff;
  }
</style>
