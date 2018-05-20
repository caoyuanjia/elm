<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">选择地址</span>
    </div>
    <router-link to="/chooseAddress">

      <div class="foot">
        <img src="../../assets/新增.png" alt="" id="foot">
        <p class="foot1">新增收货地址</p>
      </div>
    </router-link>
    <ul>
      <li>
        <img src="../../assets/two.png" alt="" class="duih">
        <div class="xs5">
          <div >
            <span class="xzdz1">{{v1}}</span>
            <span class="xzdz1">{{v6}}</span>
            <span class="xzdz2">{{v2}}</span>
          </div>
          <div class="xs2">
            <span class="xzdz3">{{v3}}</span>
            <span class="xzdz4">{{v4}}</span>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "confirmOrder",
    data() {
      return {
        v1: null
      }
    },
    methods: {
      dj() {
        this.$router.go(-1);
        // history.go(-1);
      },
    },
    created() {
      this.v1 = JSON.parse(localStorage.getItem('v1'));
      this.v2 = JSON.parse(localStorage.getItem('v2'));
      this.v3 = JSON.parse(localStorage.getItem('v3'));
      this.v4 = JSON.parse(localStorage.getItem('v4'));
      this.v6 = JSON.parse(localStorage.getItem('v6'));
      // this.v7 = JSON.parse(localStorage.getItem('v7'));
      console.log(this.v1);
    }
  }
</script>

<style scoped>
  .head {
    width: 100%;
    height: 28.45rem;
    background: #fff;
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

  .foot {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #foot {
    width: 1.1rem;

  }

  .foot1 {
    display: inline-block;
    font-size: .7rem;
    color: #3190e8;
    margin-left: .3rem;

  }

  li {
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: .025rem solid #f5f5f5;
    padding: .7rem;
    line-height: 1rem;
    background: #fff;
  }
  .xs2{
    display: flex;
    width: 100%;
    align-items: center;

  }
  .xzdz1{
    font-size: .8rem;
    font-weight: 700;
  }
  .xzdz3{
    font-size: .5rem;
    color: #fff;
    border-radius: .15rem;
    background-color: #ff5722;
    height: .6rem;
    line-height: .6rem;
    padding: 0 .2rem;
    margin-right: .3rem;
  }
  .xzdz4{
    font-size: .6rem;
    color: #777;
  }
  .xs2{
    display: block;
  }
  .xs5{
    margin-left: 1rem;
  }
  .duih{
    width: 0.8rem;
  }
</style>
