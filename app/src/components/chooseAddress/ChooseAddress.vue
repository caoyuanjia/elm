<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/confirmOrder"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">添加地址</span>
    </div>
    <div class="supbig">
      <div class="top">
        <span class="lxr">联系人</span>
        <div class="bao3">
          <input type="text" placeholder="你的名字" class="name" v-model="v1">
          <div class="bao4">
            <img :src="two" alt="" class="dui1" @click="two1">
            <span class="man" v-model="v6">先生</span>
            <img :src="one" alt="" class="dui2" @click="one1" >
            <span class="man1" v-model="v6" >女士</span>
          </div>
        </div>
      </div>
      <div class="lxdh">

        <span class="lxdh1">联系电话</span>
        <div class="btel">
          <input type="text" style="width: 85%;" placeholder="你的手机号" id="tel" v-model="v2">
          <img src="../../assets/加号.png" alt="" class="jiah" @click="jiah">
          <input type="text" placeholder="备用电话" class="bydh" v-show="bydh">
        </div>
        <br>
      </div>
      <div class="scdd">
        <span class="scdd1">送餐地址</span>
        <div class="scdd4">
          <router-link to="/searchAddress">
            <input type="text" placeholder="小区/写字楼/学校等" class="xiaoq">
          </router-link>
          <input type="text" placeholder="详细地址(如门牌号等)" class="scdd3" v-model="v3">
        </div>
      </div>
      <div class="biaoq">
        <span class="biaoq1">标签</span>
        <div>
          <input type="text" placeholder="无/家/学校/公司" class="biaoq2" v-model="v4">
        </div>
      </div>
    </div>
    <!--@click="www"-->
    <router-link to="/confirmOrder">
    <div class="tianjqr" @click="tianjqr"><span>确认</span></div>
    </router-link>
  </div>
</template>

<script>
  import one from "../../assets/one.png"
  import two from "../../assets/two.png"

  export default {
    name: "ChooseAddress",
    data() {
      return {
        one: one,
        two: two,
        v1: null,
        v2: null,
        v3: null,
        v4: null,
        bydh:false,
        v6:"先生"

      }


    },
    methods: {
      two1() {
this.v6="先生"
        localStorage.setItem('v6', JSON.stringify(this.v6));
        if (this.one == two && this.two == one) {
          this.one = one
          this.two = two
        }
      },
      one1() {
        this.v6="女士"
        localStorage.setItem('v6', JSON.stringify(this.v6));
        if (this.two == two && this.one == one) {
          this.two = one
          this.one = two
        }
      },
       tianjqr(){
        localStorage.setItem('v1', JSON.stringify(this.v1));
         localStorage.setItem('v2', JSON.stringify(this.v2));
         localStorage.setItem('v3', JSON.stringify(this.v3));
         localStorage.setItem('v4', JSON.stringify(this.v4));
         localStorage.setItem('v6', JSON.stringify(this.v6));
         // localStorage.setItem('v7', JSON.stringify(this.v7));
        console.log(JSON.stringify(this.v6))

      },
      jiah(){
        this.bydh=true
      },

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
    margin-left: 5.4rem;
    font-size: .8rem;
    color: #fff;
  }

  .supbig {
    background: #fff;
    padding: 0 0.7rem;
  }

  .supbig > div {
    display: flex;
  }

  .supbig > div span {
    flex: 2;
    line-height: 2.5rem;
  }

  .supbig > div div {
    flex: 5;
  }

  .supbig > div input {
    width: 100%;
    height: 2.4rem;
    outline: 0;
  }

  .lxr {
    font-size: .7rem;
    line-height: 1.5rem;
  }

  .name {
    /*width: 125%;*/
    /*height: 2.5rem;*/
    font-size: .7rem;
    color: #999;
    /*margin-left: 2.2rem;*/
    outline: none;
    /*padding-bottom: 0.6rem;*/
    /*padding-top: 0.3rem;*/
    /*margin-top: 2rem;*/
  }

  .xiaoq {
    font-size: .7rem;
    color: #999;
    border-bottom: .025rem solid #f5f5f5;
  }

  .bao4 {
    /*line-height: 2.5rem;*/
    border-top: .025rem solid #f5f5f5;

  }

  .top {

    display: flex;
    border-bottom: .025rem solid #f5f5f5;
  }

  .dui1 {
    width: 0.8rem;
  }

  .dui2 {
    width: 0.8rem;
  }

  .man {
    margin-left: 0.3rem;
  }

  .man1 {
    margin-left: 0.3rem;
  }

  .dui2 {
    margin-left: 0.5rem;
  }

  .jiah {
    width: 1rem;
    margin-left: -.5rem;
  }

  #tel {
    outline: none;
    /*margin-left: 0.55rem;*/
    font-size: .7rem;
    color: #999;
    height: 2.45rem;
    /*width: 9.5rem;*/
    /*margin-bottom: 0.05rem;*/
    border-bottom: .025rem solid #f5f5f5;
  }

  .lxdh {
    display: flex;
    border-bottom: .025rem solid #f5f5f5;
  }

  .scdd1 {
    font-size: .7rem;
    line-height: 1.5rem;
  }

  .scdd3 {
    width: 10.7rem;
    /*display: inline;*/
    /*margin-left: 1.3rem;*/
    line-height: 2.5rem;
    font-size: .7rem;
    color: #999;
    outline: none;
    margin-bottom: 0.01rem;

  }

  .scdd {
    display: flex;
    border-bottom: .025rem solid #f5f5f5;
  }

  .biaoq1 {
    font-size: .7rem;
    color: #333;
  }

  .biaoq2 {
    font-size: .7rem;
    color: #999;
    outline: none;
  }

  .tianjqr {
    width: 90%;
    background: #4cd964;
    margin: 0.6rem auto 0;
    font-size: .7rem;
    text-align: center;
    border-radius: .2rem;
    line-height: 1.8rem;
    color: #fff;
  }

  input {
    font-weight: 100;
  }

  .bydh {
    width: 100%;
    height: 2.5rem;
    font-size: .7rem;
    color: #999;

    display: block;
  }
</style>
