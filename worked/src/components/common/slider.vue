<template>
  <swipe :auto='5000'>
    <item v-for='item in banners'>
      <a :href='item.link'>
        <img :src='item.imageSrc'>
      </a>
    </item>
  </swipe>
</template>
<style scoped>

</style>
<script>
  import swipe from './swipe'
  import item from './swipe-item'
    export default{
      props:['banners'],
      components: {
        swipe,
        item
      }
    }
</script>
