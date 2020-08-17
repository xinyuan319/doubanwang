<template>
  <div class="aa">
		<!--broadcast-->
    <toubu>
      <span slot="text">广播</span>
      <img slot="img1" src="@/assets/images/ic_status_search_user.png">
      <img slot="img2" src="@/assets/images/ic_chat_green.png">
    </toubu>
    <div class="clear bb">
      <div class="left">
        <img src="@/assets/img/zhu2.png"/>
      </div>
      <div class="left">
        <h1>发现有趣的人</h1>
        <p>关注他们，发现更大的世界</p>
      </div>
    </div>
    <div class="cc">
      <ul>
        <li>
          <div class="clear">
            <div class="left">
              <img src="../../assets/img/tou1.jpg" class="left"/>
              <div class="left">
                <h4>陈仓仓</h4>
                <p>53228人关注</p>
              </div>
            </div>
            <div class="right">
              <span>关注</span>
            </div>
          </div>
          <div class="cc_1">
            <p>我们没小孩的也很不容易啊!在家被
              别人的小孩吵，三天两头躲出去不就
              是为了图个清静吗!出门在外接着被
              各种熊孩子打扰，坐个飞机小孩喊-
              路坐个高铁小孩也嚎一路，很不容
              易! help!哭哭，我化妆我健身我努
              力维持体面，为什么这么多小孩不肯
              放过我
            </p>
            <p>
              <img class="img1" src="../../assets/images/ic_fill_voted_large.png"/>50
              <img class="img1" src="../../assets/images/ic_forum_topic_comment.png"/>29
            </p>
          </div>
        </li>
        <li>
          <div class="clear">
            <div class="left">
              <img src="../../assets/img/tou2.jpg" class="left"/>
              <div class="left">
                <h4>绿空</h4>
                <p>53228人关注</p>
              </div>
            </div>
            <div class="right">
              <span>关注</span>
            </div>
          </div>
          <div class="cc_1">
            <p>我们没小孩的也很不容易啊!在家被
              别人的小孩吵，三天两头躲出去不就
              是为了图个清静吗!出门在外接着被
              各种熊孩子打扰，坐个飞机小孩喊-
              路坐个高铁小孩也嚎一路，很不容
              易! help!哭哭，我化妆我健身我努
              力维持体面，为什么这么多小孩不肯
              放过我
            </p>
            <p>
              <img class="img1" src="../../assets/images/ic_fill_voted_large.png"/>50
              <img class="img1" src="../../assets/images/ic_forum_topic_comment.png"/>29
            </p>
          </div>
        </li>
        <li>
          <div class="clear">
            <div class="left">
              <img src="../../assets/img/tou3.jpg" class="left"/>
              <div class="left">
                <h4>白小白</h4>
                <p>53228人关注</p>
              </div>
            </div>
            <div class="right">
              <span>关注</span>
            </div>
          </div>
          <div class="cc_1">
            <p>我们没小孩的也很不容易啊!在家被
              别人的小孩吵，三天两头躲出去不就
              是为了图个清静吗!出门在外接着被
              各种熊孩子打扰，坐个飞机小孩喊-
              路坐个高铁小孩也嚎一路，很不容
              易! help!哭哭，我化妆我健身我努
              力维持体面，为什么这么多小孩不肯
              放过我
            </p>
            <p>
              <img class="img1" src="../../assets/images/ic_fill_voted_large.png"/>50
              <img class="img1" src="../../assets/images/ic_forum_topic_comment.png"/>29
            </p>
          </div>
        </li>
      </ul>
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
    background-color: #F7F7F7;
  }
  .bb img:nth-of-type(1){
    width: 150px;
    margin-left: 100px;
  }
  .cc ul li{
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: white;
    list-style-type: none;
  }
  .cc ul li img:nth-of-type(1){
    width: 50px;
    border-radius: 50%;
    margin-top: 18px;
  }
  .cc ul li p:nth-of-type(1){
    margin-top: 0px;
  }
  .cc ul li h4:nth-of-type(1){
    margin-bottom: 0px;
  }
  .cc ul li span:nth-of-type(1){
    color: white;
    display: inline-block;
    border: 1px solid #43C056;
    padding: 5px 30px;
    border-radius: 5px;
    background-color: #43C056;
  }
  .cc_1{
    margin-left: 50px;
    margin-right: 10px;
  }
  .cc_1 p:nth-of-type(2) .img1{
    width: 20px;
  }
</style>
