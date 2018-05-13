<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/benefit"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">代金券说明</span>
    </div>
    <h3>Q1: 什么是商家代金券？</h3>
    <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
    <h3>Q2: 怎么获得商家代金券？</h3>
    <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
    <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
    <h3>Q3: 商家代金券使用条件</h3>
    <p>商家代金券仅限在指定商家使用</p>
    <p>商家代金券仅限在线支付使用</p>
    <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
  </div>
</template>

<script>
  export default {
    name: "Coupon"
  }
</script>

<style scoped>
  .head{
    width: 100%;
    height: 28.45rem;
    background: #fff;
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
  h3{
    padding: 0.5rem;
  }
  p{
    font-size: .6rem;
    color: #666;
    font-weight: 200;
    padding: 0 0.5rem;
    line-height: 1rem;
  }
</style>
