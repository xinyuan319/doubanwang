<template>
  <div>
    <!--city-->
    <div class="clear">
      <p class="left">当前城市：></p>
      <p class="right">类型 时间 地点：></p>
    </div>
    <div class="clear">
      <h3 class="left">热门活动</h3>
      <h3 class="right">全部19></h3>
    </div>
    <div class="aa">
      <ul>
        <li>
          <img src="../../../assets/img/tc (1).jpg"/>
          <p>随物生心Flow with Matter</p>
        </li>
        <li>
          <img src="../../../assets/img/tc (2).jpg"/>
          <p>《暗恋桃花源》专属版 上海站</p>
        </li>
        <li>
          <img src="../../../assets/img/tc (3).jpg"/>
          <p>谢欣《触不可及》| 极简舞蹈论</p>
        </li>
        <li>
          <img src="../../../assets/img/tc (4).jpg"/>
          <p>《回到民谣》双场音乐会</p>
        </li>
      </ul>
    </div>
    <div class="clear">
      <h3 class="left">官方售票</h3>
      <h3 class="right">全部14></h3>
    </div>
    <img class="img1" src="../../../assets/img/tongcheng.png"/>

  </div>

</template>

<script>
    export default {
        name: "city",
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
    text-align: left;
  }
  .aa ul li{
    margin-right: 10px;
    list-style-type: none;
    display: inline-block;
  }
  .aa ul li p{
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .aa img{
    width: 100px;
  }
  .img1{
    width: 100%;
  }
</style>
