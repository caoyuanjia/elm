<template>
  <div>
    <ul style="position: fixed; z-index: 10;" class="topBar">
      <li class="c_list" :style="'background:url('+pic+') 0% 0% / cover no-repeat'">
        <div class="top_img">
          <img :src="'//elm.cangdu.org/img/'+$route.query.url" alt="" class="head_img">
        </div>
        <div class="c_text">
          <header style="display: flex;justify-content: space-between;align-items: center;
}">
            <h4 class="c_h4">
              <span style="font-weight: bolder;font-size: .7rem">{{$route.query.name}}</span>
            </h4>
          </header>
          <h5 class="c_h51">
            <div class="span1">商家配送 /</div>
            <div class="span2">分钟送达 /</div>
            <div class="span3">配送费￥5</div>
          </h5>
          <h5>
            <p class="p1">
              公告：欢迎光临，用餐高峰期请提前下单，谢谢
            </p>
          </h5>
        </div>
      </li>
      <div class="biaoti" style="background-color: white;">
        <div class="c_div1">
          <span>商品</span>
        </div>
        <div class="c_div2">
          <span>评价</span>
        </div>
      </div>
    </ul>

    <div class="c_bottom" style="position: absolute; top: 6.23rem;">
      <div class="c_shangpin">
        <div class="c_list2">
          <ul class="c_ul">
            <li @click="listClick" class="c_change" v-bind:class="{change:cl}" v-for="(list,index) in lists">
              <img :src="list.icon_url" class="hot" v-if="!list.icon_url==0">
              <span>{{list.name}}</span>
            </li>
          </ul>
        </div>
        <div class="c_right" ref="bbb">
          <ul  v-for="list in lists" ref="aaa">
            <div class="list_head">
              <div>
                <strong>{{list.name}}</strong>
                <span class="span4">大家喜欢吃，才是真的好吃。</span>
              </div>
              <span class="span5">...</span>
            </div>

            <li class="c_list2" v-for="food in list.foods" >

              <div id="c_ringt_list">
                <div class="list_shangpin">
                  <div class="list_img">
                    <img :src="'//elm.cangdu.org/img/'+food.image_path" class="head_img">
                  </div>
                  <div class="list_text">
                    <header style="display: flex;justify-content: space-between;align-items: center;
}">
                      <h4>
                        <span style="font-weight: bolder;font-size: .7rem">{{food.name}}</span>
                      </h4>
                    </header>
                    <h5 class="c_h51">
                      <div>食品详情</div>
                    </h5>
                    <h5>
                      <p>
                        月销{{food.month_sales }}份 好评率{{food.satisfy_rate }}%
                      </p>
                    </h5>
                    <p class="c_ringt_p" v-if="food.activity">
                      {{food.activity.image_text}}
                    </p>
                  </div>

                </div>
                <div class="list_bottom">
                  <div class="list_bottom_1">
                    <span class="c_span1">￥</span>
                    <span class="c_span2">20</span>
                    <span class="c_span3">起</span>
                  </div>
                  <span class="c_span4">选规格</span>
                </div>
              </div>

            </li>
          </ul>
        </div>
        <div class="by_car">
          <div>
            <div>
              <svg data-v-c8684834="" class="cart_icon"><use data-v-c8684834="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-icon"></use></svg>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var c_change = document.getElementsByClassName("c_change")
  var span = document.getElementById("span")
  var c_ul = document.getElementsByClassName("c_ul")
  var c_right = document.getElementsByClassName("c_right")[0]
  import Vue from 'vue';
  export default {
    data(){
      return{
        lists:"",
        line:'/',
        str2:[],
        cl:false,
        pic:""
      }
    },
    name: "effect",
    mounted(){
      window.addEventListener("scroll",this.scrolldiv)
    },
    methods:{
      listClick(ev,index){

        for (var i=0;i<c_change.length;i++){
          c_change[i].style="background:#f5f5ff5"
          if (ev.target==c_change[i]){
            ev.target.style = "background:white"
          }else{
            ev.target.parentNode.style = "background:white"
          }
        }
        var x= this.$refs.aaa[1].offsetTop
        console.log(x)
        console.log(ev.target.parentNode)
        console.log(c_change)
        for (let i=0;i<c_change.length;i++){
          if (ev.target==c_change[i]){
            console.log(this.$refs.bbb)
            this.$refs.bbb.style.top = -this.$refs.aaa[i].offsetTop+'px'
            console.log(i)
          }
        }
      },
      scrolldiv(){
        var x= this.$refs.aaa[1].offsetTop
        console.log(window.scrollY)
        console.log(x)
        console.log(this.$refs.aaa.length)
        for(var i=0;i<this.$refs.aaa.length;i++){
          c_ul[0].childNodes[i].style = "background:#f5f5f5;"
          if(window.scrollY>=this.$refs.aaa[i].offsetTop && window.scrollY<=this.$refs.aaa[i+1].offsetTop){
            // console.log(c_ul[0].childNodes[1].parentNode)
            c_ul[0].childNodes[i].style = "background:white"
          }
        }
      }
    },

    created(){
      console.log(this.$route.query.url)
      this.pic=`//elm.cangdu.org/img/${this.$route.query.url}`
      let api16 = 'http://cangdu.org:8001/shopping/v2/menu?restaurant_id='+this.$route.query.id;
      console.log(api16)
      Vue.axios.get(api16).then((response)=>{
        console.log(response.data)
        console.log(response.data[0].foods.length)
        this.lists = response.data;
        console.log(this.lists)
        console.log(this.lists.length)



        function addLine(str,line) {
          var temp = ""
          var tep1 = str.substring(0,1)
          temp += tep1+line
          var temp2 = str.substring(1,3)
          temp += temp2+line
          var temp3 = str.substring(3,str.length)
          temp += temp3
          return temp
        }
        function addSrc(str) {
          var hf = 'https://fuss10.elemecdn.com/'
          if (str.length==2){
            return 0
          }
          if(str.length==38){
            str +='.jpeg'
          }else{
            str +='.png'
          }
          return hf+str
        }

        for(var i=0;i<this.lists.length;i++){
          var str = this.lists[i].icon_url
          var str1 = addLine(str,this.line)
          this.str2 = addSrc(str1)
          this.lists[i].icon_url = addSrc(str1)
        }
      })
    }
  }

