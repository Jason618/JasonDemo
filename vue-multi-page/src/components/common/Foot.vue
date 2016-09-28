<template>
	<h1>This is Foot! test</h1>

</template>

<script>
  var eles = document.getElementsByTagName('h1');
  console.info(eles);
  for(var i=0;i<eles.length;i++) {
    eles[i].style.fontSize = '30px';
  }



</script>

<style scoped>
	h1{
		color: green;
	}
</style>
