<template>   <div id="app" class="container-fluid">
  
    <!-- TopBar is a menu on top -->
    <div class="topbar">
        <div class="topbar-content">
          <router-link :to="{path: '/'}" class="menu-link">
            <Link icon="fas fa-home" url="/" text="Home" title="Home" :linkStyle="linkStyle"/>
          </router-link>
          <router-link :to="{path: '/favorites/1'}" class="menu-link">
            <Link icon="fas fa-star" url="/favorites" text="Favorites" title="Favorites" :linkStyle="linkStyle"/>
          </router-link>
        </div>
    </div>   
    <router-view/>   
  </div>
  
</template>

<script>
// Link component import
import Link from './components/Link/Link.component.vue'

export default {
  name: 'App',
  components: {
    Link
  },
  data() {
    return{
      linkStyle: {
        color: '#606060',
        border: '1px solid rgba(0,0,0,.36)',
        display: 'inline',
        padding: '12px 14px',
        borderRadius: '10px',
                   
      }
    }
  }               
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}.topbar{
        border-bottom: 1px solid rgba(0,0,0,0.3);
        margin-bottom: 25px;
    }

    .topbar-content{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 20px;
    }
</style>
