<template>
  <div class="head">
    <div class="head_top">
      <span @click="dj"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></span>
      <span class="head_dw">搜索</span>
    </div>
    <div class="input_tj">
      <input type="text" placeholder="请输入商家或美食名称" id="input_1">
      <img src="../../assets/a.png" alt="" class="clear" v-if="show1" >
      <input type="submit" placeholder="提交" id="input_2" v-model="message" @click="dj1">
    </div>
    <div class="foot">

      <div class="foot1" id="foot1"><img src="../../assets/饿了么-3.png" alt="" id="wm"> <span class="wm">外卖</span></div>
      <div class="foot1"><img src="../../assets/zz.png" alt="" id="ss"><span class="ss">搜索</span></div>
      <router-link to="/order">
      <div class="foot1"><img src="../../assets/文本.png" alt="" id="wb"><span class="wb">文本</span></div>
      </router-link>
      <router-link to="/profile">
      <div class="foot1"><img src="../../assets/用户.png" alt="" id="yh"><span class="yh">我的</span></div>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Search",

      data() {
        return {
          show1: false,
          message:""
        }
      },
      methods: {
        dj() {
          this.$router.go(-1)
        },
        dj1(){
          if (this.message!=""){
            this.show1=true
          }
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
    margin-left: 6rem;
    font-size: .8rem;
    color: #fff;
  }
  .input_tj{
    width: 100%;
    height: 2.5rem;
    background: #fff;
  }
  #input_1{
    width: 11rem;
    height: 1.5rem;
    margin-top: .5rem;
    margin-left: .5rem;
    outline:none;
    font-size: .65rem;
    background: #f2f2f2;
    border-radius: .125rem;
    border: 0.043rem solid #e4e4e4;
    padding-left: 0.2rem;
  }
  #input_2{
    width: 3.289rem;
    height: 1.5rem;
    background: #3190e8;
    outline: none;
    color: #fff;
    font-size: .65rem;
    border-radius: .125rem;
  }
  .foot{
    width: 100%;
    height: 1.95rem;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
  }
  #foot1{
    /*margin-left: 10%;*/
    text-align: center;
  }
  .foot1{
    display: inline-block;
    width: 20%;
    margin-left: 3.5%;
  }
  #wm{
    width: 0.9rem;

  }
  .wm{
    display: block;
  }
  .ss{
    display: block;
  }
  #ss{
    width: 1rem;
    margin-left: 0.3rem;
    margin-bottom: 0.05rem;

  }
  #wb{
    width: 0.8rem;
    margin-left: 0.35rem;
    margin-bottom: 0.08rem;
  }
  .wb{
    display: block;
  }
  #yh{
    width: 0.8rem;
    margin-left: 0.3rem;
    margin-bottom: 0.05rem;

  }
  .yh{
    display: block;
  }
  .foot1 span {
    font-size: .45rem;
    color: #666;
  }
  .clear {
    position: absolute;
    right: 4.2rem;
    top: 2.8rem;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0.2rem 0 0 0.9rem;
    outline: none;
  }
</style>
