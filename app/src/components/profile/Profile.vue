<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/home"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">我的</span>
    </div>
    <router-link to="/info">
    <div class="center"><img  src="//elm.cangdu.org/img/default.jpg" class="privateImage">
      <div class="a111">
        <p>登录/注册</p>
        <br>
        <div>
       <img src="../../assets/手机 (2).png" alt="" id="sj">
        <span class="zw">暂无绑定手机号</span></div>
      </div>
      <img src="../../assets/箭头.png" alt="" id="jt">
    </div>
    </router-link>
    <div class="ye">
      <div class="yh" id="yuan1">
        <router-link to="/balance">
        <div class="yuan">
        <span class="yuan2">
          <b class="zero">0.00</b>元
        </span></div>
        <br>
        <span class="ye1">我的余额</span>
        </router-link>
      </div>
      <router-link to="/benefit">
      <div class="yh">
        <div class="yuan">
        <span class="yuan2">
          <b  id="zero">0</b>个
        </span></div>
        <br>
        <span  id="ye1">我的优惠</span>
      </div>
      </router-link>
      <router-link to="/points">
      <div class="yh">
        <div class="yuan">
        <span class="yuan2">
          <b  id="zero1">0</b>分
        </span></div>
        <br>
        <span  id="ye2">我的积分</span>
      </div>
      </router-link>
    </div>
    <div class="dd">
      <router-link to="/order">
      <div id="ddk">
        <img src="../../assets/文本.png" alt="" id="wb2">
        <div id="s1">
        <span class="a1">我的订单</span>
        <img src="../../assets/箭头1.png" alt="" id="jt1"></div>
      </div>
      </router-link>
      <router-link to="/autoLogin">
      <div>
        <img src="../../assets/包2.png" alt="" id="wb3">
        <div id="s2">
          <span class="a1">积分商城</span>
          <img src="../../assets/箭头1.png" alt="" id="jt2"></div>
      </div>
      </router-link>
      <router-link to="/Vipcard">
      <div>
        <img src="../../assets/王冠 copy 2.png" alt="" id="wb4">
        <div id="s3">
          <span class="a1">饿了么会员卡</span>
          <img src="../../assets/箭头1.png" alt="" id="jt3"></div>
      </div>
      </router-link>
    </div>
    <div class="cencen">
      <router-link to="/service">
      <div>
        <img src="../../assets/方块.png" alt="" id="wb5">
        <div id="s4">
          <span class="a1">服务中心</span>
          <img src="../../assets/箭头1.png" alt="" id="jt4"></div>
      </div>
      </router-link>
      <router-link to="/download">
      <div>
        <img src="../../assets/饿了么-2.png" alt="" id="wb6">
        <div id="s5">
          <span class="a1">下载饿了么APP</span>
          <img src="../../assets/箭头1.png" alt="" id="jt6"></div>
      </div>
      </router-link>
    </div>
    <div class="foot">
      <div class="foot1" id="foot1"><img src="../../assets/饿了么-3.png" alt="" id="wm"> <span class="wm">外卖</span></div>
      <router-link to="/search">
      <div class="foot1"><img src="../../assets/znz.png" alt="" id="ss"><span class="ss">搜索</span></div>
      </router-link>
      <router-link to="/order">
      <div class="foot1"><img src="../../assets/文本.png" alt="" id="wb"><span class="wb">文本</span></div>
      </router-link>
      <div class="foot1"><img src="../../assets/用户.png" alt="" id="yh"><span class="yhh">我的</span></div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "Profile"
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
    margin-left: 6rem;
    font-size: .8rem;
    color: #fff;
  }
  .center{
    width: 100%;
    height: 3.83rem;
    background: #3190e8;
  }
  .privateImage{
    width: 2.5rem;
    border-radius: 50%;
    margin-left: 0.6rem;
    margin-top: 0.5rem;
    display: inline-block;
  }
  p{
    display: inline-block;
    font-size: .8rem;

    color: #fff;

  }
  .a111{
    width: 60%;
    height: 1rem;
    display: inline-block;
    margin-top: 01rem;
  }
  #sj{
    width: 1rem;
    /*display: block;*/
    margin-top: 0.5rem;
  }
  .zw{
    /*height: 20rem;*/
    font-size: .573rem;
    /*float:left ;*/
    color: #fff;
    line-height: 0.5rem;
    position: absolute;
    top: 4.5rem;
    left: 4.5rem;
    font-weight: 100;
  }
  #jt{
    width: 0.3rem;
    height: 0.5rem;
    float: right;
    margin-right: 0.5rem;
    margin-top: 1.8rem;
  }
  .yh{
    width: 33.05%;
    height: 3.677rem;
    background: #fff;
    display: inline-block;
    float: left;
    border-left: 0.043rem solid #f1f1f1;
  }
  .yuan{
    padding: .853333rem 0 .453333rem;
  }
  .zero{
    font-size: 1.2rem;
    color: #f90;
    margin-left: 1rem;
  }
  .ye1{
    position: absolute;
    font-size: .57333rem;
    color: #666;
    left: 1.3rem;
    top: 8.1rem;
  }
  #zero{
    margin-left: 2rem;
    color: #ff5f3e;
    font-size: 1.2rem;
  }
  #ye1{
    position: absolute;
    font-size: .57333rem;
    color: #666;
    left: 7rem;
    top: 8.1rem;
  }
  #zero1{
    margin-left: 2rem;
    color: #6ac20b;
    font-size: 1.2rem;
  }
  #ye2{
    position: absolute;
    font-size: .57333rem;
    color: #666;
    left: 12.2rem;
    top: 8.1rem;
  }
  .dd{
    width: 100%;
    /*height: 5.625rem;*/
    background: #fff;
    margin-top: 4rem;

  }
  #wb2{
    width: 0.695rem;
    margin-top: 0.6rem;
    margin-left: 0.5rem;

  }

  #jt1{
    width: 0.467rem;
    float: right;
  }
  #s1{
    display: inline-block;
    padding: 0.5rem 0.8rem 0.5rem 0.1rem;
    vertical-align: top;
    /*margin-top: 0.5rem;*/
    width: 85.2%;
    border-bottom: 0.0427rem solid #f1f1f1;
  }
  #wb3{
    width: 0.695rem;
    margin-top: 0.6rem;
    margin-left: 0.5rem;

  }

  #jt2{
    width: 0.467rem;
    float: right;
  }
  #s2{
    display: inline-block;
    padding: 0.5rem 0.8rem 0.5rem 0.1rem;
    vertical-align: top;
    /*margin-top: 0.5rem;*/
    width: 85.2%;
    border-bottom: 0.0427rem solid #f1f1f1;
  }
  #wb4{
    width: 0.695rem;
    margin-top: 0.6rem;
    margin-left: 0.5rem;

  }

  #jt3{
    width: 0.467rem;
    float: right;
  }
  #s3{
    display: inline-block;
    padding: 0.5rem 0.8rem 0.5rem 0.1rem;
    vertical-align: top;
    /*margin-top: 0.5rem;*/
    width: 85.2%;
    border-bottom: 0.0427rem solid #f1f1f1;
  }
  .a1{
    font-size: 0.7rem;
    font-weight: 400;
    color: #333;
  }
  #wb5{
    width: 0.695rem;
    margin-top: 0.6rem;
    margin-left: 0.5rem;

  }

  #jt4{
    width: 0.467rem;
    float: right;
  }
  #s4{
    display: inline-block;
    padding: 0.5rem 0.8rem 0.5rem 0.1rem;
    vertical-align: top;
    /*margin-top: 0.5rem;*/
    width: 85.2%;
    border-bottom: 0.0427rem solid #f1f1f1;
  }
  .cencen{
    width: 100%;
    /*height: 3.6rem;*/
    background: #fff;
    margin-top: 0.3rem;
  }
  #wb6{
    width: 0.695rem;
    margin-top: 0.6rem;
    margin-left: 0.5rem;

  }

  #jt6{
    width: 0.467rem;
    float: right;
  }
  #s5{
    display: inline-block;
    padding: 0.5rem 0.8rem 0.5rem 0.1rem;
    vertical-align: top;
    /*margin-top: 0.5rem;*/
    width: 85.2%;
    border-bottom: 0.0427rem solid #f1f1f1;
  }
  .yuan2{
    color: #333;
    font-size: .55rem;
  }
  .foot{
    width: 100%;
    height: 1.95rem;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
  }
  #foot1{
    /*margin-left: 10%;*/
    text-align: center;
  }
  .foot1{
    display: inline-block;
    width: 20%;
    margin-left: 3.5%;
  }
  #wm{
    width: 0.9rem;

  }
  .wm{
    display: block;
  }
  .ss{
    display: block;
  }
  #ss{
    width: 1rem;
    margin-left: 0.3rem;
    margin-bottom: 0.05rem;

  }
  #wb{
    width: 0.8rem;
    margin-left: 0.35rem;
    margin-bottom: 0.08rem;
  }
  .wb{
    display: block;
  }
  #yh{
    width: 0.8rem;
    margin-left: 0.3rem;
    margin-bottom: 0.05rem;

  }
  .yhh{
    display: block;
  }
  .foot1 span {
    font-size: .45rem;
    color: #666;
  }

</style>
