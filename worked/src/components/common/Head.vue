<template>
  <header class="header">
    <a v-show="myBackBtn" href='#' class="header_back" @click='backBtnFun'>
      <i class="icon_back"></i>
    </a>
    <h1 class="title">{{ myHeaderTitle }}</h1>
    <a href='#' class="header_done" v-if='myDoneBtn' @click='doneBtnFun($event)' :style='styleComputed'>{{ myDoneBtnText }}</a>
    <a href='#' class="header_done" v-else></a>
  </header>
</template>

<script>
  module.exports = {
    //父组件传递的数据
    props: ['myHeaderTitle', 'myBackBtn','myDoneBtn', 'myDoneBtnText'],
    methods: {
      //事件绑定回调函数
      doneBtnFun: function (event) {
        console.info(event);
        alert('done btn clicked');
      },
      backBtnFun: function (event) {
        alert('back btn clicked');
      }
    },
    computed:{
      styleComputed : function () {
        console.info(this);
        var color = this.myDoneBtn ? '#bdbdbd' : '#fff';
        return {
          'background-color': color,
          'color': '#fff'
        }
      }
    }
  }
</script>

<!-- 加入scoped是为了防止本组件中的css渗透到其他组件，可以去掉看看结果 -->
<style scoped>
  .header {
    height: .88rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: all;
    z-index: 99;
    background-color: #fcfcfc;
    box-shadow: 0 1px 1px #e6e6e6;
  }

  .title {
    color: #333;
    text-align: center;
    line-height: .88rem;
    height: .88rem;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 1.15rem;
    white-space: nowrap;
    font-size: .36rem;
  }

  .header_back {
    position: absolute;
    height: 100%;
    width: 1.15rem;
    left: 0;
  }

  .icon_back {
    position: absolute;
    left: .48rem;
    top: 50%;
    margin-top: -.24rem;
    height: .48rem;
    width: .25rem;
    background: url(../../assets/images/icon_common.png) no-repeat;
    background-size: 7.9rem 5.13rem;
    background-position: -.55rem -.5rem;
  }

  .header_done {
    position: absolute;
    height: 100%;
    width: 1.15rem;
    right: 0;
    top: 0;
    background-color: transparent;
    line-height: .88rem;
    text-align: center;
  }
</style>
