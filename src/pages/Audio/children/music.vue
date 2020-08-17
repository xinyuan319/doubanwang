<template>
  <div>
    <!--music-->
    <div class="clear">
      <h3 class="left">热门单曲榜</h3>
      <h3 class="right">全部30></h3>
    </div>
    <img class="img1" src="../../../assets/img/yinyue.png"/>
    <div class="clear">
      <h3 class="left">新碟榜</h3>
      <h3 class="right">全部30></h3>
    </div>
    <ul class="aa">
      <li>
        <img src="../../../assets/img/yy (1).jpg"/>
        <p>成长小说</p>
        <p>海明森</p>
      </li>
      <li>
        <img src="../../../assets/img/yy (2).jpg"/>
        <p>麻雀</p>
        <p>李荣浩</p>
      </li>
      <li>
        <img src="../../../assets/img/yy (3).jpg"/>
        <p>歌颂</p>
        <p>王晰 Elvis Wang</p>
      </li>
    </ul>
    <br/>
    <br/>
    <br/>

  </div>

</template>

<script>
    export default {
        name: "music",
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
  .img1{
    width: 100%;
  }
  .aa ul{
    margin: 0px;
    padding: 0px;
  }
  .aa li{
    list-style-type: none;
    display: inline-block;
    margin-left: 20px;
  }
  .aa li img{
    width: 120px;
  }
  .aa li p:nth-of-type(1){
    color: #3e8f3e;
  }
  .aa li p:nth-of-type(2){
    color: #D4D4D4;
  }
</style>
