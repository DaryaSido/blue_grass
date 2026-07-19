<template>
    <div class="footer-bcg">
    <div class="footer">
        
        <div class="footer_inf">
            <div>© 2001-2020 Синий луг</div>
            <div>Официальный сайт Курорта Синий Луг</div>
            <div>Политика конфиденциальности</div>
        </div>
        <div class="footer_inf">
            <div>Обратная связь</div>
            <div></div>
            <div>Россия,<br>Москва, 113337, ул. Советская, д. 42</div>
        </div>
         <div class="footer_inf">
            <div>Указанные на сайте цены не являются публичной офертой (ст.435 ГК РФ). Стоимость и возможность предоставления услуг необходимо уточнять в кассах</div>
            
        </div>
    </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer-bcg {
    background: #EAEDF2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer {
    width: 1140px;
    margin: 0 auto;
   padding: 10px 0 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.footer_inf {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 20px;
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
}

</style>