<template>
  <div class="home">
      <div class="row">
          <div v-for="item in data" :key="item.id" class="col-md-6 col-lg-3 col-sm-12 col-xs-12 col-xl-3 col-xxl-3">
            <YoutubeCard :item="item"/>
          </div>
      </div>
  </div>
</template>

<script>
    import YoutubeCard from '../Card/Card.component.vue'
    import app from '../../../app'
    export default {
        name: 'Home',
        components: {
            YoutubeCard,
        },
        data() {
           return{
               data: [],
               favoriteData : [],
               linkStyle: {
                   color: '#606060',
                   border: '1px solid rgba(0,0,0,.36)',
                   display: 'inline',
                   padding: '12px 14px',
                   borderRadius: '10px',
                   
               }
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
    .home{
        padding-bottom: 30px;
    }
    
</style>