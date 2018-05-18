<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/benefits"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">历史红包</span>
    </div>
    <div>
      <ul >
        <li v-for="hbs in hb">

          <div class="top1">
            <div class="left1">
              <span class="oney">￥{{Number(hbs.amount).toFixed(1)}}</span>
              <p class="mtwy">{{hbs.description_map.sum_condition}}</p>
            </div>
            <div class="center">
              <h3 class="fxhb">{{hbs.name}}</h3>
              <br>
              <p class="daoq">{{hbs.description_map.validity_periods

                }}</p>
              <p class="xsh">{{hbs.description_map.phone
                }}</p>
            </div>
            <div class="str">
              <img src="../../assets/9429132BDD374A3E2C8AFDAE9705E1B5.png" alt="" class="ygq">
            </div>
          </div>
          <div v-if="hbs.limit_map" class="footer3">
            <span class="xpl">{{hbs.limit_map.restaurant_flavor_ids}}</span>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  let api35="http://cangdu.org:8001/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0"
    export default {
        name: "HbHistory",
      data() {
        return {
          hb: [],


        }
      },
      created() {
        Vue.axios.get(api35).then((response) => {
          console.log(response.data);
          this.hb = response.data;
        })
      },
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
    margin-left: 5.5rem;
    font-size: .8rem;
    color: #fff;
  }

  ul li {
    background-size: .5rem .2rem;
    border-radius: .25rem;
    background: #fff;

    /*margin-top: 0.5rem;*/

    position: relative;
    margin-bottom: 0.5rem;
    /*background: #fff;*/
    background: #fff url("../../assets/FDF1F9400866FEA2DC8656896B35AD3B.png") repeat-x;
    background-size: 0.5rem;
  }
  ul{
    padding: 1rem .5rem;
    padding-bottom: 0;
  }
  .top1 {
    padding: 1rem .5rem .8rem;
    display: flex;
    justify-content: space-between;
    /*background: #fff;*/

  }
  .left1{
    display: inline-block;
    border-right: .025rem dotted #ccc;
    flex: 1;
  }
  .fxhb{
    display: inline-block;
    font-size: .7rem;
    color: #666;
    margin-left: .5rem;
  }
  .daoq{
    display: inline-block;
    font-size: .4rem;
    color: #999;
    margin-left: .5rem;
  }
  .xsh{
    display: inline-block;
    font-size: .4rem;
    color: #999;
    margin-left: .5rem;
    white-space:nowrap;
  }
  .str{
    display: inline-block;
    font-size: .75rem;
    color: #ff5340;
  }
  .mtwy{
    font-size: .4rem;
    color: #999;
    margin-top: 0.5rem;
  }
  .oney{
    font-size: .8rem;
    color: #ff5340;
  }
  .center{
    flex: 2;

  }
  .ygq{
    fill: #ddd;
    width: 3rem;
    height: 3rem;
    top: .6rem;
    right: .2rem;
    position: absolute;

    /*overflow: hidden;*/
    margin-top: 0.01rem;
    right: 0.5rem;
    top: 0.25rem;
  }
  .footer3{
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }
  .xpl{
    font-size: .4rem;
    color: #999;
    margin-left: .4rem;
  }
  ul li:last-child{
    margin-bottom: 0;
  }
</style>
