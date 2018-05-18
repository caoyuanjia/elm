<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/profile"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">我的优惠</span>
    </div>
    <div class="ssjc">
      <div class="ssjh1">
        <span class="ssjh">红包</span>
      </div>
      <div class="ssjs1">
        <router-link to="/benefit">
        <span class="ssjs">商家代金券</span>
        </router-link>
      </div>
    </div>
    <div class="ssjsj1">
      <span class="jjdq">有<span class="three">3</span>个红包即将到期</span>
      <router-link to="/hbDescription">

        <span class="ssjsj">红包说明</span>
      </router-link>
      <img src="../../assets/问好.png" alt="" id="wh">
      <ul >
        <li v-for="hbs in hb">

          <div class="top1">
            <div class="left1">
              <span class="oney">￥{{Number(hbs.amount).toFixed(1)}}</span>
              <p class="mtwy">{{hbs.description_map.sum_condition}}</p>
            </div>
            <div class="center">
              <h3 class="fxhb">{{hbs.name}}</h3>
              <br>
              <p class="daoq">{{hbs.description_map.validity_periods

                }}</p>
              <p class="xsh">{{hbs.description_map.phone
                }}</p>
            </div>
            <div class="str">
              {{hbs.description_map.validity_delta}}
            </div>
          </div>
        </li>

      </ul>
      <div class="footer">
      <p class="xpl">限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
      </div>

    </div>
    <router-link to="/hbHistory">
    <div class="footer1">
      <span class="look">查看历史红包</span>
      <span class="look">  ></span>
    </div>
    </router-link>
    <div class="footerr">
      <router-link to="/exchange">
      <div class="dhhb lll">兑换红包</div>
      </router-link>
      <router-link to="/" >
      <div class="dhhb">推荐有奖</div>
      </router-link>
    </div>

  </div>
</template>

<script>
  import Vue from "vue"

  let api34 =
    "http://cangdu.org:8001/promotion/v2/users/1/hongbaos?limit=20&offset=0"
  export default {
    name: "Benefit",
    data() {
      return {
        hb: []
      }
    },
    created() {
      Vue.axios.get(api34).then((response) => {
        console.log(response.data);
        this.hb = response.data;
      })
    },

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
  }
  #fh {
    width: 0.8rem;
    margin-left: 0.4rem;
    margin-top: 0.5rem;
  }
  .head_dw {
    margin-left: 5.5rem;
    font-size: .8rem;
    color: #fff;
  }
  .jjdq {
    font-size: .5rem;
    /*line-height: 2rem;*/
    color: #666;
    margin-left: 0.6rem;
  }
  .ssjc {
    width: 100%;
    height: 2rem;
    background: #fff;
    text-align: center;
    display: flex;
  }
  .ssjc div {
    width: 50%;
    margin-top: 0.6rem;
  }
  .ssjh {
    font-size: .65rem;
    padding-bottom: 0.2rem;
    border-bottom: .1rem solid #3190e8;
    color: #3190e8;
  }
  .ssjs {
    width: 50%;
    font-size: .65rem;
    color: #333;
  }
  .three {
    margin: 0.1rem;
    color: red;
  }
  #wh {
    width: .6rem;
    /*margin-left: 9rem;*/
    float: right;
    /*margin-top: 0.1rem;*/
    margin-right: 0.2rem;
  }
  .ssjsj {
    float: right;
    font-size: .5rem;
    color: #3190e8;
    margin-right: 0.5rem;
  }
  .ssjsj1 {
    margin-top: 0.5rem;
    padding: 0 .7rem;
  }
  ul li {
    background-size: .5rem .2rem;
    border-radius: .25rem;
    background: #fff;
    background: url("../../assets/DF9DF6AE382D43E723BEE95B34C5D335.png") repeat-x;
    margin-top: 0.5rem;
    background-size: 0.5rem;
  }
  .top1 {
    padding: 1rem .5rem .8rem;
    display: flex;
    justify-content: space-between;

  }
  .left1{
    display: inline-block;
    border-right: .025rem dotted #ccc;
    flex: 1;
  }
  .fxhb{
    display: inline-block;
    font-size: .7rem;
    color: #666;
    margin-left: .5rem;
  }
  .daoq{
    display: inline-block;
    font-size: .4rem;
    color: #999;
    margin-left: .5rem;
  }
  .xsh{
    display: inline-block;
    font-size: .4rem;
    color: #999;
    margin-left: .5rem;
  }
  .str{
    display: inline-block;
    font-size: .75rem;
    color: #ff5340;
  }
  .oney{
    font-size: .8rem;
    color: #ff5340;
  }
  .mtwy{
    font-size: .4rem;
    color: #999;
    margin-top: 0.5rem;
  }
  .center{
    flex: 2;
  }
  .xpl{
    font-size: .4rem;
    color: #999;
    margin-left: .4rem;
  }
  .footer{
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  .footer1{
    padding: .9rem 0 2.8rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .look{
    margin-right: 0.3rem;
    font-size: .5rem;
    color: #999;
    margin-right: .2rem;
  }
  .footerr{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #fff;
  }
  .dhhb{
    text-align: center;
    font-size: .7rem;
    color: #555;
    line-height: 2rem;
    width: 49.85%;
    float: left;
  }
  .lll{
    border-right: 0.043rem solid rgb(245, 245, 245);
  }
</style>

