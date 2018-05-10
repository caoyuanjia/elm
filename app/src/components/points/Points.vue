<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/profile"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">我的积分</span>
    </div>
    <div class="ye_s1">
      <div class="ye_s2">
        <div class="zye">
          <span class="dqye">当前积分</span>
          <router-link to="/balance/detail">
            <span class="yesm">积分说明</span></router-link>
          <img src="../../assets/问好.png" alt="" id="wh">

        </div>
        <br>
        <div class="ye_s3">
          <span class="zero2">0</span><span class="yuan2">分</span></div>
        <div class="tx1">积分兑换商品</div>
      </div>
    </div>
    <p class="ye_s4">最近30天积分记录</p>
    <div class="ye_s5">
      <img data-v-10f76fe0="" src="data:image/png;base64,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" id="mxjl">
      <p class="ye_s6">最近30天无积分记录</p>
      <p class="ye_s7">快去下单赚取大量积分吧</p>
    </div>


  </div>
</template>

<script>
  export default {
    name: "Points"
  }
</script>

<style scoped>
  /*template{*/
  /*width: 100%;*/
  /*height: 100%;*/
  /*background: #f5f5f5;*/
  /*}*/
  /*.head{*/
  /*width: 100%;*/
  /*height: 28.45rem;*/
  /*background: #f5f5f5;*/
  /*}*/
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
    margin-left: 5rem;
    font-size: .8rem;
    color: #fff;
  }
  .ye_s1{
    width: 100%;
    height: 7.301rem;
    background: #3190e8;
  }
  .ye_s2{
    width: 15rem;
    height: 6.701rem;
    background: #fff;
    margin-left: 0.455rem;
    border-radius: 2%;
  }
  #wh{
    width: 0.6rem;
  }
  .dqye{
    font-size: .55rem;
    color: #666;
    margin-left: 0.5rem;
    font-weight: 200;
    margin-top: 0.6rem;
  }
  .zye{
    display: inline-block;
    margin-top: 0.5rem;
    width: 100%;
  }
  #wh{
    float: right;
    margin-right: 0.25rem;
  }
  .yesm{
    float: right;
    margin-right: 0.35rem;
    font-size: .55rem;
    color: #3190e8;
    font-weight: 200;
  }
  .zero2{
    font-size: 1.8rem;
    margin-left: 0.4rem;

  }
  .ye_s3{
    display: inline-block;
    margin-top: 0.25rem;
  }
  .yuan2{
    font-size: .7rem;
    margin-left: 0.2rem;
  }
  .tx1{
    width: 14rem;
    height: 2rem;
    margin-left: 0.5rem;
    background: #fe6d47;
    border-radius: .15rem;
    text-align: center;
    line-height: 2rem;
    margin-top: 1rem;
    color: #fff;
  }
  .ye_s4{
    font-size: .6rem;
    color: #999;
    margin-left: 0.6rem;
    margin-top: 0.7rem;
    font-weight: 100;
  }
  .ye_s5{
    text-align: center;
    margin-top: 1rem;
  }
  #mxjl{
    width: 8rem;
    height:5rem;
    margin: 0 auto;
  }
  .ye_s6{
    margin-top: .5rem;
    font-size: .7rem;
    color: #666;
    font-weight: 200;
  }
  .ye_s7{
    font-size: .5rem;
    font-weight: 100;
    margin-top: 1rem;
  }
</style>

