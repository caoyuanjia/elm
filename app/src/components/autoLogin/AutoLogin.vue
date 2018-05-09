<template>
    <div class="head">
      <p class="cx">请重新进入</p>
      <p class="fh">请返回后重新进入积分商城~</p>
      <p class="bl"></p>
      <img src="//yun.duiba.com.cn/webapp/img/retrylogin.png" id="map">
    </div>
</template>

<script>
    export default {
        name: "AutoLogin"
    }
</script>

<style scoped>
    .cx{
      font-size: 1.1rem;
      color: #0d7fd5;
      /*margin-left: 5.8rem;*/
      margin-top: 7rem;
      text-align: center;
    }
  #map{
    width: 8.8rem;
    margin-left: 3.5rem;
    margin-top: 1rem;
    /*text-align: center;*/
  }
  .fh{
    font-size: 1rem;
    font-weight: 100;
    transform: scale(0.7);
    margin-left: 2rem;
    margin-top: 0.5rem;
    text-align: center;
    display: inline-block;
    /*width: 15rem;*/
  }
  .bl{
    margin-left:3.5rem;
    font-weight: 100;
    transform: scale(0.7);
  }
</style>
