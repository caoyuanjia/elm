<template>
<div>
  <div class="c_top">
    <span style="float: left">
      <img src="../../assets/搜索.png" alt="">
    </span>
    <span>管城黄河科技学院(...</span>
    <router-link to="land">
      <span id="login">登录|注册</span>
    </router-link>
  </div>
  <div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <ul class="ul1" v-for="url1 in duixiang">
          <li class="li1">
            <img :src="'https://fuss10.elemecdn.com'+url1.image_url" alt="">
          </li>
          <li class="li1">
            {{url1.title}}
          </li>
        </ul>
      </div>

      <div class="swiper-slide">
        <ul v-for="(title2,index) in shuju" class="ul1">

          <li>
            <img :src="'https://fuss10.elemecdn.com'+title2.image_url" alt="">
          </li>
          <li>
            {{title2.title}}
          </li>
        </ul>
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" style="position: absolute; bottom: 0rem;"></div>
  </div>
  <div class="empty"></div>
  <div class="c_bottom">
    <header style="text-align: left">
      <img src="../../assets/wxb明星店铺.png" alt="" class="dianpu_img">
      <span>附近商家</span>
    </header>
    <ul>
      <li class="c_list">
        <div class="bottom_img">
          <img src="//elm.cangdu.org/img/16018a5c08533.jpeg" class="shop_img">
        </div>
        <div>
          <header style="display: flex;justify-content: space-between;align-items: center;
}">
            <h4 class="c_h4">
              <span class="c_pinpai">品牌</span>
              <span>效果演示</span>
            </h4>
            <ul class="c_middle">
              <li>保</li>
              <li>准</li>
              <li>票</li>
            </ul>
          </header>
          <h5 c_h51>
            <div style="display: flex;justify-content: flex-start;">
              <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
            </div>
            <span>月销售106单</span>
            <span>蜂鸟专送</span>
            <span>准时达</span>
          </h5>
          <h5>
            <span>
              ￥20起送/配送费约￥5
            </span>
            <span>
              1437.5公里/
            </span>
            <span>
              18小时32分钟
            </span>
          </h5>
        </div>
      </li>
    </ul>
  </div>
</div>


</template>

<script>
  import Vue from 'vue';
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  let api2 ='http://cangdu.org:8001/v2/index_entry';

    export default {
      name: "face",
      data(){
        return{
          duixiang:[],
          count:[],
          shuju:[],
          value5: 4.7
        }
      },
      mounted(){
        setTimeout(function () {
          new Swiper('#swiper', {
            loop: true,
            // pagination: '.swiper-pagination',
            autoplay: 2000,
            paginationClickable: true,
            pagination: {
              el: '.swiper-pagination',
            },
          });
        }, 100)
      },
      methods:{

      },
      created(){
        Vue.axios.get(api2).then((response)=>{
          console.log(response.data)
          this.duixiang = response.data.slice(0,8)
          // this.count = this.duixiang.unshift(this.duixiang[0])
          console.log(this.duixiang)
          this.shuju = response.data.slice(8)
          console.log(this.shuju)
        })
      }
    }

</script>

<style scoped>
  .empty{
    width: 100%;
    height: 0.5rem;
    background-color: #f5f5f5;
  }
  #swiper{
    padding-bottom: 1rem;
    margin-top: -0.5rem;
  }
  .c_top{
    position: fixed;
    width: 100%;
    height: 1.95rem;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: #3190e8;
    display: flex;
    justify-content: space-between;
  }
  span{

    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    line-height: 1.95rem;
  }
  .c_top img{
    width: 0.9rem;
    margin: 0.5rem 0 0.5rem 0.9rem;
  }
  #login{
    font-size: .65rem;
    margin-right: 0.5rem;
  }
  .ul1 img{
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.5rem;
  }
  .ul1{
    display: inline-block;
    width: 25%;
    font-size: 0.55rem;
  }

  .dianpu_img{
    width: 0.6rem;
    margin-left: .6rem;
    vertical-align: middle;
  }
  .c_bottom span{
    color: #999;
    font: .55rem/1.6rem Microsoft YaHei;
  }
  .shop_img{
    width: 2.7rem;
    height: 2.7rem;
    display: block;
    margin-right: .4rem;
  }
  .c_pinpai{
    /*display: inline-block;*/
    background-color: #ffd930;
    color: #333;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }
  .c_list{
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .7rem .4rem;
  }
  .c_middle{
    display: flex;
    transform: scale(.8);
    margin-right: -.3rem;
  }
  .c_middle li{
    font-size: .5rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    padding: 0 .04rem;
    border-radius: .08rem;
    margin-left: .05rem;
  }
  .c_h4{
    width: 8.5rem;
    color: #333;
    padding-top: .01rem;
    font: .65rem/.65rem PingFangSC-Regular;
    font-weight: 700;
  }
  .c_h51{
    display: flex;
    justify-content: space-between;
    height: .6rem;
    margin-top: .52rem;
  }
</style>
