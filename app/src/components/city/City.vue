<template>
  <div class="head">
      <div class="head_top">
        <router-link to="/home"><img src="../../../src/assets/返回.png" alt="" id="fh"></router-link>

        <span class="head_dw">郑州</span>
        <span class="qhcs">切换城市</span>
      </div>
      <div class="head_tj">
        <input type="text" placeholder="输入学校、商务楼、地址" class="srxx">
        <input type="submit" value="提交" class="tjcs">
      </div>
    <div class="ssls">
      <span>搜索历史</span>

    </div>

  </div>
</template>

<script>
    export default {
        name: "City"
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
  .qhcs{
    float: right;
    margin-right: 0.6rem;
    margin-top: 0.65rem;
    font-size: .6rem;
    color: #fff;
    font-weight: 100;
  }
  .head_tj{
    margin-top: 0.6rem;
    width: 100%;
    height:4.25rem;
    background: #fff;
    border-bottom: 0.043rem solid #e4e4e4;
    border-top: 0.043rem solid #e4e4e4;
  }
  .head_tj input{
    width: 14.2rem;
    height: 1.4rem;
    outline: none;
    border-radius: 0.1rem;
    margin-top: 0.5rem;
    border: 0.043rem solid #e4e4e4;
    margin-left: 0.9rem;
  }
   .tjcs{
     background: #3190e8;
     font-size: .65rem;
     color:#fff;

   }
   .ssls {
     border-bottom: 0.085rem solid #e4e4e4;
     border-top: 0.043rem solid #e4e4e4;
     width: 100%;
     height:0.768rem;
      padding-bottom: .2rem;
   }
   .ssls span{
     font-size: .475rem;
     margin-left: .5rem;
     margin-bottom: 0.1rem;

   }
</style>
