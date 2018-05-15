<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/chooseAddress"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">搜索</span>
    </div>
    <div class="adddetail">
      <input type="text" placeholder="请输入小区/写字楼/学校等" class="school">
      <button class="ok"><span id="ok">搜索</span></button>
    </div>
    <div class="zdz">
      <p>找不到地址？</p>
      <p>请尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号）可稍后输入哦。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddDetail"
  }
</script>

<style scoped>
  .head{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,1);
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
    margin-left: 5.8rem;
    font-size: .8rem;
    color: #fff;
  }
  .adddetail{
    width: 100%;
    background: #fff;
    padding: 0.5rem 0 ;

  }
  .school{
    padding: 0.4rem 0 0.4rem 0.4rem;
    background: #f5f5f5;
    border: 0.043rem solid #ddd;
    outline: none;
    width: 11.5rem;
    border-radius: 0.213rem;
    margin-left: 0.5rem;
    font-size: .65rem;
  }
  .ok{
    width: 3rem;
    background: #3199e8;
    padding: 0.3rem;
    border-radius: 0.213rem;
    color: #fff;
    font-size: .7rem;
  }
  #ok{
    /*opacity: 0.6;*/
    font-weight: 100;
  }
  .zdz{
    margin-top: 8rem;
    text-align: center;
  }
  p{
    margin-bottom: .2rem;
    font-size: .5rem;
    color: #969696;
    font-weight: 200;
  }
</style>
