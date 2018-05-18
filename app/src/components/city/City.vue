<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/home"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>
      <div class="head_dw">
        <p class="sss">{{citys}}</p>
      </div>
      <router-link to="/home"><span class="qhcs">切换城市</span></router-link>
    </div>
    <form class="head_tj">
      <input type="text" placeholder="输入学校、商务楼、地址" class="srxx" v-model="message" required="required" >
      <img src="../../assets/a.png" alt="" class="clear" v-if="show1" @click="dj1">

      <input type="submit" value="提交" class="tjcs" @click="msg">
    </form>
    <div class="ssls">
      <span>搜索历史</span>

    </div>
    <ul v-if="tj">
      <router-link to="/order">
        <li id="bd" v-for="why in what" @click="www(why)">
          <h4 id="name">{{why.name}}</h4>
          <br>
          <p id="add">{{why.address}}</p>
        </li>
      </router-link>
    </ul>
    <ul v-if="abc.length" class="ssnr"  v-show="ssnr">

      <router-link to="/order">
      <li id="bd1" v-for="abcz in abc" >
        <h4 id="name1">{{abcz.name}}</h4>
        <br>
        <p id="add1">{{abcz.address}}</p>
      </li>
      </router-link>
      <div class="qksy" @click="qk">清空所有</div>
    </ul>
    <div class="hbq"  v-show="hbq">很抱歉!无搜索结果</div>




  </div>
</template>

<script>

  import Vue from "vue"

  export default {
    name: "City",
    data() {
      return {
        citys: "",
        message: "",
        what: [],
        id: "",
        tj: false,
        num:[],
        abc:[],
        hbq:false,
        // ssnr:false
        ssnr:true
      }
    },
    computed:{
      show1(){
        if (this.message==""){
          return false
        } else if (this.message!=""){
          return true
        }
      }
    },

    created() {
      this.id = this.$route.query.id
      let api5 = "http://cangdu.org:8001/v1/cities/" + this.id
      Vue.axios.get(api5).then((response) => {
        //console.log(response.data.name)
        this.citys = response.data.name
      })
      //console.log(this.$route.query.id)
      //     let api3="http://cangdu.org:8001/v1/pois?city_id="+this.$route.query.id+"&keyword="+this.message+"&type=search"
      // Vue.axios.get(api3).then((response)=>{
      //    console.log(response.data)
      // })
      if (localStorage.getItem("one")){
        this.abc = JSON.parse(localStorage.getItem("one"));
      }

    },

    methods: {
      dj1(){
        this.message=""
      },
      msg() {
        if (this.message == "") {
          this.tj = false

        } else {
          this.tj = true
          let api3 = "http://cangdu.org:8001/v1/pois?city_id=" + this.$route.query.id + "&keyword=" + this.message + "&type=search"
          Vue.axios.get(api3).then((response) => {
             console.log(response.data);
            this.what = response.data;
            //if(response.data = ""){
              // var corl=document.getElementsByClassName("tjcs")
              // var val=corl.value;
              // var dv=document.getElementById("bd")
              // dv.innerHTML=val;
              // this.response.data="阿斯达大"
              // document.write(bd.push("hjkhkjh"))
            //}
            //   $("#bd").style.display=inline
            if (this.what.length==0){
              this.hbq=true
              this.ssnr=false
            }else{
              this.hbq=false
              this.ssnr=true
            }
          })
        }
        if (localStorage.getItem("one")){
          this.abc = JSON.parse(localStorage.getItem("one"));

        }



      },
      www(why){


        if (localStorage.getItem("one")){
          this.abc = JSON.parse(localStorage.getItem("one"));
          console.log(this.abc)
        }
        for (var i=0;i<this.abc.length;i++){
          if ( this.abc[i].name== why.name){
            return
          }
        }
        this.abc.push(why)


        localStorage.setItem("one",JSON.stringify(this.abc));

        console.log(this.abc);
      },
      qk(){
        console.log("asdasdasd")
          localStorage.clear()
        this.abc = []
      }

    }

  }
</script>

<style scoped>
  .head {
    width: 100%;
    height: 28.45rem;
    background: #f5f5f5;
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
    z-index: 200;
    position: absolute;
  }
  .sss {
    display: inline;
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    margin-top: 0.5rem;
  }
  .head_dw {
    /*margin-left: 5.7rem;*/
    font-size: .8rem;
    color: #fff;
    display: inline;

  }
  .qhcs {
    float: right;
    right: 0.6rem;
    top: 0.65rem;
    font-size: .6rem;
    color: #fff;
    font-weight: 100;
    position: absolute;

  }
  .srxx{
    font-size: .65rem;
    padding-left: 0.3rem;
  }
  .head_tj {
    margin-top: 0.6rem;
    width: 100%;
    height: 4.25rem;
    background: #fff;
    border-bottom: 0.043rem solid #e4e4e4;
    border-top: 0.043rem solid #e4e4e4;
  }
  .head_tj input {
    width: 14.2rem;
    height: 1.4rem;
    outline: none;
    border-radius: 0.1rem;
    margin-top: 0.5rem;
    border: 0.043rem solid #e4e4e4;
    margin-left: 0.9rem;
  }
  .tjcs {
    background: #3190e8;
    font-size: .65rem;
    color: #fff;

  }
  .ssls {
    border-bottom: 0.085rem solid #e4e4e4;
    border-top: 0.043rem solid #e4e4e4;
    width: 100%;
    height: 0.768rem;
    padding-bottom: .2rem;
  }
  .ssls span {
    font-size: .475rem;
    margin-left: .5rem;
    margin-bottom: 0.1rem;

  }
  #bd,#bd1 {
    /*width: 50%;*/
    /*height: 1rem;*/
    background: #fff;
    border-bottom: 0.043rem solid #e4e4e4;
    /*display: none;*/
  }
  #name,#name1 {
    margin-left: 0.6rem;
    font-size: .65rem;
    width: 90%;
    padding-top: 0.6rem;
    color: #333;
  }
  #add,#add1 {
    width: 90%;
    margin-left: 0.6rem;
    font-size: 0.45rem;
    font-weight: 100;
    margin-bottom: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #999;
  }
  .clear {
    position: absolute;
    right: 1.8rem;
    top: 3.2rem;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0.2rem 0 0 0.9rem;
    outline: none;
  }
  .qksy{
    background: #fff;
    text-align: center;
    font-size: .7rem;
    line-height: 2rem;
  }
  .hbq{
    font-size: .65rem;
    background: #fff;
    padding: 0.5rem;
    width: 93.5%;
    position: absolute;
    left: 0;
    top: 24.5%;
  }

</style>
