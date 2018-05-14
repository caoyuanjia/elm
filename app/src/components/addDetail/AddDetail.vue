<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/add"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">搜索地址</span>
    </div>
    <div class="adddetail">
      <input type="text" placeholder="请输入小区/写字楼/学校等" class="school">
      <button class="ok"><span id="ok">确认</span></button>
    </div>
    <div class="mzyq">
      为了满足商家的送餐要求，建议您从列表中选择地址
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
  .mzyq{
    width: 100%;
    background: #fff6e4;
    color: #ff883f;
    padding: 0.3rem 0;
    font-size: 0.62rem;
    font-weight: 200;
    text-align: center;
  }
  .zdz{
    margin-top: 6rem;
    text-align: center;
  }
  p{
    margin-bottom: .6rem;
    font-size: .7rem;
    color: #969696;
    font-weight: 200;
  }
</style>
