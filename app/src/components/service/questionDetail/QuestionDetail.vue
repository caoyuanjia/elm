<template>
  <div>


    <div class="head_top">
    <router-link to="/service"><img src="../../../../src/assets/返回-2.png" alt="" id="fh"></router-link>

      <span class="qysm">{{$route.query.name}}</span>


    </div>
    <h3 class="spvip">{{$route.query.des}}</h3>
  </div>
</template>

<script>

    export default {
        name: "QuestionDetail",
        data(){
          return{
            num:this.$route.query.id
          }
        },
        created(){
          console.log(this.$route.query.id)
          // if (){
          //
          // }
        }
    }
</script>

<style scoped>
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
  /*.head_dw{*/
    /*margin-left: 5rem;*/
    /*font-size: .8rem;*/
    /*color: #fff;*/
  /*}*/
  .qysm{
    font-size: .8rem;
    color: #fff;
    margin-left: 5.4rem;
  }
  .spvip{
    padding: 0.2rem 1rem 0 1rem;
    line-height: 1.6rem;

    word-wrap:break-word;
  }
</style>
