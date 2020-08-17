<template>
    <div>
      <!--home-->
      <!--导航栏-->
      <div class="row aa">
        <div class="col-xs-10 aa_1">
          <img src="../../assets/images/ic_group_search_small.png">
          <input type="text" placeholder="影视 图书 唱片 小组等"/>
        </div>
        <div class="col-xs-2 aa_2 text-right">
          <img src="../../assets/images/ic_scan_gray.png">
          <img src="../../assets/images/ic_chat_white.png">
        </div>
      </div>
      <!--轮播图-->
      <div class="row bb">
        <!-- 搭建 html 结构 -->
        <div class="swiper-container">
          <!-- 轮播图的主题内容 -->
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../assets/images/banner/01.jpg">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/banner/02.jpg">
            </div>
            <div class="swiper-slide">
              <img src="../../assets/images/banner/03.jpg">
            </div>
          </div>
          <!-- 分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!--热点-->
      <div class="row cc">
        <span></span>热点
      </div>
      <!--新闻列表-->
      <div v-for="(item, index) in arr">
        <div class="dd">
          <div class='left' >
            <h4>{{item.title}}</h4>
            <p>{{item.target.desc}}</p>
            <p class='author'>作者：{{item.target.author.name}}</p>
          </div>
          <img :src="item.target.cover_url"/>
        </div>
      </div>


    </div>
</template>

<script>
  import '../../assets/libs/swiper/js/swiper.js'
  import '../../assets/libs/swiper/css/swiper.css'

  export default {
    name: "Home",
    data:function(){
      return{
        arr:[]
      }
    },
    mounted:function () {
      this.initNewsList();
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 2000,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction:false,
      })
    },
    methods:{
      initNewsList:function () {
        this.axios.get("/static/data/homeData.json").then((res)=>{
          this.arr=res.data.recommend_feeds;
          console.log(this.arr);
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/libs/bootstrap/css/bootstrap.min.css";

  .clear:after{
    content: "";
    display: block;
    clear: both;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }


  .aa{
    padding: 10px;
    background-color: #43BD57;
  }
  .aa_1{
    width: 80%;
    padding: 5px;
    border-radius: 5px;
    background-color: #ffffff;
  }
  .aa_1 img{
    width: 20px;
  }
  .aa_1 input{
    width: 80%;
    border: none;
    outline: none;
  }
  .aa_2 img:nth-of-type(1){
    margin-top: 4px;
    width: 20px;
  }
  .aa_2 img:nth-of-type(2){
    margin-top: 4px;
    width: 24px;
  }
  .bb img{
    width: 100%;
    max-height: 250px;
  }
  .cc{
    padding: 5px;
  }
  .cc span{
    display: inline-block;
    width: 10px;
    height: 20px;
    background-color: #FFA602;
  }
  /*新闻列表*/
  .dd {padding: 20px; text-align: left; height: 150px; border-bottom: 1px solid #eee;}
  .dd img {width: 100px; height: 100px; float: right;}
  .dd .left {width: 65%; float: left;}
  .dd p {margin: 10px 0; color: #999; font-size: 14px;}
  .dd .author {color: #ccc; font-size: 12px;}
  .dd{cursor: pointer;}

</style>
