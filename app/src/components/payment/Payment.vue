<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">在线支付</span>
    </div>
    <div class="zxzftop">
      <p class="sysj">支付剩余时间</p>
      <p class="time">00 : {{m}}: {{s}}</p>
    </div>
    <p class="zffs1">选择支付方式</p>
    <div class="zxzf1">
      <div class="zffs">
        <div class="zffs2">
        <img src="../../assets/支付宝.png" alt="" class="zfb">

          <span class="zfb1">支付宝</span>
        </div>
          <img :src="two" alt="" class="zfb2" @click="two1">
      </div>
      <div class="zffss">
        <div class="zffss2">
          <img src="../../assets/微信.png" alt="" class="zfbs">

          <span class="zfbs1">微信</span>
        </div>
        <img :src="one" alt="" class="zfbs2" @click="one1">

      </div>
    </div>
    <div class="zxqrzf" @click="zx">确认支付</div>
    <div class="sxzd" v-show="isShow">
      <div class="sxzb">
        <div class="sxzy">
          <div id="gth1"></div>
          <div id="gth3"></div>

        </div>
        <p class="Ios">当前环境无法支付，请打开官方APP进行付款</p>

      </div>
      <router-link to="order">
      <div class="sxzqr" @click="qr">确认</div>
      </router-link>
    </div>
    <div id="mb7" v-if="isShow"></div>

  </div>
</template>

<script>

  import one from "../../assets/one.png"
  import two from "../../assets/two.png"
  export default {
    name: "Payment",
    data(){
      return{
        m:"",
        s:"",
        one:one,
        two:two,
        isShow:false
      }
    },
    methods:{
      two1(){


        if (this.one == two && this.two == one){
          this.one = one
          this.two = two
        }
      },
      one1(){
        if (this.two==two && this.one==one){
          this.two=one
          this.one = two
        }



      },
      zx: function() {
        this.isShow=!this.isShow
      },
      qr(){
        this.isShow=false
      }
    },
    mounted(){
      var m=14
      var s=60
      var timer = setInterval(()=>{
        if (s == "00"){
          s = 60
          m--
          if(m<"10"){
            m = "0"+m
          }
        }
        s--;
        if(s<"10"){
          s="0"+s
        }
        if(m == "00" && s == "00"){
          clearInterval(timer)
        }

        this.s = s
        this.m = m
      },50)

    }
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
    margin-left: 6rem;
    font-size: .8rem;
    color: #fff;
  }
  .zxzftop {
    width: 91%;
    background: #fff;
    padding: .7rem;
    text-align: center;
  }
  .sysj {
    margin-top: 1rem;
    font-size: .6rem;
    color: #666;
  }
  .time {
    margin: 0.3rem 0 1rem;
    font-size: 1.5rem;
    color: #333;
    letter-spacing:0.0427rem;

  }
  .zffs1 {
    padding: 0.6rem 0.7rem;
    font-size: .7rem;
  }
  .zffs {
    /*width: 60%;*/
    padding: 0.4rem 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: .025rem solid #f5f5f5;
  }

  .zfb {
    width: 2rem;
  }
  .zfb2 {
    width: 1rem;
  }
  .zfb1{
    margin-left: 0.2rem;

  }
  .zffs2{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }



  .zffss {
    padding: 0.6rem 0.7rem;
    font-size: .7rem;
  }
  .zffss {
    /*width: 60%;*/
    padding: 0.4rem 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: .025rem solid #f5f5f5;
  }

  .zfbs {
    width: 2rem;
  }
  .zfbs2 {
    width: 1rem;
  }
  .zfbs1{
    margin-left: 0.2rem;

  }
  .zffss2{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .zxqrzf{
    width: 94%;
    background: #4cd964;
    border-radius: .2rem;
    color: #fff;
    text-align: center;
    margin: .5rem auto;
    line-height: 1.8rem;

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
    top: 23%;
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
  #mb7{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0);
  }
</style>
