<template>
  <ul class="clearfix">
    <li v-for='item in items' class="item">
      <a :href='item.href'>
        <img :title='item.alt' :alt='item.alt' :src='item.imageSrc'>
        <span class='desc'>{{ item.text }}</span>
      </a>
    </li>
  </ul>
</template>
<style>
  ul {
    margin: .28rem;
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
  .desc{
    color: #59c895;
  }
</style>
<script>
  export default{
    props: ['items']

  }
</script>
