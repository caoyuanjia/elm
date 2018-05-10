<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/profile"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <span class="head_dw">服务中心</span>
    </div>
    <div class="fk">
      <div class="kf1">
        <img src="../../assets/客服.png" alt="" id="kf">
        <span id="zaix">在线客服</span>
      </div>
      <div class="zxkf">
        <img src="../../assets/dianhua-2.png" alt="" id="tel">
        <span id="zaix1">在线客服</span>
      </div>
    </div>
    <div class="pro">
      <h4 class="prob">热门问题</h4>

      <router-link to="/service/questionDetail">
        <div class="s4" v-for="lis in txts">
          <span class="a1">{{lis.name}}<img src="../../assets/箭头1.png" alt="" class="jt4"></span>

      </div>
      </router-link>















    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  let api33="http://cangdu.org:8001/v3/profile/explain"
  export default {
    name: "Service",
    data(){
      return{
        txts:""
      }
    },
    created(){
      Vue.axios.get(api33).then((response)=>{
        function dealjson(obj) {
          var arr = []
          var Jsonarr = []
          let object = {}
          for (var key in obj) {
            arr.push(obj[key]); //属性
          }
          for (let i = 0; i < arr.length; i++) {
            if (i % 2 != 0) {
              object.name = arr[i]
              Jsonarr.push(object)
              object = {}
            } else {
              object.des = arr[i]
              object.id = i
            }
          }
          var one = Jsonarr.slice(0, 13)
          var two = Jsonarr.slice(13, 23)
          for (let j = 0; j < two.length; j++) {
            [two[j].des, two[j].name] = [two[j].name, two[j].des]
          }
          var three = one.concat(two)
          three.splice(12, 1)
          three.splice(4, 1)
          return three
        }
        this.txts=dealjson(response.data)
        console.log(dealjson(response.data))
      })
    }
  }
</script>

<style scoped>
  .head {
    width: 100%;
    /*height: 28.45rem;*/
    background: #fff;
    /*overflow: hidden;*/
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
    margin-left: 6rem;
    font-size: .8rem;
    color: #fff;
  }

  #kf {
    width: 1rem;
    margin-top: 0.7rem;
    /*margin-left: 3.5rem;*/
  }

  .kf1 {
    display: inline-block;
    width: 50%;
    border-bottom: 0.043rem solid #f5f5f5;
    text-align: center;
  }

  #zaix {
    display: block;
    /*margin-left: 2.2rem;*/
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
    font-size: .4rem;
  }

  #tel {
    width: 1rem;
    margin-bottom: 0.5rem;
    /*margin-left: 3.5rem;*/
    margin-top: 0.7rem;
  }

  .zxkf {
    width: 49.7%;
    display: inline-block;
    /*height:3.75rem;*/

    /*clear:both;*/
    position: absolute;
    top: 1.97rem;
    border-bottom: 0.043rem solid #f5f5f5;
    border-left: 0.043rem solid #f5f5f5;
    text-align: center;
  }

  #zaix1 {
    display: block;
    /*margin-left: 2.2rem;*/
    margin-bottom: 0.8rem;
    font-size: .4rem;
  }

  .jt4 {
    width: 0.467rem;
    float: right;
  }

  .s4 {
    display: inline-block;
    padding: 0.5rem 0.8rem 0.5rem 1rem;
    vertical-align: top;
    /*margin-top: 0.5rem;*/
    width: 90%;
    border-bottom: 0.0427rem solid #f1f1f1;
  }

  .a1 {
    font-size: 0.6rem;
    font-weight: 300;
    color: #333;
  }
  .prob{
    padding: 1rem 0 1rem 0.5rem;
    border-bottom: 0.0427rem solid #f1f1f1;
  }
</style>
