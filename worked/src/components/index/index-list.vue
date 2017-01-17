<template>
 <loadMore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
     <ul class="clearfix list-container">
        <li v-for='item in items' class="item">
          <a :href='item.href'>
            <img :title='item.alt' :alt='item.alt' :src='item.imageSrc'>
            <span class='desc'>{{ item.text }}</span>
          </a>
        </li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
  </div>
 </loadMore>
  
</template>
<style scoped>
    ul {
        margin: .28rem;
        height: 3rem;
        overflow-y: scroll;
    }
    
    .item {
        display: inline-block;
        float: left;
    }
    
    .item:nth-child(2n) {
        width: 48.5%;
    }
    
    .item:nth-child(2n+1) {
        width: 48.5%;
        padding-right: 3%;
    }
    
    .desc {
        color: #59c895;
    }

</style>
<script>
    import loadMore from 'vue-loadmore'
    export default {
        props: ['items'],
        methods: {
            loadTop: function() {
                alert('load top');
            },
            loadBottom: function() {
                alert('load bottom');
            }
        },
        created: function() {
            alert('created');
            console.info(this);
            console.info(loadMore);
            //            loadMore.init();
        },
        destoryed: function() {
            console.info(this);
            console.info('this plugin destoryed');
        },
        computed: {
            loadMore: function() {
                console.info(this);
            }
        },
        components: {
            loadMore
        }
    }

</script>
