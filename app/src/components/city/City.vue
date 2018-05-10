<template>
  <div class="head">
    <div class="head_top">
      <router-link to="/home"><img src="../../../src/assets/返回-2.png" alt="" id="fh"></router-link>

      <span class="head_dw">{{citys}}</span>

      <router-link to="/home"><span class="qhcs">切换城市</span></router-link>
    </div>
    <form class="head_tj">
      <input type="text" placeholder="输入学校、商务楼、地址" class="srxx" v-model="message" required="required">


      <input type="submit" value="提交" class="tjcs" @click="msg" >
    </form>
      <ul  v-if="tj">
        <li id="bd" v-for="why in what" v-if="tj">
          <h4 id="name">{{why.name}}</h4>
          <br>
          <p id="add">{{why.address}}</p>

        </li>
      </ul>

    <div class="ssls">
      <span>搜索历史</span>

    </div>


  </div>
</template>

<script>
  var val = document.getElementsByClassName("srxx").value;

  import Vue from "vue"

  export default {
    name: "City",
    data() {
      return {
        citys: "",
        message: "",
        what: '',
        id:"",
        tj:false
      }
    },
    created() {
      // console.log(this.message);
      this.id=this.$route.query.id
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

    },

    methods: {
      msg() {

        if (this.message==""){
          this.tj=0

        }else {
          this.tj = true
          let api3 = "http://cangdu.org:8001/v1/pois?city_id=" + this.$route.query.id + "&keyword=" + this.message + "&type=search"
          Vue.axios.get(api3).then((response) => {
            console.log(response.data);
            this.what = response.data;

            //   $("#bd").style.display=inline
          })
        }

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
  }

  .head_dw {
    margin-left: 6rem;
    font-size: .8rem;
    color: #fff;
  }

  .qhcs {
    float: right;
    margin-right: 0.6rem;
    margin-top: 0.65rem;
    font-size: .6rem;
    color: #fff;
    font-weight: 100;
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

  #bd {
    /*width: 50%;*/
    /*height: 1rem;*/
    background: #fff;
    border-bottom: 0.043rem solid #e4e4e4;
    /*display: none;*/
  }
  #name{
    margin-left: 0.6rem;
    font-size: .65rem;
    width: 90%;
    padding-top: 0.6rem;
  }
  #add{
    width: 90%;
    margin-left: 0.6rem;
    font-size: 0.45rem;
    font-weight: 100;
    margin-bottom: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

</style>
