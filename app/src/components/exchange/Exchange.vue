<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/benefits"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">兑换红包</span>
    </div>
    <div class="srk">
      <input type="text" placeholder="请输入兑换码" class="dhm">
      <div class="xiab">
        <input type="text" placeholder="验证码" class="yzm" maxlength='4'>
        <div class="kbq">
          <img :src="yzm" alt="" id="yzm">
          <div class="bzd" @click="dj2">
          <p class="kbq3">看不清</p>
          <p class="hyz1" >换一张</p>
          </div>
        </div>
      </div>
    </div>
    <div class="dh1">兑换</div>

  </div>
</template>

<script>
  import Vue from "vue"
  export default {
    name: "Exchange",
    data(){
      return{
        yzm:""
      }
    },
    created(){
      let api23="http://cangdu.org:8001/v1/captchas"
      Vue.axios.post(api23).then((response)=>{
        console.log(response.data.code)
        this.yzm = response.data.code;
      })
    },
    methods:{
      dj2(){
        let api23="http://cangdu.org:8001/v1/captchas"
        Vue.axios.post(api23).then((response)=>{
          this.yzm = response.data.code;
        })
      }
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
    margin-left: 5.5rem;
    font-size: .8rem;
    color: #fff;
  }
  .dhm {
    width: 94.5%;
    padding: 0.6rem .4rem;
    font-size: .7rem;
    color: #666;
    border-radius: .15rem;
    outline: none;

  }
  .srk {
    margin-top: 0.7rem;
    padding: 0 .5rem;
    display: block;

  }
  .yzm {
    margin-top: 0.3rem;
    width: 94%;
    padding: 0.6rem .4rem;
    font-size: .7rem;
    color: #666;
    border-radius: .15rem;
    outline: none;
    flex: 3;
  }
  .kbq {
    width: 3rem;
    height: 2rem;
    background: #fff;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    flex: 2;
    border-radius: .15rem;
    align-items: center;
    display: flex;
  }
  .xiab{
    display: flex;
  }
  #yzm{
    width: 3.5rem;
    height: 1.5rem;
    margin-left: 0.2rem;
    margin-top: 0.4rem;

  }
  .kbq p{
    display: inline-block;
    font-size: .55rem;

  }
  .bzd{
    width: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .hyz1{
    margin-top: 0.3rem;
     color: #3b95e9;
  }
  .kbq3{
    margin-top: 0.2rem;
  }
  .dh1{
    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
  }
</style>
