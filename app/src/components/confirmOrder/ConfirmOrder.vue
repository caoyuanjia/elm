<template>
  <div class="head">
    <div class="head_top">
      <span @click="dj"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></span>
      <span class="head_dw">选择地址</span>
    </div>
    <div class="foot">
      <img src="../../assets/新增.png" alt="" id="foot">
      <p class="foot1">新增收货地址</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "confirmOrder",
      methods:{
          dj(){
            this.$router.go(-1)
          }
      }
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
    margin-left: 5.4rem;
    font-size: .8rem;
    color: #fff;
  }
  .foot{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #foot{
    width: 1.1rem;

  }
  .foot1{
    display: inline-block;
    font-size: .7rem;
    color: #3190e8;
    margin-left: .3rem;

  }
</style>
