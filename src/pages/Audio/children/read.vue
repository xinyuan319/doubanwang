<template>
  <div>
    <!--read-->
    <div class="clear">
      <h3 class="left">新书速递</h3>
      <h3 class="right">全部43></h3>
    </div>
    <div class="aa">
      <div class="clear">
        <div class="left">
          <img src="../../../assets/img/300.jpg"/>
        </div>
        <div class="left aa_1">
          <p>你的孤独，虽败犹荣</p>
          <p>4054人想看/刘同</p>
        </div>
      </div>
      <div class="aa_2">
        <p>
          《你的孤独 虽败犹荣》是2014年由中信出版社出版的图书，
          作者是刘同本书用33个真实动人的故事，讲述33种形式各异但又直抵内心的孤独。
          用最温暖的笔触诉说：孤独不是失败，它是自己与自己相处与对话最好的时光。
        </p>
      </div>
    </div>
    <div class="clear">
      <h3 class="left">豆瓣榜单</h3>
      <h3 class="right">全部3></h3>
    </div>
    <div class="bb">
      <h2>虚构类热门榜</h2>
      <ol>
        <li>
          <div class="clear">
            <div class="bb_1 left">
              <img src="../../../assets/img/shu (1).jpg"/>
            </div>
            <div class="bb_2 left">
              <p>边城</p>
              <p><img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_xsmall_gray.png"/>8.8</p>
            </div>
          </div>
        </li>
        <li>
          <div class="clear">
            <div class="bb_1 left">
              <img src="../../../assets/img/shu (2).jpg"/>
            </div>
            <div class="bb_2 left">
              <p>鞋带</p>
              <p><img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_xsmall_gray.png"/>8.2</p>
            </div>
          </div>
        </li>
        <li>
          <div class="clear">
            <div class="bb_1 left">
              <img src="../../../assets/img/shu (3).jpg"/>
            </div>
            <div class="bb_2 left">
              <p>银河系边缘的小失常</p>
              <p><img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_xsmall_gray.png"/>8.1</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
    <div class="bb">
      <h2>豆瓣排行榜</h2>
      <ol>
        <li>
          <div class="clear">
            <div class="bb_1 left">
              <img src="../../../assets/img/shu (1).jpg"/>
            </div>
            <div class="bb_2 left">
              <p>边城</p>
              <p><img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_xsmall_gray.png"/>8.8</p>
            </div>
          </div>
        </li>
        <li>
          <div class="clear">
            <div class="bb_1 left">
              <img src="../../../assets/img/shu (2).jpg"/>
            </div>
            <div class="bb_2 left">
              <p>鞋带</p>
              <p><img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_xsmall_gray.png"/>8.2</p>
            </div>
          </div>
        </li>
        <li>
          <div class="clear">
            <div class="bb_1 left">
              <img src="../../../assets/img/shu (3).jpg"/>
            </div>
            <div class="bb_2 left">
              <p>银河系边缘的小失常</p>
              <p><img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_small_on.png"/>
                <img src="../../../assets/images/rating_star_xsmall_gray.png"/>8.1</p>
            </div>
          </div>
        </li>
      </ol>
    </div>



  </div>

</template>

<script>
    export default {
        name: "read",
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
  .aa{
    width: 90%;
    padding: 10px;
    border: 1px solid #EBEBEB;
    border-radius: 5px;
    margin-left: 20px;
  }
  .aa img{
    width: 80px;
  }
  .aa_1{
    margin-left: 20px;
  }
  .aa_1 p:nth-of-type(1){
    font-size: 20px;
    font-weight:bolder;
  }
  .aa_1 p:nth-of-type(2){
    color: #828282;
  }
  .aa_2{
    width: 100%;
    border: 1px solid #EBEBEB;
    border-radius: 5px;
    background-color: #F7F7F7;
  }
  .aa_2 p{
    text-indent:2em;
    text-align: left;
  }
  .bb{
    border-radius: 5px;
    background-color: #4E4D2E;
    color: white;
  }
  .bb_1 img{
    width: 50px;
  }
  .bb_2{
    margin-left: 10px;
  }
  .bb_2 img{
    width: 20px;
  }
  .bb_2 p:nth-of-type(1){
    text-align: left;
  }
</style>
