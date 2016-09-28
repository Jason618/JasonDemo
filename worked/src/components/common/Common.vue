<template>
  <div>
    <div>this is template body</div>
    <div>{{ msg }}</div>
  </div>
</template>
<style>
  div {
    background-color: #ff0000;
  }
</style>
<script>
  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World! test'
      }
    }
  }
</script>
