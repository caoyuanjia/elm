<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/vipcard"><img src="../../assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">我的优惠</span>

    </div>
    <div class="bao">
      <div class="right">
        <p class="left">尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
          购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
          注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
      </div>
      <br>
      <br>
      <br>

      <br>
      <br>
      <br>
      <h3>Q1: 特权介绍</h3>
      <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
      <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
      <p>更多特权，敬请期待！</p>
      <h3>Q2: 资费介绍</h3>
      <p>饿了么会员卡：20元</p>
      <h3>Q3: 使用说明</h3>
      <p>当用户满足以下任一条件，会员服务自动失效：</p>
      <ol>
        <li>自绑定之日起超过31天；</li>
        <li>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</li>
      </ol>
      <h3>Q4: 购卡说明</h3>
      <p>在线购买：饿了么App>我的>饿了么会员卡</p>
      <h3>Q5: 温馨提示</h3>
      <p>用户在当前会员服务失效前，无法购买新卡。</p>
      <p style="background: #fff">请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VipDescription"
  }
</script>

<style scoped>
  .head {
    width: 100%;
    height: 28.45rem;
    background: #f5f5f5;
  }

  .head_top {
    width: 100%;
    height: 1.95rem;
    background: #3190e8;
    z-index: 210;
    position: fixed;
  }

  #fh {
    width: 0.8rem;
    margin-left: 0.4rem;
    margin-top: 0.5rem;
  }

  .head_dw {
    margin-left: 5.2rem;
    font-size: .8rem;
    color: #fff;
  }

  .bao {
    position: absolute;
    top: 1.98rem;
    left: 0;
    /*bottom: 0;*/
    right: 0;
    background: #fff;
    padding: .7rem;
    font-size: .6rem;
    line-height: 0.8rem;

  }
  p {
    font-weight: 100;
    margin-bottom: 0.3rem;
  }
  .right {
    padding: 0.1rem 1rem;
  }

  h3 {
    margin-top: .666667rem;
    margin-bottom: .4rem;
    font-size: .7rem;
    font-weight: 600;
    color: #333;
  }
  li{
    margin-bottom: 0.2rem;
    line-height: 1rem;
  }
  ol{
    margin-left: 1.5rem;
  }
</style>
