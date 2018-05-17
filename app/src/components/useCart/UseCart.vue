<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/vipcard"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">兑换会员</span>
    </div>
    <p class="cgdh">成功兑换后将关联到当前帐号： </p>
    <input type="text" placeholder="请输入10位卡号">
    <input type="text" placeholder="请输入6位卡密">
    <div class="dh">兑换</div>
    <div class="foot">
      <h3 class="wxts">——温馨提示——</h3>
      <p>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p>月卡:30次减免配送费。</p>
      <p>季卡:90次减免配送费。</p>
      <p>年卡:360次减免配送费。</p>
      <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UseCart"
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
  .cgdh{
   font-size: .6rem;
    color: #666;
    line-height: 2rem;
    padding-left: .7rem;
  }
  input{
    width: 95% ;
    border-bottom: 0.0427rem solid #f5f5f5;
    height: 2rem;
    font-size: .65rem;
    color: #999;
    padding-left: .7rem;
    outline: none;
  }
  .dh{
    width: 92%;

    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
    font-weight: 400;
  }
  .wxts{
    text-align: center;
    font-weight: 400;
    font-size: .65rem;
    color: #aaa;
    margin-bottom: .6rem;
  }
  .foot{
    margin-top: 1rem;
  }
  p{
    padding-left: 2rem;
    font-size: .5rem;
    color: #aaa;
    line-height: 0.8rem;
  }
</style>