</script>

<style scoped>
  .c_right{
    position: absolute;
    width: 16rem;
  }
  * {
    box-sizing: border-box;
  }
  .topBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .c_ul::-webkit-scrollbar {
    display: none;
  }
  .c_ul{
    height: 22.5rem;
    overflow-y: scroll;
    position: fixed;
    top: 6rem;
    z-index: 1;
  }
  .c_right{
    padding: 0rem 0 0 4.5rem;
    /*margin-top: -.2rem;*/
  }

  .c_shangpin{
    display: flex;
  }
  .span1,.span2,.span3,.p1,.c_h4 span{
    color: white;
  }
  .c_list{
    display: flex;
    justify-content: space-around;
    padding: .5rem;
  }
  .head_img {
    width: 2.7rem;
    height: 2.7rem;
    display: block;
    margin-right: .4rem;
  }
  .c_h51{
    display: flex;
    margin: .55rem 0;
  }
  .biaoti{
    display: flex;
    justify-content: space-around;
    padding: .8rem .6rem;
    border-bottom: 1px solid #ebebeb;
  }
  .c_div1{
    flex: 1;
    text-align: center;

  }
  .c_div1 span{
    padding: .2rem .1rem;
    border-bottom: .12rem solid #3190e8;
    color: #3190e8;
  }
  .c_div2{
    flex: 1;
    text-align: center;
  }
  .c_div2 span{
    padding: .2rem .1rem;
    border-bottom: .12rem solid #fff;
  }
  .hot{
    width: .8rem;
    height: .9rem;
    vertical-align: middle;
  }
  .youhui{
    width: .6rem;
    height: .8rem;
    vertical-align: bottom;
  }
  /*.c_list2{*/
    /*display: flex;*/
    /*justify-content: space-between;*/
  /*}*/
  /*.c_ul li:nth-of-type(1){*/
    /*text-align: left;*/
  /*}*/
  .c_ul li{
    background-color: #f5f5f5;
    padding: .9rem .5rem;
    border-bottom: .025rem solid #ededed;
    box-sizing: border-box;
    position: relative;
    text-align: left;
    width: 4.5rem;
  }
  .list_head{
    background-color: #f5f5f5;
    padding: 1rem .99rem;
    position: relative;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  .list_head strong{
    font-size: .7rem;
    color: #666;
    font-weight: 700;
  }
  .list_head .span4{
    font-size: .5rem;
    color: #999;
    width: 30%;
    overflow: hidden;
  }
  .list_shangpin{
    display: flex;
  }
  .c_ringt_p{
    color: rgb(241,136,79);
    border: 1px solid rgb(240,115,115);
    font-size: .3rem;
    border-radius: .3rem;
    padding: .08rem;
    display: inline-block;
    transform: scale(.8);
    /*margin-left: -4.3rem;*/
    margin-top: .2rem;
    /*float: left;*/
    /*text-align: left;*/
  }
  .list_text{
    overflow: hidden;
    text-align: left;
  }
  .list_bottom .c_span1{
    font-size: .5rem;
    color: #f60;
    margin-right: .05rem;
  }
  .list_bottom .c_span2{
    font-size: .7rem;
    color: #f60;
    font-weight: 700;
    /*margin-right: .3rem;*/
  }
  .list_bottom .c_span3{
    font-size: .5rem;
    color: #666;
  }
  .list_bottom .c_span4{
    /*display: block;*/
    font-size: .5rem;
    color: #fff;
    padding: .2rem .2rem;
    background-color: #3190e8;
    border-radius: .2rem;
    border: 1px solid #3190e8;
    position: absolute;
    right: 1rem;
    margin: -1rem -.5rem 0 0;
  }
  .list_bottom_1{
    margin: .5rem 0 0 -2rem;
  }
  #c_ringt_list{
    border: 1px solid #f8f8f8;
    padding: .4rem 0 .6rem .4rem;
  }
</style>
