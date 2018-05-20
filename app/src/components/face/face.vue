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
    <ul v-for="message in messages">
      <router-link :to="{path:'/effect',query:{id:message.id,name:message.name,url:message.image_path}}">
        <li class="c_list">
          <div class="bottom_img">
            <img :src="'//elm.cangdu.org/img/'+message.image_path
" class="shop_img">
          </div>
          <div>
            <header style="display: flex;justify-content: space-between;align-items: center;
}">
              <h4 class="c_h4">
                <span class="c_pinpai" style="font-weight: bolder;color: #333">品牌</span>
                <span style="font-weight: bolder;color: #333;font-size: .7rem">{{message.name}}</span>
              </h4>
              <ul class="c_middle">
                <li>保</li>
                <li>准</li>
                <li>票</li>
              </ul>
            </header>
            <h5 class="c_h51">
              <div class="star">
                <el-rate
                  v-model="message.rating"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </div>
              <div class="span1">月售106单</div>
              <div class="span2">蜂鸟专送</div>
              <div class="span3">准时达</div>
            </h5>
            <h5>
              <p class="p1">
                ￥20起送/配送费约￥5
              </p>
              <div class="c_div">
              <span>
                {{message.distance}} /
              </span>
                <span style="color: #3190e8">
                {{message.order_lead_time}}
              </span>
              </div>
            </h5>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</div>


</template>

<script>
  import Vue from 'vue';
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  let api2 ='http://cangdu.org:8001/v2/index_entry';
  let api6 = 'http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762\n' + '\n';
    export default {
      name: "face",
      data(){
        return{
          duixiang:[],
          count:[],
          shuju:[],
          value5: 4.7,
          messages:""
        }
      },
      mounted(){
        setTimeout(function () {
          new Swiper('#swiper', {
            loop: true,
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
          // console.log(response.data)
          this.duixiang = response.data.slice(0,8)
          // this.count = this.duixiang.unshift(this.duixiang[0])
          // console.log(this.duixiang)
          this.shuju = response.data.slice(8)
          // console.log(this.shuju)
        })
        Vue.axios.get(api6).then((response)=>{
          console.log(response.data)
          this.messages = response.data
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
    margin-top: 60px;
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
    padding: .7rem .4rem 1.1rem;
  }
  .c_middle{
    display: flex;
    transform: scale(.8);
    margin-right: -.3rem;
    margin-left: 1.8rem;
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
    font-weight: bolder;
    text-align: left;
    margin-top: -.4rem;
  }
  .c_h51{
    display: flex;
    justify-content: space-between;
    height: .6rem;
    /*margin-top: .52rem;*/
    margin-top: -.1rem;
  }
  .star{
    display: flex;
    justify-content: flex-start;
    transform: scale(0.6);
    /*margin-left: -1.1rem;*/
    position: absolute;
    left: 2.3rem;
  }
  .c_h51 .span1{
    width: 2.5rem;
    transform: scale(0.8);
    font-size: .2rem;
    color: #666;
    position: absolute;
    left: 7rem;
    margin-top: .2rem;
  }
  .c_h51 .span2{
    width: 2.1rem;
    height: .6rem;
    transform: scale(0.8);
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    font-size: .4rem;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
    position: absolute;
    right: 1.6rem;
    /*margin-top: -.02rem;*/
  }
  .c_h51 .span3{
    color: #3190e8;
    border: .025rem solid #3190e8;
    width: 1.7rem;
    height: .6rem;
    border-radius: .08rem;
    transform: scale(0.8);
    position: absolute;
    right: .2rem;
    /*margin-right: -2rem;*/
  }
  .p1{
    transform: scale(.9);
    font-size: .5rem;
    color: #666;
    position: absolute;
    left: 3.5rem;
    margin-top: .8rem;
  }
  .c_div{
    transform: scale(.9);
    font-size: .5rem;
    position: absolute;
    right: .3rem;
    margin-top: .2rem;
  }
</style>
