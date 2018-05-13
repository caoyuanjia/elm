<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/profile"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">账户信息</span>
    </div>
    <div>
      <ul>
        <li>
          <span>头像</span>
          <img data-v-1f2e67c3="" src="//elm.cangdu.org/img/default.jpg" class="privateImage">
          <img src="../../assets/箭头_右-2.png" alt="">
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Info"
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
    margin-left: 5.5rem;
    font-size: .8rem;
    color: #fff;
  }
</style>
