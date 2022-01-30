<!-- 
    Iframe component for open youtube videos 
-->

<template>
  <div class="video">
      <iframe :src="url" width="80%" height="600"></iframe>
  </div>
</template>

<script>
    export default {
        data: function(){
            return{
                url: 'https://www.youtube.com/embed/'+`${this.$route.query.id}`
            }
        },
        compoents: {
        }
    }
</script>

<style scoped>

</style>