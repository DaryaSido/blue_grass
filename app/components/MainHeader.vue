<template>
    <div class="head">
    <div class="header">
    <div class="logo">
        <span>
        <img :src="LogoImage" alt="">
        </span>
        <span>твой лучший курорт</span>
    </div>
    <div class="contact_info">
        <a class="feedback_link" href="#">Обратная связь</a>
        <span>8 800 770 30 30</span>
    </div>
    </div>
    <nav> 
        <div class="menu">
            <ul>
                <li>Курорт</li>
                <li>Чем заняться</li>
                <li>Купить онлайн</li>
                <li>Афиша мероприятий</li>
                <li>Проживание</li>
            </ul>
            <ul>
                <li>Программа лояльности</li>
                <li>Для бизнеса</li>
            </ul>
        </div>
    </nav>
    </div>
</template>

<script setup lang="ts">
import LogoImage from '~/assets/images/logo.svg'

</script>

<style lang="scss" scoped>
.head {
    margin: 0 auto;
    width:1140px;
    position: sticky;
     z-index: 100;
    //  background: rgb(78, 157, 41, 0.58);   
    
}
.header {
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 2px solid black;
}
.logo {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 15px;
}
.contact_info {
    display: flex;
    flex-direction: row;
    gap: 15px;
}
.feedback_link {
    text-transform: uppercase;
    text-decoration: none;
    color: blue;
    &:hover {
        color: darkblue;
    }
}
.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
ul {
    padding: 0px;
    list-style: none;
    display: flex;
    gap: 20px;
}

</style>