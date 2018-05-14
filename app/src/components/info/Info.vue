<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/profile"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">账户信息</span>
    </div>
    <div class="mb" v-if="isShow"></div>
    <div>
      <ul>
        <li>
          <input type="file" id="xtp" >
          <span class="toux">头像</span>
          <img data-v-1f2e67c3="" src="//elm.cangdu.org/img/default.jpg" class="privateImage1">
          <img src="../../assets/箭头_右-2.png" alt="" class="jiant">
        </li>
        <router-link to="/setusername">
          <li class="two">
            <span class="yhm2">用户名</span>
            <img src="../../assets/箭头_右-2.png" alt="" class="jiant1">
          </li>
        </router-link>
        <router-link to="/address">
          <li class="two two2">
            <span class="shdz">收货地址</span>
            <img src="../../assets/箭头_右-2.png" alt="" class="jiant2">
          </li>
        </router-link>
      </ul>
    </div>
    <p class="zhbd">账号绑定</p>
    <div class="sjbd" @click="xz">
      <img data-v-c2d94162=""
           src="data:image/png;base64,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"
           alt="" style="display: inline-block; margin-right: 0.4rem;" id="sj">
      <span id="sj1">手机</span>
      <img src="../../assets/箭头_右-2.png" alt="" class="jiant3">
    </div>
    <p class="aqsz">安全设置</p>
    <div class="dlmm">
      <span class="dlmm1">登录密码</span>
      <span class="xg">修改</span>
      <img src="../../assets/箭头_右-2.png" alt="" class="jiant4">
    </div>
    <div class="tcdl" @click="tc">退出登录</div>
    <div class="sxzd" v-show="isShow">
      <div class="sxzb">
        <div class="sxzy">
          <div id="gth1"></div>
          <div id="gth3"></div>

        </div>
        <p class="Ios">请在手机App中设置</p>

      </div>
      <div class="sxzqr" @click="qr">确认</div>
    </div>
    <div class="mb5" v-if="isSHow"></div>
    <div class="sxzd1"  v-show="isSHow">
      <div class="sxzb1">
        <div class="sxzy1">
          <div id="gth2"></div>
          <div id="gth4"></div>

        </div>
        <p class="Ios1">是否退出登录</p>
        <div class="bao">
          <div class="sxzqr2" @click="zdd">再等等</div>
          <div class="sxzqr3" @click="tcdl">退出登录</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Info",
    data() {
      return {
        isShow: false,
        isSHow:false
      }
    },
    methods: {
      dj() {
        this.$router.go(-1)
      },
      xz: function () {
        this.isShow = !this.isShow


      },
      qr() {
        this.isShow = false
      },
      tc:function () {
        this.isSHow=!this.isSHow
      },
      zdd(){
        this.isSHow=false
      },
      tcdl(){
        this.isSHow=false
      }

    }
  }
</script>

