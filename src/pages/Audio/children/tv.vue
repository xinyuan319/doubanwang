<template>
  <div>
    <!--tv-->
    <div class="clear">
      <h3 class="left">热播新剧</h3>
      <h3 class="right">全部277></h3>
    </div>
    <div class="aa">
      <ul>
        <li>综合</li>
        <li>国产剧</li>
        <li>英美剧</li>
        <li>日剧</li>
        <li>韩剧</li>
        <li>动画</li>
      </ul>
    </div>
    <div class="bb">
      <ul>
        <li>
          <img src="../../../assets/img/ds (1).jpg"/>
          <p>如此可爱的我们</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>6.9
          </p>
        </li>
        <li>
          <img src="../../../assets/img/ds (2).jpg"/>
          <p>琉璃</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>6.9
          </p>
        </li>
        <li>
          <img src="../../../assets/img/ds (3).jpg"/>
          <p>三十而已</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>6.9
          </p>
        </li>
        <li>
          <img src="../../../assets/img/ds (4).jpg"/>
          <p>雾山五行</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>6.9
          </p>
        </li>
      </ul>
    </div>
    <div class="cc clear">
      <div class="left">
        <h2>即将播出></h2>
        <p>近期有8部</p>
        <p>热门新剧</p>
      </div>
      <div class="right">
        <img src="../../../assets/img/ds (1).jpg"/>
        <img src="../../../assets/img/ds (2).jpg"/>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "tv",
        data: function () {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
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
  .aa ul{
    padding-left: 0px;
  }
  .aa ul li{
    list-style-type: none;
    display: inline-block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #EBEBEB;
    border-radius: 20px;
  }
  .aa ul li:nth-of-type(1){
    background-color: #6ACC7B;
    color: white;
    border: none;
  }
  .bb ul{
    padding-left: 0px;
  }
  .bb ul li{
    list-style-type: none;
    display: inline-block;
    text-align: left;
    margin-left: 20px;
  }
  .bb img:nth-of-type(1){
    width: 100px;
    height: 150px;
    border-radius: 2px;
  }
  .bb p:nth-of-type(2) img{
    width: 10px;
    height: 10px;
  }
  .cc{
    width: 90%;
    padding: 10px;
    border: 1px solid #EBEBEB;
    border-radius: 5px;
    margin-left: 20px;
  }
  .cc img{
    width: 100px;
    height: 150px;
  }
</style>
