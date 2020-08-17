<template>
  <div>
    <!--group-->
    <toubu>
      <span slot="text">小组</span>
      <img slot="img1" src="@/assets/images/ic_actionbar_search_icon.png">
      <img slot="img2" src="@/assets/images/ic_chat_green.png">
    </toubu>
    <div class="aa">
      <h1>418832个小组等你来玩</h1>
      <span>立即选择加入吧！</span>
    </div>
    <img class="bb" src="../../assets/img/zhu3.png"/>
    <div class="aa">
      <h2>影视</h2>
    </div>
    <div class="cc clear">
      <div class="left">
        <img src="../../assets/img/350 (0).jpg"/>
      </div>
      <div class="left">
        <h2>佳片推荐（只迷电影）</h2>
        <span>
          加入豆瓣人数最多的影视组织，互相
          推荐和交流自认为好的电影、剧集、
        </span>
      </div>
      <div class="left">
        <img src="../../assets/images/ic_group_check_anonymous.png"/>
      </div>
    </div>
    <div class="cc clear">
      <div class="left">
        <img src="../../assets/img/350 (1).jpg"/>
      </div>
      <div class="left">
        <h2>The Criterion Collection</h2>
        <span>
          加入豆瓣人数最多的影视组织，互相
          推荐和交流自认为好的电影、剧集、
        </span>
      </div>
      <div class="left">
        <img src="../../assets/images/ic_group_check_anonymous.png"/>
      </div>
    </div>
    <div class="cc clear">
      <div class="left">
        <img src="../../assets/img/350 (2).jpg"/>
      </div>
      <div class="left">
        <h2>老友记</h2>
        <span>
          加入豆瓣人数最多的影视组织，互相
          推荐和交流自认为好的电影、剧集、
        </span>
      </div>
      <div class="left">
        <img src="../../assets/images/ic_group_check_anonymous.png"/>
      </div>
    </div>




  </div>
</template>

<script>
  import toubu from '../../components/toubu'

  export default {
    name: "audio",
    components:{
      toubu
    }
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
    width: 100%;
    text-align: center;
  }
  .bb{
    width: 100%;
  }
  .cc img:nth-of-type(1){
    width: 80px;
    height: 80px;
    margin-top: 27px;
  }
  .cc div:nth-of-type(2){
    width: 60%;
  }
</style>
