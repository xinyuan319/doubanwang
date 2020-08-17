<template>
  <div>
    <!--mine-->
    <toubu>
      <span slot="text">我的</span>
      <img slot="img2" src="@/assets/images/ic_settings.png">
    </toubu>
    <div class="aa clear">
      <div class="left">
        <img src="../../assets/img/tou1.jpg"/>
      </div>
      <div class="left">
        <div>
          <h2>陈仓仓</h2>
          <div class="aa_1 clear">
            <div class="left">ID:158746672</div>
            <div class="left">个人主页></div>
          </div>
        </div>
        <div>
          关注1  被关注0
        </div>
      </div>
    </div>
    <div class="bb clear">
      <div class="left">
        <img src="../../assets/images/ic_mine_notification.png"/>提醒
      </div>
      <div class="right">
        <img src="../../assets/images/ic_arrow_gray_small.png"/>
      </div>
    </div>
    <div class="cc">
      <p>暂无新提醒</p>
    </div>
    <div class="dd">
      <ul>
        <li>
          <img src="../../assets/images/ic_my_likes.png"/>
          <p>喜欢</p>
        </li>
        <li>
          <img src="../../assets/images/ic_my_note.png"/>
          <p>日记</p>
        </li>
        <li>
          <img src="../../assets/images/ic_my_album.png"/>
          <p>喜欢</p>
        </li>
        <li>
          <img src="../../assets/images/ic_my_status.png"/>
          <p>我的广播</p>
        </li>
      </ul>
      <ul>
        <li>
          <img src="../../assets/images/ic_my_movies_tvs.png"/>
          <p>电影.电视</p>
        </li>
        <li>
          <img src="../../assets/images/ic_my_books.png"/>
          <p>读书</p>
        </li>
        <li>
          <img src="../../assets/images/ic_my_music.png"/>
          <p>音乐</p>
        </li>
        <li>
          <img src="../../assets/images/ic_my_events.png"/>
          <p>同城活动</p>
        </li>
      </ul>
      <ul>
        <li>
          <img src="../../assets/images/ic_my_likes.png"/>
          <p>舞台剧</p>
        </li>
        <li>
          <img src="../../assets/images/ic_my_note.png"/>
          <p>豆瓣时间</p>
        </li>
        <li>
          <img src="../../assets/images/ic_my_doulist.png"/>
          <p>豆列</p>
        </li>
        <li>
          <img src="../../assets/images/ic_my_orders.png"/>
          <p>订单</p>
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
    color: white;
    padding: 10px;
    background-color: #1C3645;
  }
  .aa img:nth-of-type(1){
    width: 80px;
    border-radius: 50%;
    margin-top: 20px;
  }
  .aa h2{
    margin-bottom: 0px;
  }
  .aa_1 div:nth-of-type(2){
    margin-left: 300px;
  }
  .bb img{
    width: 50px;
    vertical-align:middle;
  }
  .cc{
    text-align: center;
  }
  .dd ul li{
    list-style-type: none;
    display: inline-block;
    text-align: center;
    width: 23%;
  }
  .dd ul li img{
    width: 50px;
  }
  .dd ul{
    border-bottom: 1px solid #B8B7B8;
  }
</style>
