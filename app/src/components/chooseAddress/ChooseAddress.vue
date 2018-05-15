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
          <input type="text" placeholder="你的名字" class="name">
          <div class="bao4">
            <img src="../../assets/对号.png" alt="" class="dui1">
            <span class="man">先生</span>
            <img src="../../assets/对号-2.png" alt="" class="dui2">
            <span class="man1">女士</span>
          </div>
        </div>
      </div>
      <div class="lxdh">
        <span class="lxdh1">联系电话</span>
        <div class="btel">
          <input type="text" placeholder="你的手机号" id="tel">
          <img src="../../assets/加号.png" alt="" class="jiah">
        </div>
      </div>
      <div class="scdd">
        <span class="scdd1">送餐地址</span>
        <div class="scdd4">
        <div class="scdd2">小区/写字楼/学校等</div>
        <input type="text" placeholder="详细地址(如门牌号等)" class="scdd3">
        </div>
      </div>
      <div class="biaoq">
        <span class="biaoq1">标签</span>
        <input type="text" placeholder="无/家/学校/公司" class="biaoq2">
      </div>
    </div>
      <div class="tianjqr"><span>确认</span></div>
  </div>
</template>

<script>
  export default {
    name: "ChooseAddress"
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
  .lxr {
    font-size: .7rem;
    line-height: 1.5rem;
  }
  .name {
    width: 125%;
    /*height: 2.5rem;*/
    font-size: .7rem;
    color: #999;
    margin-left: 2rem;
    outline: none;
    padding-bottom: 0.6rem;
    padding-top: 0.3rem;
    /*margin-top: 2rem;*/
  }
  .bao4 {
    width: 10.7rem;
    /*display: inline;*/
    margin-left: 1.8rem;
    line-height: 2.5rem;
    border-top: .025rem solid #f5f5f5;

  }
  .bao3 {
    width: 50%;
    display: inline-block;
  }
  .top {
    padding-top: 0.6rem;
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
    margin-left: 2rem;
  }
  .lxdh1 {
    /*line-height: 2.7rem;*/
    margin-top: 0.8rem;
  }
  #tel {
    outline: none;
    margin-left: 1.4rem;
    font-size: .7rem;
    color: #999;
    height: 2.5rem;
    /*width: 9.5rem;*/
    margin-bottom: 0.05rem;
  }
  .btel{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /*width: 50%;*/
    /*margin-left: 1.6rem;*/
  }
  .lxdh{
    display: flex;
    border-bottom: .025rem solid  #f5f5f5;
  }
  .scdd1{
    font-size: .7rem;
    line-height: 1.5rem;
  }
  .scdd2{
    width: 142%;
    /*height: 2.5rem;*/
    font-size: .7rem;
    color: #999;
    margin-left:1.35rem;
    outline: none;
    padding-bottom: 0.6rem;
    padding-top: 0.3rem;
    border-bottom: .025rem solid #f5f5f5;
    font-weight: 100;
  }
  .scdd3{
    width: 10.7rem;
    /*display: inline;*/
    margin-left: 1.3rem;
    line-height: 2.5rem;
    font-size: .7rem;
    color: #999;
    outline: none;
    margin-bottom: 0.01rem;

  }
  .scdd4{
    width: 50%;
    display: inline-block;
  }
  .scdd{
    padding-top: 0.6rem;
    display: flex;
    border-bottom: .025rem solid #f5f5f5;
  }
  .biaoq{
    padding-top: .6rem;
  }
  .biaoq1{
    font-size: .7rem;
    color: #333;
  }
  .biaoq2{
    width: 50%;
    /*height: 2.5rem;*/
    font-size: .7rem;
    color: #999;
    /*line-height: 2.5rem;*/
    padding-top: 0.1rem;
    padding-bottom: 0.6rem;
    margin-left: 2.45rem;
    outline: none;
  }
  .tianjqr{
    width: 90%;
    background: #4cd964;
    margin: 0.6rem auto 0;
    font-size: .7rem;
    text-align: center;
    border-radius: .2rem;
    line-height: 1.8rem;
    color: #fff;
  }
  input{
    font-weight: 100;
  }
</style>
