<template>
  <div class="main">
    <vhead :my-header-title='headerTitle' :my-back-btn='headerBackBtn' :my-done-btn='headerDoneBtn'
           :my-done-btn-text='headerBtnText'></vhead>
    <div class="index_wrap content">
      <vslider v-bind:banners='indexBanner'></vslider>
      <vlist :items='indexListItems'></vlist>
    </div>
    <vfoot></vfoot>
  </div>
</template>

<script>
  import vhead from '../../components/common/Head'
  import vfoot from '../../components/common/Foot'
  import vslider from '../../components/common/slider'
  import vlist from '../../components/index/index-list'
  export default {
    data: function () {
      return {
        headerTitle: '首页',
        headerBackBtn: true, //true,显示返回按钮
        headerDoneBtn: true,
        headerBtnText: '完成',
        indexListItems: [
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          },
          {
            href: 'http://baidu.com',
            alt: 'test',
            text: 'test1',
            imageSrc: 'http://m.yazhoulvyou.cn/images/index/hot_play.jpg'
          }
        ],
        indexBanner: [
          {
            imageSrc: 'http://res.yazhoulvyou.cn/pic/appbanner.jpg',
            link: 'http://baidu.com',
            alt: 'banner1'
          },
          {
            imageSrc: 'http://res.yazhoulvyou.cn/pic/appbanner.jpg',
            link: 'http://baidu.com',
            alt: 'banner1'
          },
          {
            imageSrc: 'http://res.yazhoulvyou.cn/pic/appbanner.jpg',
            link: 'http://baidu.com',
            alt: 'banner1'
          }
        ]
      }
    },
    components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vhead,
      vfoot,
      vlist,
      vslider
    }
  }
</script>

<style>
  @import "../../css/common/reset.css";
  @import "../../css/common/layout.css";
  @import "../../css/common/rem.css";
  @import "../../css/common/global_1.css";
</style>
