<template>

  <div id="app">
    <div class="head">
    <span class="ele">ele.me</span>
    <span class="dl">登录/注册</span>
  </div>
    <div class="left">
      <span class="dq">当前定位城市:</span>
      <span class="bzs">定位不准时,请在城市列表中选择</span>
    </div>
    <div class="dwcs">
      <span class="zz">{{guess.name}}</span>
      <span class="dy"> <router-link to="/city"> <img src="../../../src/assets/更多.png" alt="" id="jt"> </router-link> </span>
    </div>
    <div class="rmcs">
      <span>热门城市</span>
    </div>
    <ul>
      <li v-for="city in hotCity">
        <router-link to="/">
          {{city.name}}
        </router-link>
      </li>
    </ul>

    <span class="azm">(按字母排序)</span>
    <div class="zz">
      <div v-for="(value,index) in group">
      <h4 class="zz1">
        {{index}}
      </h4>
        <ul class="azm_ul">
        <li v-for=" values in value">
{{values.name}}
        </li>
      </ul>
      </div>

    </div>
  </div>



</template>

<script>
  import Vue from "vue";

  let aip1 = '../../../static/css/reset.css';
  let api2 = "http://cangdu.org:8001/v1/cities?type=group";
  let api3 = "http://cangdu.org:8001/v1/cities?type=hot";
  let api4="http://cangdu.org:8001/v1/cities?type=guess";
  export default {
    name: "HomePage",
    data: function () {
      return {
        hotCity: [],
        group: [],
        guess:[]
      }
    },


    created() {
      Vue.axios.get(api3).then((response) => {
        console.log(response.data)
        this.hotCity = response.data;

      });
      Vue.axios.get(api2).then((groupa)=>{
        console.log(groupa.data);
        this.group=groupa.data;
        this.group=objKeySort(this.group)
        function objKeySort(obj) {//排序的函数
          var newkey = Object.keys(obj).sort();
          var newObj = {};
          for (var i = 0; i < newkey.length; i++) {
            newObj[newkey[i]] = obj[newkey[i]];
          }
          return newObj;
        }
      });
      Vue.axios.get(api4).then((guessa)=>{
        console.log(guessa.data);
        this.guess=guessa.data;
      })
    }


  }
</script>

<style scoped>
  body,html{
    padding: 0;
    margin: 0;
    font-size: 0;
  }
  #app{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }

  .head {
    width: 100%;
    height: 1.95rem;
    background: #3190e8;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    /*display:none;*/
  }

  .ele {
    font-size: .7rem;
    position: absolute;
    left: 0.4rem;
    top: 1rem;
    color: #fff;
    font-weight: 400;
    height: 0.7rem;
    transform: translateY(-50%);
  }

  .dl {
    font-size: .65rem;
    position: absolute;
    right: .78rem;
    top: 50%;
    color: #fff;
    transform: translateY(-50%);
  }

  .left span {
    font-size: .55rem;


  }

  .left {
    width: 100%;
    height: 1.237rem;
    margin-top: 2.65rem;
    border-bottom: 0.01rem solid #9f9f9f;

  }

  .dq {
    margin-top: 2.55rem;
    margin-left: 0.35rem;
    color:#666;
  }

  .bzs {
    font-size: .475rem;
    color: #9f9f9f;
    float: right;
    font-weight: 900;
    margin-right: 0.5rem;
    margin-top: 0.2rem;
  }

  .dwcs {
    border-bottom: 0.087rem solid #e4e4e4;
    color: #3190e8;
    padding: 0 .45rem;
    line-height: 01.5rem;
    background: #fff;
  }


  #jt{
    width: .6rem;
    margin-left: 12.5rem;
    margin-top: 0.15rem;
  }
  .rmcs {
    font-size: .45rem;
    color: #666;
    border-top: 0.085rem solid #e4e4e4;
    border-bottom: 0.043rem solid #e4e4e4;
    margin-top: 0.3rem;
    padding: 0.3rem;
    padding-bottom: 0.4rem;
    background: #fff;
  }

  ul li {
    display: inline-block;
    width: 24.68%;
    text-align: center;
    /*border-bottom: 0.048rem solid #e4e4e4;*/
    border-right: 0.048rem solid #e4e4e4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: .6rem;
    color: #666;
    font-weight: 200;
    line-height: 1.5rem;
    background: #fff;
  }

  ul li a {
    display: inline-block;
    justify-content: space-between;
    color: #3190e8;

  }
  .zz1{
    padding: 0.5rem;
    color: #666;
    font-size: 0.65rem;
    margin-top: 0.4rem;
    border-top: 0.085rem solid #e4e4e4;
    border-bottom: 0.045rem solid #e4e4e4;
    background: #fff;
  }
  .azm{
    font-size: 0.475rem;
    color: #999;
    position: absolute;
    top: 11.5rem;
    left: 1.4rem;

  }
  /*ul{*/
    /*border-bottom: 0.085rem solid #e4e4e4;*/
  /*}*/
  .zz{
    font-size: 0.75rem;
  }
</style>
