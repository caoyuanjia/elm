<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/info"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>

      <span class="head_dw">修改用户名</span>
      <br>
      <br>
      <input type="text" placeholder="输入用户名" id="yhm">
      <p id="xg">用户名只能修改一次(5-24字符之间)</p>
      <button   id="qrxg"><span id="qrxg1">确认修改</span></button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "setusername"
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
    margin-left: 5.2rem;
    font-size: .8rem;
    color: #fff;
  }
  #yhm{
    width: 15rem;
    border: 0.0427rem solid #ddd;
    border-radius: 0.085rem;
    padding: 0.2rem 0.1rem;
    margin: 0.3rem 0 0 0.3rem;
    font-size: .7rem;
    line-height: 1.2rem;
    background: #f5f5f5;
    outline: none;
  }
  #xg{
    font-size: .4rem;
    color: #666;
    padding: .5rem 0.3rem;
  }
  #qrxg{
    width: 15rem;
    background: #3190e8;
    font-size: .7rem;
    line-height: 2rem;
    text-align: center;
    color: #fff;
    margin: 0.4rem 0.3rem 0 0.3rem;
    outline: none;
    border:none;
  }
  #qrxg1{
    opacity: 0.6;
  }
</style>
