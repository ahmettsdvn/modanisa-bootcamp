<!-- 
    This is Vue Component. 
    This component was use d for avatar in videos(user image)
    can use everywhere
-->

<template>
    <div class="avatar">
        <a :href="src" :class="{'disable-click':clickable}">
            <img :src="src" :alt="alt" :title="title" :style="{'width':width+'px', 'height':height +'px'}"/>
        </a>
    </div>
</template>

<script>
    export default{
        name: 'Avatar',
        props: {
            width: String,
            height: String,
            alt: String,
            title: String,
            src: String,
            clickable: Boolean,
            url: String
        }
    }
</script>

<style scoped>
    img{
        border-radius: 50%;
        object-fit: cover;
    }

    .disable-click{
        pointer-events: none;
    }

    .avatar{
        padding: 10px;
    }
</style>