<style scoped>
  .mb{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom:0;
    background: rgba(255 ,255 ,255, 0);
    z-index: 200;
  }
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
  #xtp{
    position: absolute;
    top: 2.35rem;
    left: 0rem;
    /*background: red;*/
    height: 3.1rem;
    width: 100%;
    opacity: 0;
  }
  .privateImage1 {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin: 0.5rem 0;
    margin-left: 12.5rem;

  }

  .toux {
    font-size: .6rem;
    color: #333;
    position: absolute;
    top: 3.7rem;
    margin-left: 0.3rem;

  }

  ul {
    margin-top: 0.4rem;
  }

  li {
    width: 100%;
    background: #fff;
    border-top: 0.043rem solid #ddd;
  }

  .jiant {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 3.4rem;
  }

  .jiant1 {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 6rem;
  }

  .yhm2 {
    margin: 0.3rem;
    position: absolute;
    top: 6rem;
    font-size: .6rem;
    color: #333;
  }

  .two {
    display: block;
    height: 2rem;
  }

  .jiant2 {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 8rem;
  }

  .shdz {
    font-size: .6rem;
    color: #333;
    position: absolute;
    top: 8rem;
    margin: 0.3rem;
  }

  .two2 {
    border-bottom: 0.043rem solid #ddd;
  }

  .zhbd {
    margin: 0.4rem;
    font-size: 0.5rem;
    color: #666;
  }

  .sjbd {
    width: 95%;
    height: 1.4rem;
    border-bottom: 0.043rem solid #ddd;
    border-top: 0.043rem solid #ddd;
    background: #fff;
    padding: 0.3rem 0.4rem;
  }

  .jiant3 {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 11.5rem;
  }

  #sj {
    margin-top: 0.2rem;
  }

  #sj1 {
    position: absolute;
    top: 11.65rem;
    font-size: .6rem;
  }

  .aqsz {
    margin: 0.4rem;
    font-size: .6rem;
    color: #666;
  }

  .dlmm {
    border-bottom: 0.043rem solid #ddd;
    border-top: 0.043rem solid #ddd;
    background: #fff;
    padding: 0.3rem 0.4rem;
    height: 1.4rem;
  }

  .jiant4 {
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 15rem;
  }

  .dlmm1 {
    font-size: .6rem;
    color: #333;
  }

  .xg {
    font-size: .7rem;
    line-height: 1.5rem;
    color: #999;
    float: right;
    margin-right: 1rem;
    font-weight: 100;
    opacity: 0.6;
  }

  .dlmm1 {
    position: absolute;
    left: 0.4rem;
    top: 15.2rem;
  }

  .tcdl {
    width: 88%;
    background: #d8584a;
    margin: 0 auto;
    border-radius: 0.213rem;
    margin-top: 1.3rem;
    padding: 0.4rem 0.5rem;
    text-align: center;
    color: #fff;
    font-size: .6rem;
    font-weight: 100;
  }
  .sxzb {
    width: 12rem;
    /*height: 8rem;*/
    background: #fff;
    padding: 0.6rem;
    /*margin: 0 auto;*/
    text-align: center;
    margin: 0 auto;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
  }

  .sxzy {

    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: .15rem solid #f8cb86;
    margin: 0 auto;
  }

  #gth1 {
    width: .12rem;
    height: 1.5rem;
    background: #f8cb86;
    margin: 0.4rem auto;
  }

  .Ios {
    margin: 0 auto;
    font-size: .7rem;
    color: #333;
    margin-top: 0.8rem;

  }

  #gth3 {
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    margin: 0.2rem auto;
    background: #f8cb86;
  }

  .sxzqr {
    margin: 0 auto;
    width: 13.2rem;
    background: #4cd964;
    font-size: .8rem;
    /*margin: 0 auto;*/
    text-align: center;
    padding: 0.75rem 0;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    color: #fff;
  }

  .sxzd {
    width: 100%;
    position: absolute;
    top: 32%;
    webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    z-index: 201;

  }

  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  .sxzb1 {
    width: 14.2rem;
    /*height: 8rem;*/
    background: #fff;
    padding: 0.6rem;
    /*margin: 0 auto;*/
    text-align: center;
    margin: 0 auto;
    border-radius: .25rem;
  }

  .sxzy1 {

    width: 3.84rem;
    height: 3.84rem;
    border-radius: 50%;
    border: .15rem solid #f8cb86;
    margin: 1rem auto;
  }

  #gth2 {
    width: .213rem;
    height: 2.005rem;
    background: #f8cb86;
    margin: 0.427rem auto;
  }

  .Ios1 {
    margin: 1.2rem 0;
    font-size: 1.28rem;
    color: #333;


  }

  #gth4 {
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    margin: 0.2rem auto;
    background: #f8cb86;
  }

  .sxzqr2 {
    display: inline;
    margin: 0.8rem 0.4rem 0.8rem 0;
    margin-top: 0.9rem;
    /*width: 13.2rem;*/
    background: #c1c1c1;
    font-size: .6rem;
    /*margin: 0 auto;*/
    text-align: center;
    padding: 0.4rem 1rem;
    border-radius: .25rem;
    color: #fff;
  }
  .sxzqr3 {
    display: inline;
    margin: 0.8rem 0.4rem 0.8rem 0.4rem;
    /*width: 13.2rem;*/
    background: #dd6b55;
    font-size: .6rem;
    /*margin: 0 auto;*/
    text-align: center;
    padding: 0.4rem 1rem;
    border-radius: .25rem;
    color: #fff;
  }

  .sxzd1 {
    width: 100%;
    position: absolute;
    top: 20%;
    webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    z-index: 201;


  }
  .bao{
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0.76rem;
  }
  .mb5{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom:0;
    background: rgba(0 ,0 ,0, 0.2);
    z-index: 200;
  }
</style>
