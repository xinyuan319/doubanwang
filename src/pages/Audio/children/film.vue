<template>
  <div>
    <!--film-->
    <div class="clear aa">
      <h3 class="left">影院热映</h3>
      <h3 class="right">更多></h3>
    </div>
    <div class="bb">
      <ul>
        <li>
          <img src="../../../assets/img/350 (0).jpg"/>
          <p>猎狐</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>7.5
          </p>
        </li>
        <li>
          <img src="../../../assets/img/350 (1).jpg"/>
          <p>致我们甜甜的小美满</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>7.8
          </p>
        </li>
        <li>
          <img src="../../../assets/img/350 (2).jpg"/>
          <p>清平乐</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>7.7
          </p>
        </li>
        <li>
          <img src="../../../assets/img/350 (3).jpg"/>
          <p>最后的搬山道人</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>8.5
          </p>
        </li>
      </ul>
    </div>
    <div class="cc">
      <img src="../../../assets/img/zhu1.png"/>
      <h2>“康熙”合体，小S放飞自我，白眼怒怼恶评</h2>
    </div>

    <div class="clear aa">
      <h3 class="left">院线即将上映</h3>
      <h3 class="right">更多></h3>
    </div>
    <div class="bb">
      <ul>
        <li>
          <img src="../../../assets/img/350 (4).jpg"/>
          <p>我是余欢水</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>7.5
          </p>
        </li>
        <li>
          <img src="../../../assets/img/350 (5).jpg"/>
          <p>龙岭迷窟</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>7.8
          </p>
        </li>
        <li>
          <img src="../../../assets/img/350 (6).jpg"/>
          <p>天空城2</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>7.7
          </p>
        </li>
        <li>
          <img src="../../../assets/img/350 (7).jpg"/>
          <p>如果岁月可回头</p>
          <p>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_small_on.png"/>
            <img src="../../../assets/images/rating_star_xsmall_gray.png"/>8.5
          </p>
        </li>
      </ul>
    </div>
    <div class="cc">
      <img src="../../../assets/img/zhu1.png"/>
    </div>
  </div>

</template>

<script>
    export default {
        name: "film",
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
  .aa h3:nth-of-type(2){
    color: #46C156;
  }
  ul li{
    list-style-type: none;
    display: inline-block;
  }
  .bb img:nth-of-type(1){
    width: 100px;
  }
  .bb p:nth-of-type(2) img{
    width: 13px;
  }
  .bb ul{
    margin: 0px;
    padding: 0px;
  }
  .bb ul li{
    width: 120px;
  }
  .bb ul li p:nth-of-type(1){
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .cc img{
    width: 100%;
  }
</style>
