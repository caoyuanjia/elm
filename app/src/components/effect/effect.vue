<template>
  <div>
    <ul style="background: url('//elm.cangdu.org/img/16018a5c08533.jpeg');">
      <li class="c_list">
        <div class="top_img">
          <img src="//elm.cangdu.org/img/16018a5c08533.jpeg" class="head_img">
        </div>
        <div class="c_text">
          <header style="display: flex;justify-content: space-between;align-items: center;
}">
            <h4 class="c_h4">
              <span style="font-weight: bolder;font-size: .7rem">效果演示</span>
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
    </ul>
    <div class="biaoti">
      <div class="c_div1">
        <span>商品</span>
      </div>
      <div class="c_div2">
        <span>评价</span>
      </div>
    </div>
    <div class="c_bottom">
      <div class="c_shangpin">
        <div class="c_list2">
          <ul class="c_ul">
            <li>
              <img src="../../assets/热门.png" alt="" class="hot">
              <span>热销榜</span>
            </li>
            <li>
              <img src="https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg" class="youhui">&nbsp
              <span>优惠</span>
            </li>
            <li>饮料</li>
            <li>单点</li>
            <li>新品</li>
            <li>测试</li>
            <li>金辉</li>
            <li>黄哥</li>
          </ul>
        </div>
        <div class="c_right">
          <ul>
            <!--<li>-->
              <!--<header>-->
                <!--<strong>热销榜</strong>-->
                <!--<span>大家喜欢吃，才是真的好吃</span>-->
                <!--<span>...</span>-->
              <!--</header>-->
              <!--<div class="c_shangpin">-->
                <!--<div class="c_img">-->
                  <!--<img src="//elm.cangdu.org/img/16018a5c08533.jpeg" alt="">-->
                <!--</div>-->
                <!--<div class="c_txt">-->
                  <!--<div></div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="c_footer"></div>-->
            <!--</li>-->
            <li class="c_list">
              <div class="top_img">
                <img src="//elm.cangdu.org/img/16018a5c08533.jpeg" class="head_img">
              </div>
              <div class="c_text">
                <header style="display: flex;justify-content: space-between;align-items: center;
}">
                  <h4 class="c_h4">
                    <span style="font-weight: bolder;font-size: .7rem">效果演示</span>
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
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "effect"
  }
</script>

<style scoped>
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
    /*color: #3190e8;*/
    /*border-color: #3190e8;*/
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
  .c_list2{
    display: flex;
    justify-content: space-between;
  }
  /*.c_ul li:nth-of-type(1){*/
    /*text-align: left;*/
  /*}*/
  /*.c_ul li:nth-of-type(2){*/

  /*}*/
  .c_ul li{
    background-color: #f5f5f5;
    padding: .9rem .5rem;
    border-bottom: .025rem solid #ededed;
    box-sizing: border-box;
    position: relative;
    text-align: left;
  }
</style>
