<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/profile"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">服务中心</span>
    </div>
    <div class="fk">
      <div class="kf1">
        <img src="../../assets/客服.png" alt="" id="kf">
        <span id="zaix">在线客服</span>
      </div>
      <div class="zxkf">
        <img src="../../assets/dianhua-2.png" alt="" id="tel">
        <span id="zaix1">在线客服</span>
      </div>
    </div>
    <div class="pro">
      <h4>热门问题</h4>
      <ul v-for="txt in txts">
        <li>{{txt}}</li>
      </ul>
        <!--<div class="s4">-->
          <!--<span class="a1">超级会员权益说明</span>-->
          <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div>-->

        <!--<div class="s4">-->
          <!--<span class="a1">签到规则</span>-->
          <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div>-->
      <!--<div class="s4">-->
        <!--<span class="a1">用户等级说明</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div>-->

      <!--<div class="s4">-->
        <!--<span class="a1">积分问题</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div><div class="s4">-->
      <!--<span class="a1">教我拍大片</span>-->
      <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
    <!--</div>-->

      <!--<div class="s4">-->
        <!--<span class="a1">支付问题</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div><div class="s4">-->
      <!--<span class="a1">其他问题</span>-->
      <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
    <!--</div>-->

      <!--<div class="s4">-->
        <!--<span class="a1">准时达问题</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div><div class="s4">-->
      <!--<span class="a1">会员说明</span>-->
      <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
    <!--</div>-->

      <!--<div class="s4">-->
        <!--<span class="a1">会员问题</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div><div class="s4">-->
      <!--<span class="a1">红包问题</span>-->
      <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
    <!--</div>-->

      <!--<div class="s4">-->
        <!--<span class="a1">活动细则</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div><div class="s4">-->
      <!--<span class="a1">补签规则</span>-->
      <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
    <!--</div>-->

      <!--<div class="s4">-->
        <!--<span class="a1">优惠说明</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div><div class="s4">-->
      <!--<span class="a1">免责声明</span>-->
      <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
    <!--</div>-->

      <!--<div class="s4">-->
        <!--<span class="a1">代金券说明</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div><div class="s4">-->
      <!--<span class="a1">商务合作</span>-->
      <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
    <!--</div>-->

      <!--<div class="s4">-->
        <!--<span class="a1">余额问题</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div><div class="s4">-->
      <!--<span class="a1">超赞商家</span>-->
      <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
    <!--</div>-->

      <!--<div class="s4">-->
        <!--<span class="a1">匿名购买</span>-->
        <!--<img src="../../assets/箭头1.png" alt="" class="jt4">-->
      <!--</div>-->













    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  let api33="http://cangdu.org:8001/v3/profile/explain"
  export default {
    name: "Service",
    data(){
      return{
        txts:""
      }
    },
    created(){
      Vue.axios.get(api33).then((response)=>{
        console.log(response);
        this.txts = response;
      })
    }
  }
</script>

<style scoped>
  .head {
    width: 100%;
    /*height: 28.45rem;*/
    background: #fff;
    /*overflow: hidden;*/
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
    margin-left: 6rem;
    font-size: .8rem;
    color: #fff;
  }

  #kf {
    width: 1rem;
    margin-top: 0.7rem;
    /*margin-left: 3.5rem;*/
  }

  .kf1 {
    display: inline-block;
    width: 50%;
    border-bottom: 0.043rem solid #f5f5f5;
    text-align: center;
  }

  #zaix {
    display: block;
    /*margin-left: 2.2rem;*/
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
    font-size: .4rem;
  }

  #tel {
    width: 1rem;
    margin-bottom: 0.5rem;
    /*margin-left: 3.5rem;*/
    margin-top: 0.7rem;
  }

  .zxkf {
    width: 49.7%;
    display: inline-block;
    /*height:3.75rem;*/

    /*clear:both;*/
    position: absolute;
    top: 1.97rem;
    border-bottom: 0.043rem solid #f5f5f5;
    border-left: 0.043rem solid #f5f5f5;
    text-align: center;
  }

  #zaix1 {
    display: block;
    /*margin-left: 2.2rem;*/
    margin-bottom: 0.8rem;
    font-size: .4rem;
  }

  .jt4 {
    width: 0.467rem;
    float: right;
  }

  .s4 {
    display: inline-block;
    padding: 0.5rem 0.8rem 0.5rem 1rem;
    vertical-align: top;
    /*margin-top: 0.5rem;*/
    width: 90%;
    border-bottom: 0.0427rem solid #f1f1f1;
  }

  .a1 {
    font-size: 0.6rem;
    font-weight: 300;
    color: #333;
  }
</style>
