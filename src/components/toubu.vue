<template>
  <div class="clear header">
    <div class="left">
      <slot name="text"></slot>
    </div>
    <div class="right">
      <slot name="img1"></slot>
      <slot name="img2"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "toubu"
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

  .header{
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color: #f7f7f7;
  }
  .header div:nth-of-type(1){
    text-align: center;
    width: 80%;
  }
  .header div:nth-of-type(2){
    text-align: right;
    width: 20%;
  }
  img{
    width: 25px;
  }
</style>
