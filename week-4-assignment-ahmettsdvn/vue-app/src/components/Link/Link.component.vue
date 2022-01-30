<!-- 
    Clickable link component design for title, username, ownername, count vs. in favorite and homepage
-->

<template>
  <a :href="url" :style="linkStyle" :title="title" class="link">
      <span v-if="icon" class="icon-container">
          <span class="icon" :style="icnStyle">
            <i :class="icon"></i>
          </span>
      </span>
      <span class="text">{{text}}</span>

  </a>
</template>

<script>
export default {
    name: 'Link',
    props:{
        text: String,
        url: String,
        linkStyle: Object,
        title: String,
        icon: String,
        iconStyle: Object
    }
}
</script>

<style scoped>
    a{
        text-decoration: none;
        text-align: left;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-right: 8px;
    }

    .icon-container{
        margin-right: 6px;
    }
</style>