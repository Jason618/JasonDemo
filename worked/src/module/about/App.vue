<template>
	<vhead></vhead>
	<vabout></vabout>
	<vfoot></vfoot>
</template>

<script>
import vhead from '../../components/common/Head'
import vfoot from '../../components/common/Foot'
import vabout from '../../components/about/About'
export default {
	components: {
      vhead,
      vfoot,
      vabout
    }
}
</script>

<style>
  @import "../../css/common/reset.css";
  @import "../../css/common/layout.css";
  @import "../../css/common/rem.css";
</style>
