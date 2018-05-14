<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/address"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">新增地址</span>
    </div>
    <div class="center">
      <input type="text" placeholder="请填写你的姓名">
      <input type="text" placeholder="小区/写字楼/学校等">
      <input type="text" placeholder="请填写详细送餐地址">
      <input type="text" placeholder="请填写能够联系到您的手机号">
      <input type="text" placeholder="备用联系电话(选填)" id="by">


    </div>
    <div class="bg">
    <button class="xzdz1"><span id="skt">新增地址</span></button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Add"
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
  .center{
    width: 100%;
    margin-top: 0.4rem;
    background: #fff;
    text-align: center;
  }
  input{
    width: 88%;
    padding: 0.3rem;
    margin-top: 0.4rem;
    background: #f2f2f2;
    border: 0.043rem solid #ddd;
    border-radius: 0.128rem;
    font-size: .6rem;
    font-weight: 200;
    outline: none;
  }
  #by{
    margin-bottom: 0.4rem;
  }
  .xzdz1{
    width: 94%;
    background: #4cd964;
    text-align: center;
    padding: 0.4rem;
    color: #fff;
    border: none;
    outline: none;
  }
  #skt{
    opacity: 0.6;
  }
  .bg{
    margin-top: 0.7rem;
    text-align: center;
    /*margin: 0 auto;*/
  }

</style>
