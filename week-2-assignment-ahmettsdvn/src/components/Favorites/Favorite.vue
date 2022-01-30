<!-- 
    Favorite page homepage.
-->

<template>
  <div class="favorites">
      <div v-for="item in favoriteData" :key="item.id" class="row col-md-8 favorites-content">
          <FavoriteCard :item="item"/>
      </div>
  </div>
</template>

<script>
    import FavoriteCard from './FavoriteCard.component.vue'
    import app from '../../../app'
    export default {
        name: 'favorite',
        components: {
            FavoriteCard
        },
        data: function(){
            return{
                data: [],
                favoriteData: []
            }
        },
        created(){
            app.ModanisaAxiosExample.get('/videos').then(res=>{
                this.data = res.data
                this.favoriteData = this.data.filter(i => i.favorite === true)
                
            })
        },
    }
</script>

<style scoped>
   .favorites{
       display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
   }

   .favorites-content{
       margin-bottom: 20px;
   }
</style>