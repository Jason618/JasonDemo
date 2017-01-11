<template>
  <div class="main">
    <vhead :my-header-title='headerTitle' :my-back-btn='headerBackBtn' :my-done-btn='headerDoneBtn'
           :my-done-btn-text='headerBtnText'></vhead>
    <div class="index_wrap content">
      <vslider v-bind:banners='indexBanner'></vslider>
      <div class="topic clearfix">
        <ul>
          <li>
            <a href='/flight.html'>机票</a>
          </li>
          <li>
            <a href='/hotel.html'>酒店</a>
          </li>
          <li>
            <a href='/tour.html'>景点</a>
          </li>
          <li>
            <a href='/fjt.html'>自由行</a>
          </li>
          <li>
            <a href='/ht.html'>酒景</a>
          </li>
        </ul>
      </div>
      <vlist :items='indexListItems'></vlist>
    </div>
    <vfoot></vfoot>
    <vloading></vloading>
  </div>
</template>

<script>
  import vhead from '../../components/common/Head'
  import vfoot from '../../components/common/Foot'
  import vslider from '../../components/common/slider'
  import vlist from '../../components/index/index-list'
  import vloading from '../../components/common/loading'
  export default {
    data: function () {
      return {
        headerTitle: '首页',
        headerBackBtn: true, //true,显示返回按钮
        headerDoneBtn: true,
        headerBtnText: 'test',
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
            imageSrc: 'http://gw.alicdn.com/imgextra/i1/107/TB2abP8ctRopuFjSZFtXXcanpXa_!!107-0-yamato.jpg_760x760Q30s0.jpg_.webp',
            link: '/hotel.html',
            alt: 'banner1'
          },
          {
            imageSrc: 'http://gw.alicdn.com/imgextra/i1/107/TB2abP8ctRopuFjSZFtXXcanpXa_!!107-0-yamato.jpg_760x760Q30s0.jpg_.webp',
            link: 'http://baidu.com',
            alt: 'banner1'
          },
          {
            imageSrc: 'http://gw.alicdn.com/imgextra/i1/107/TB2abP8ctRopuFjSZFtXXcanpXa_!!107-0-yamato.jpg_760x760Q30s0.jpg_.webp',
            link: 'http://baidu.com',
            alt: 'banner1'
          }
        ]
      }
    },
    components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vloading,
      vhead,
      vfoot,
      vlist,
      vslider
    }
  }
</script>

<style scoped>
  @import "../../css/common/reset.css";
  @import "../../css/common/layout.css";
  @import "../../css/common/rem.css";
  @import "../../css/common/global_1.css";
  .topic{
    margin: .2rem;
  }
  .topic li{
    display: inline-block;
    float: left;
    width: 20%;
  }
  .topic li a{
    display: block;
    margin: 0 auto;
    text-align: center;
    line-height: 1rem;
    height: 1rem;
    width: 1rem;
    background-color: #4da7e7;
    border-radius: 1rem;
    color: #f5f4f9;
    font-size: .28rem;
  }
</style>
