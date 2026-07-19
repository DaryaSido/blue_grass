<template>
    <div class="enter_page">
<h2 id="fun">Развлечения</h2>
<div class="cards">
<NuxtLink 
v-for="item in entertainmentItem" 
:key="item.id"
:to="item.link"
class="card" >
   
    <img :src="item.image" :alt="item.title">
    <span>{{ item.title }}</span>
</NuxtLink>
</div>
    </div>
</template>

<script setup lang="ts">
import sportImg from '~/assets/images/sport.png'
import hikingImg from '~/assets/images/hiking.png'
import entertainmentImg from '~/assets/images/entertainment.png'
import spaImg from '~/assets/images/spa.png'
const entertainmentItem = [
   {
    id: 1,
    title: 'Спортивные развлечения',
    link: '/sport',
    image: sportImg
   },
   {id: 2,
    title: 'Развлекательные мероприятия',
    link: '/entertainment',
    image: entertainmentImg
   } ,
   {id: 3,
    title: 'Пешие туры',
    link: '/hiking',
    image: hikingImg
   } ,
     {id: 4,
    title: 'Спа',
    link: '/spa',
    image: spaImg
   } 
]

</script>

<style scoped>
.enter_page {
    margin-bottom: 50px;
}
.cards {
    /* display: grid;
    grid-template-rows: repeat(4 1fr); */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}
.card {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    transition: transform 0.3s ease;
    &:hover {
         transform: translateY(-5px);
    }
    img {
         border-radius: 20px;
        width: 100%;
        object-fit: cover;
        margin-bottom: 10px;
    }
    /* span {
        width: 200px;
        padding: 15px;
        border-radius: 20px;
        border: 1px dotted #BF6024;
    } */
    
    
}
a {
    text-decoration: none;
}

</style>