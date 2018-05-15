<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/home"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
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
    <div class="zxqrzf">确认支付</div>

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
        two:two
      }
    },
    methods:{
      two1(){

        if (this.two==one && this.one==two){
          this.two=two
          this.one = one
        }

      },
      one1(){
        if(this.one ==one){
          this.one=two
        }else if (this.one == two){
          this.one=one
        }
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
        s--
        if(s<"10"){
          s="0"+s
        }
        if(m == "00" && s == "00"){
          clearInterval(timer)
        }

        this.s = s
        this.m = m
      },1000)

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
  #dwdh{
    width: 1rem ;
    position: absolute;
    left: 89.4%;
    top: 37%;

  }
</style>
