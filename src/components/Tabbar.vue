<template>
  <div class="tabbar">
    <div v-for="(item, index) in items" class="tabbar-item" @click="select(item.mark)">
      <img v-show="!bol(index)" :src="item.src1"/>
      <img v-show="bol(index)" :src="item.src2"/>
      <span :class="{green:bol(index)}">{{item.txt}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbar",
    data: function () {
      return {
        items:[
          {
            mark:'home',
            txt:'首页',
            src1:require('../assets/images/ic_tab_home_normal.png'),
            src2:require('../assets/images/ic_tab_home_active.png')
          },
          {
            mark:'audio',
            txt:'书影音',
            src1:require('../assets/images/ic_tab_status_normal.png'),
            src2:require('../assets/images/ic_tab_status_active.png')
          },
          {
            mark:'broadcast',
            txt:'广播',
            src1:require('../assets/images/ic_tab_status_normal.png'),
            src2:require('../assets/images/ic_tab_status_active.png')
          },
          {
            mark:'group', txt:'小组',
            src1:require('../assets/images/ic_tab_group_normal.png'),
            src2:require('../assets/images/ic_tab_group_active.png')
          },
          {
            mark:'mine', txt:'我的',
            src1:require('../assets/images/ic_tab_profile_female_normal.png'),
            src2:require('../assets/images/ic_tab_profile_female_active.png')
          }
        ],
        selected:'home'

      }
    },
    //组件加载完初始化组件的状态
    created:function(){
      if(sessionStorage.getItem("tabbar.selected")!= null){
        this.selected=sessionStorage.getItem("tabbar.selected")
      }
    },
    methods: {
      select:function (mark) {
        this.selected = mark;
        this.$router.push("/"+mark);
        sessionStorage.setItem("tabbar.selected", this.selected);
      },
      //判断当前的标签是否选中
      bol:function (index) {
        if(this.items[index].mark==this.selected){
          return true;
        }
        return false;
      }
    }
  }
</script>

<style scoped>
  .tabbar{
    width: 100%;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    padding-bottom: 5px;
    border-top: 1px solid lightgray;
    z-index: 99;
  }
  .tabbar-item{
    width: 20%;
    float: left;
    text-align: center;
  }
  .tabbar-item img{
    width: 54px;
  }
  .tabbar-item span{
    display: block;
    margin-top: -5px;
  }
  .green{
    color: #43BD57;
  }
</style>
