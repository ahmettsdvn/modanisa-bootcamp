<!-- 
    Favorite page card design for Favorite page homepage.
    similar to youtube card component
-->


<template>
  <div class="favorite-card">
      <div class="favorite-card-img">
          <img :src="coverImage" 
          :alt="item.title" 
          :title="item.title"
          @mouseover="coverImage = hoverImage" 
          @mouseleave="coverImage = item.coverImage"
          @click="openVideo"/>
         
      </div>
      <div class="favorite-card-text">
          <div class="title">
        <Link :url="item.videoAddress" :text="item.title" :linkStyle="titleStyle"/> 

      </div>
      <div class="count">
          <Label :text="item.viewCount+' viewed'" :textStyle="countStyle"/> 
          <Point/>
          <Label :text="item.publishDateInMonth + ' days ago'" :textStyle="countStyle"/> 
      </div>
      <div class="owner">
        <Avatar 
            width="24"
            height="24" 
           :src="item.ownerImage"
            :alt="item.ownerName"
            :title="item.ownerName"
            :url="item.videoAddress"/>
         <Label :text="item.ownerName" :textStyle="countStyle"/>  
      </div>

      <div class="description">
         <Label :text="item.description" :textStyle="countStyle"/>  
      </div>
      </div>
  </div>
</template>

<script>
    import Link from '../Link/Link.component.vue'
    import Label from '../Label/Label.component.vue'
    import Point from '../Point/Point.component.vue'
    import Avatar from '../Avatar/Avatar.component'
    import router from '../../router/index'
    
    export default {
        name: 'FavoriteCard',
        props: {
            item: Object
        },
        components: {
            Link,
            Point,
            Label,
            Avatar
        },
        methods:{
            openVideo() {
                console.log(`${window.location.origin}/watch?id=${this.watchId}`)
                
                router.push({name: 'Video', query: {id: this.watchId}})
            }
        },
        data: function (){
            return {
                countStyle: {
                    color: '#606060',
                },
                titleStyle: {
                    fontWeight: 'bold',
                    color: 'rgb(3,3,3)'
                },
                hoverImage: this.item.hoverImage,
                coverImage: this.item.coverImage,
                currentURL: '',
                watchId: ''
            }
        },
        created(){
            this.watchId = this.item.videoAddress.split('v=')[1]
        }
    }
</script>

<style scoped>
    .favorite-card{
        display: flex;
            align-items: flex-start;
            justify-content: flex-start;
    }
    .favorite-card-img{
        width: 360px;
        height: 200px
    }

    .favorite-card-img img{
        width: 360px;
        height: 200px;
        object-fit: cover;
    }

    .favorite-card-text{
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
    }

    .owner, .count, .title, .description{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;margin-bottom: 10px;
        user-select: none;
    }

    img{
        cursor: pointer
    }
    
</style>