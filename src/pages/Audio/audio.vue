<template>
	<div>
		<!--audio-->
    <toubu>
      <span slot="text">书影音</span>
      <img slot="img1" src="@/assets/images/ic_actionbar_search_icon.png">
      <img slot="img2" src="@/assets/images/ic_chat_green.png">
    </toubu>

    <div class="nav">
      <span :class="{active: nowIndex==0}" @click="select(0)">
        <router-link to="/audio/film">电影</router-link>
      </span>
      <span :class="{active: nowIndex==1}" @click="select(1)">
        <router-link to="/audio/read">读书</router-link>
      </span>
      <span :class="{active: nowIndex==2}" @click="select(2)">
        <router-link to="/audio/tv">电视</router-link>
      </span>
      <span :class="{active: nowIndex==3}" @click="select(3)">
        <router-link to="/audio/city">同城</router-link>
      </span>
      <span :class="{active: nowIndex==4}" @click="select(4)">
        <router-link to="/audio/music">音乐</router-link>
      </span>
    </div>
    <div class="audioContent">
      <router-view></router-view>
    </div>





	</div>
</template>

<script>
  import toubu from '../../components/toubu'

  export default {
    name: "audio",
    data: function(){
      return{
        nowIndex: 0
      }
    },
    created:function(){
      //sessionStorage存储应用的全局的变量。刷新页面后初始化nowIndex的值
      if( sessionStorage.getItem("audio.nowIndex") != null){
        this.nowIndex = sessionStorage.getItem("audio.nowIndex")
      }
    },
    methods:{
      select:function (index) {
        this.nowIndex=index;
        //sessionStorage存储应用的全局的变量。
        sessionStorage.setItem("audio.nowIndex", this.nowIndex);
      }
    },
    components:{
      toubu
    }
  }
</script>

<style scoped>
  .nav{
    height: 33px;
    line-height: 33px ;
    border-bottom: 1px solid #e3e3e3;
  }
  .nav:after{
    content: '';
    display: block;
    clear: both;
  }
  .nav span{
    display: block;
  }
  .nav a{
    display: block;
    width: 20%;
    float: left;
    color: #5e5e5e;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
  }
  .nav span.active a{
    border-bottom: 2px solid #3e8f3e;
  }
  .audioContent{
    /*防止a标签的下边框当着下面的内容*/
    padding-top: 5px;
    text-align: center;
  }
</style>
