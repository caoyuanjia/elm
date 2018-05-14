<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/info"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">编辑地址</span>
      <span class="bj">编辑</span>
    </div>
    <hr class="hh">
    <div class="xzdz">
      <span>新增地址</span>
      <img src="../../assets/箭头_右-2.png" alt="" id="jt">
    </div>
  </div>
</template>

<script>
    export default {
        name: "Address"
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
  .xzdz{
    width: 100%;
    background: #fff;
    padding: 0.5rem;
    font-size: .7rem;
    color: #333;
    vertical-align:middle;
    border-top: 0.043rem solid #ddd;
    border-bottom: 0.043rem solid #ddd;
  }
  .hh{
    opacity: 0.5;
  }
  #jt{
    width:1.5rem;
    position: absolute;
    top: 2.8rem;
    right: 0.5rem;
  }
  .bj{
    margin-left: 3.8rem;
    color: #fff;
    font-size: 0.7rem;
    font-weight: 100;
    opacity: 0.8;
  }
</style>
