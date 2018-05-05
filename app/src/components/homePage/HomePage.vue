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
      <span class="zz">郑州</span>
      <span class="dy"> > </span>
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

  </div>

  <div class="head"></div>


</template>

<script>
  import Vue from "vue";

  let aip1 = '../../../static/css/reset.css';
  let api2 = "http://cangdu.org:8001/v1/cities?type=group";
  let api3 = "http://cangdu.org:8001/v1/cities?type=hot";
  export default {
    name: "HomePage",
    data: function () {
      return {
        hotCity: [],
        group: []
      }
    },
    created() {
      Vue.axios.get(api3).then((response) => {
        console.log(response.data)
        this.hotCity = response.data;

      })
    }


  }
</script>

<style scoped>

  /*#app{*/
  /*overflow:hidden;*/
  /*}*/
  .head {
    width: 100%;
    height: 1.95rem;
    background: #3190e8;
    position: fixed;
    top: 0;
    left: 0;

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
    color: #666;

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
  }

  .bzs {
    font-size: .475rem;
    color: #9f9f9f;
    font-weight: 900;
    margin-left: 3.63rem;

  }

  .dwcs {
    border-bottom: 0.087rem solid #e4e4e4;
    color: #3190e8;
    padding: 0 .45rem;
    line-height: 01.5rem;
  }

  .dy {
    margin-left: 13rem;
    width: 1rem;
    height: 1rem;
  }

  .rmcs {
    font-size: .45rem;
    color: #666;
    border-top: 0.085rem solid #e4e4e4;
    border-bottom: 0.043rem solid #e4e4e4;
    margin-top: 0.3rem;
    padding: 0.3rem;
    padding-bottom: 0.4rem;
  }

  ul li {
    display: inline-block;
    width: 24.69%;
    text-align: center;
    padding: 0.5rem 0;
    border-bottom: 0.05rem solid #e4e4e4;
    border-right: 0.05rem solid #e4e4e4;
  }

  ul li a {
    display: inline-block;
    justify-content: space-between;
    color: #3190e8;
  }

  .head {
    width: 320px;
    height: 39px;
    background: #3190e8;
  }
</style>
