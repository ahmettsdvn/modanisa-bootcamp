<!-- 
    Text component design for title, username, ownername, count vs. in favorite and homepage
-->

<template>
  <span :style="textStyle">{{text}}</span>
</template>

<script>
export default {
    name: 'Text',
    props: {
        text: String,
        textStyle: Object
    }
}
</script>

<style scoped>
    span{
        font-family: "Roboto","Arial",sans-serif;
        text-align: left;
        white-space: normal;
    }
</style>