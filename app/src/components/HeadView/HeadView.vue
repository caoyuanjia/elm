<template>
  <div class="header-view">
    <ul>
      <li v-for="title in headerTitles">
        <router-link :to="title.to">{{title.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HeaderView",
    data:function () {
      return{
        headerTitles:[{name:'ele.me',to:"/"},{name:'登录注册',to:"/land"}]
      }
    }
  }
</script>

<style scoped>
  .header-view{
    background: cornflowerblue;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /*padding: 20px 0;*/
  }

  /*效果图：750px的宽度：对应6s大小手机375（效果图的一半）
  效果图：html的奇数参考：16px，元素大小1rem*1rem
  实际中设置：html的奇数参考：16px元素大小.5rem*.5rem
  */
  .header-view ul{
    display: flex;
    justify-content: space-around;
    height: 0.55rem;
    align-items: center;
  }
  .header-view ul a{
    color: white;
    /*font-weight: bolder;*/
    font-size: 0.188rem;
  }
</style>
