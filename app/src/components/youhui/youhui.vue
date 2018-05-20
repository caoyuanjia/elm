<template>
    <div class="body">
      <div>
        <header class="c_head">
          <span class="c_span1"><</span>
          <span class="c_span2">
            <p>我的优惠</p>
          </span>
        </header>
        <div class="choice">
          <span class="c_span3">红包</span>
          <span class="c_span4">商家代金券</span>
        </div>
        <div class="txt">
          <header class="header">
            <div>
              有
              <span>3</span>
              个红包即将到期
            </div>
            <img src="" alt="">
            <div>红包说明</div>
          </header>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "youhui"
    }
</script>

<style scoped>
  .c_head{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }
  .c_span1{
    position: absolute;
    left: 0;
    color: white;
    line-height: 2rem;
    margin-left: .4rem;
  }
  .c_span2{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }
  .c_span2 p{
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .choice{
    height: 2rem;
    margin-top: 1.95rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #f5f5f5;
    font-size: .65rem;
  }
  .c_span3{
    border-bottom: 3px solid #3190e8;
    padding-bottom: .2rem;
  }
  .header{
    display: flex;
    justify-content: space-between;
  }
</style>
