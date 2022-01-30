<!--  
    This component was used for youtube video card design.
    This component was used for videos in homepage
-->

<template>
<!-- Youtube Card UI Design  -->
  <div class="yt-card col-md-4">
    <div class="yt-card-img">
      <a :href="item.videoAddress">
        <img :src="coverImage" :alt="item.title" :title="item.title" @mouseover="coverImage = hoverImage" @mouseleave="coverImage = item.coverImage"/>
      </a>
    </div>
    <div class="yt-card-owner">
      <div class="yt-avatar">
        <Avatar width="36"
         height="36" 
         :src="item.ownerImage"
         :alt="item.ownerName"
         :title="item.ownerName"
         :url="item.videoAddress"/>
      </div>
      <div class="yt-card-owner-text">
        <div class="title">
          <Link :url="item.videoAddress" :text="item.title" :linkStyle="headerStyle" :title="item.title"/>
        </div>
        <div class="owner-name">
          <Link :url="item.videoAddress" :text="item.ownerName" :title="item.ownerName" :linkStyle="linkStyle"/>          
        </div>
        <div class="count">
          <Label :text="item.viewCount+' viewed'" :textStyle="countStyle"/> 
          <Point/>
          <Label :text="item.publishDateInMonth + ' days ago'" :textStyle="countStyle"/> 
        </div>
      </div>
    </div>
  </div>
<!-- oracle oca ocp jv11 jv8 -->
</template>

<script>

  import Avatar from '../Avatar/Avatar.component.vue'
  import Label from '../Label/Label.component.vue'
  import Point from '../Point/Point.component.vue'
  import Link from '../Link/Link.component.vue'

  export default {
    name: 'YoutubeCard',
    /* PROPS DEFINITION FOR YOUTUBECARD COMPONENT */
    props: {
      item: Object
    },
    components: {
      Avatar,
      Label,
      Point,
      Link
    },
    data (){
      return{
        linkStyle: {
          color: '#606060',
        },
        headerStyle: {
          fontWeight: 'bold',
          color: 'rgb(3,3,3)'
        },
        countStyle: {
          color: '#606060',
        },
        imageStyle: {
          width: '360px',
          height: '200px'
        },
        hoverImage: this.item.hoverImage,
        coverImage: this.item.coverImage
      }
    }
}
</script>

<style scoped>
  .yt-card{
    padding: 10px;
    width: 400px;
  }

  .yt-card-img{
    width: 360px;
    height: 200px
  }

  .yt-card-img img{
    width: 360px;
    height: 200px;
    object-fit: cover;
  }

  .yt-card-owner, .yt-card-owner-text, .count{
    display: flex;
  }
  
  .yt-card-owner-text{
    flex-direction: column;
    align-items: center;
    justify-content:flex-start
  }

  .yt-card-owner-text{
    padding: 10px;
  }

  .title{
    padding: 6px 0;
  }

  .title,.owner-name,.count{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
  }

  .owner-name, .count{
    font-family: "Roboto","Arial",sans-serif;
    font-size: 1em;
    line-height: 1.5rem;
    font-weight: 300;
    max-height: 2rem;
    overflow: hidden;
  }
</style>
