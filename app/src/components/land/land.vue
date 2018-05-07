<template>
<div>
  <div class="c_top">
    <span style="float: left"><</span>
    <span style="margin-left: -15px">密码登录</span>
    <div class="c_con">
      <div class="c_input">
        <input type="text" placeholder="账号" style="font-size: .7rem" v-model="username">
      </div>
      <div class="c_input">
        <input class="inp" type="password" placeholder="密码" style="font-size: .7rem" v-model="password">
        <div class="c_touch">
          <div class="c_scroll" @click="cli"></div>
          <span class="span1">abc</span>
          <span class="span2">...</span>
        </div>
      </div>
      <div class="c_input">
        <input type="text" placeholder="验证码" style="font-size: .7rem" v-model="yzm">
        <ul>
          <li>
            <img :src="pic" alt="" class="photo">
          </li>
        </ul>
        <div class="chang_img">
          <p style="color: #666;font-size: .55rem">看不清</p>
          <p style="color: #3b95e9;font-size: .55rem;margin-top: .3rem" class="chang" @click="change">换一张</p>
        </div>
      </div>
    </div>
    <div class="c_tishi">
      <p>
        温馨提示：未注册过的账号，登录时将自动注册
      </p>
      <p>
        注册过的用户可凭账号密码登录
      </p>
    </div>
    <div class="btn" @click="login">
      登录
    </div>

    <router-link to="changePassword">
      <a href="#">重置密码？</a>
    </router-link>
  </div>
  <div class="wenti" v-if="orshow">
    <div class="perblem">
      <span class="perblem1"></span>
      <span class="perblem2"></span>
    </div>
    <p class="perblem_text">请输入手机号/邮箱/用户名</p>
    <div class="perblem_ok">确认</div>
  </div>

</div>
</template>

<script>
  import Vue from "vue";
  let api1="http://cangdu.org:8001/v1/captchas"
    export default {

        name: "Land",
        data(){
            return{
              pic:"",
              username:"",
              password:"",
              yzm:"",
              orshow:false
            }
        },
        methods:{
          cli(){
            var scroll = document.getElementsByClassName("c_scroll")[0]
            var c_touch = document.getElementsByClassName("c_touch")[0]
            var inp = document.getElementsByClassName("inp")[0]
            var left1 = scroll.offsetLeft
            console.log(left1);
            // scroll.style.left = "0.8rem"
            if(left1 == "-7"){
              scroll.style.left = "0.8rem"
              c_touch.style.backgroundColor = "#4cd964"
              inp.type = "text"
            }else{
              scroll.style.left = "-0.3rem"
              c_touch.style.backgroundColor = "#ccc"
              inp.type = "password"
            }
          },
          change(){
            var photo = document.getElementsByClassName("photo")[0]
            Vue.axios.post(api1).then((response) => {
              console.log(response.data)
              this.pic=response.data.code
            })
            photo.src = this.pic
          },
          login(){
            if(this.username==""||this.password==""||this.yzm==""){
              console.log("有问题")
              this.orshow = true
            }
          }
        },
      created(){
        //this和Vue都可以
        //this.$http.get(api)….
        Vue.axios.post(api1).then((response) => {
          console.log(response.data)
          this.pic=response.data.code
        })
      }
    }
</script>

<style scoped>

  .perblem perblem2{
    width: .2rem;
    height: .2rem;
    border: 1px;
    border-radius: 50%;
    margin-top: .2rem;
    background-color: #f8cb86;
  }




  img{
    width: 3.5rem;
    height: 1.5rem;
    margin-right: .2rem;
  }
  body,html{
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
  }
  .c_con{
    margin-top: 1rem;
  }
  .c_top{
    position: fixed;
    width: 100%;
    height: 1.95rem;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: #3190e8;
  }
  span{
    margin-left: 10px;
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    line-height: 1.95rem;
  }
  input:focus{
    outline: none;
  }
  .c_input{
    border: 0;
    outline:none;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
    font-size: .7rem;
  }

  /*密码点击选择*/
  .c_touch{
    background-color: #ccc;
    display: flex;
    justify-content: center;
    width: 1.6rem;
    height: .7rem;
    padding: 0 .2rem;
    border: 1px;
    border-radius: .5rem;
    position: relative;

  }

  .c_touch .span1{
    margin-left: -.1rem;
    line-height: .7rem;
    font-size: .5rem;
  }

  .c_touch .span2{
    margin-left: .01rem;
    line-height: .55rem;
    font-size: .5rem;
  }
  .c_input .c_scroll{
    transition: all .3s;
    position: absolute;
    top: -.2rem;
    z-index: 1;
    left: -.3rem;
    width: 1.2rem;
    height: 1.2rem;
    box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0,0,0,.1);
    background-color: #f1f1f1;
    border-radius: 50%;
  }

  .c_tishi p{
    font-size: .5rem;
    color: red;
    padding: .4rem .6rem;
    line-height: .5rem;
    float: left;
  }

  .btn{
    margin: 3rem .5rem 1rem;
    font-size: .7rem;
    color: #fff;
    background-color: #4cd964;
    padding: .5rem 0;
    border: 1px;
    border-radius: .15rem;
    text-align: center;
  }
  a{
    float: right;
    font-size: .6rem;
    color: #3b95e9;
    margin-right: .3rem;
  }
</style>
