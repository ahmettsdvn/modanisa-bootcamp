<!-- 
    Point component. Between ViewCount and publishDateInMonth 
-->

<template>
  <span class="point">

  </span>
</template>

<script>
export default {
    name: 'Point'
}
</script>

<style scoped>
    .point::after{
        content: "•";
        padding: 0 4px;
    }
</style>