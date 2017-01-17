<template>
 <div class="loader-wrap">
     <div class="loader">
      Loading...
      </div> 
 </div>
  
</template>

<script>


</script>

<style scoped>
    .loader-wrap {
        position: fixed;
        z-index: 9999;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 1rem;
        height: 1rem;
        background-color: #4e9e9d;
    }
    
    .loader,
    .loader:after {
        border-radius: 50%;
        width: .5rem;
        height: .5rem;
    }
    
    .loader {
        font-size: 10px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        text-indent: -9999em;
        border-top: .1rem solid rgba(255, 255, 255, 0.2);
        border-right: .1rem solid rgba(255, 255, 255, 0.2);
        border-bottom: .1rem solid rgba(255, 255, 255, 0.2);
        border-left: .1rem solid #ffffff;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load8 1.1s infinite linear;
        animation: load8 1.1s infinite linear;
    }
    
    @-webkit-keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    
    @keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

</style>
