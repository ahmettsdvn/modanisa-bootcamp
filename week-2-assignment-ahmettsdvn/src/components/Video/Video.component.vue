<template>
  <div class="video">
      <iframe :src="src" :width="width" :height="height" frameborder="0"></iframe>
  </div>
</template>

<script>
    export default {
        name: 'Iframe',
        props: {
            src: String,
            width: String,
            height: String
        },
    }
</script>

<style scoped>
    .video{
        height: 100vh;        
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;  
    }
</style>