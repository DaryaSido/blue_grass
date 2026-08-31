<script setup lang="ts">
import LogoImageTxt from '~/assets/images/logo_txt.svg'
</script>

<template>
  <div class="footer-bcg">
    <div class="footer">
      <div class="footer-logo">
        <img class="logo" :src="LogoImageTxt" alt="" />
        <div class="footer-info">
          <div class="footer-nmb">8-800-000-00-00</div>
          <div footer-adress>г.Кисловодск, ул. Курортная, 42</div>
        </div>
      </div>
      <div class="footer-contact">
        <div class="footer-feedback">
          <a class="button" href="#">Забронировать номер</a>
          <a class="button" href="https://yandex.ru/maps/-/CTwaRZ0w" target="_blank">Мы на карте</a>
        </div>
      </div>
    </div>
    <div class="footer-legal-info">
      <div>2020-2026 Официальный сайт курорта Альпийские луга.</div>
      <div>
        Указанные на сайте цены не являются публичной офертой (ст.435 ГК РФ). Стоимость и
        возможность предоставления услуг необходимо уточнять в кассах.
      </div>
      <div><a href="#">Политика конфиденциальности</a></div>
    </div>
  </div>
</template>

<style scoped>
.footer-bcg {
  color: white;
  margin-top: 1rem;
  background: #4a3f35;
  display: block;
  justify-content: center;
  align-items: center;
}
.footer {
  min-width: 1140px;
  margin: 0 auto;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.footer-logo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer-nmb {
  font-size: 2rem;
  font-weight: 600;
}
.footer-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.button {
  color: #4a3f35;
  background-color: white;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
  text-transform: uppercase;
  margin: 0 auto;
  display: flex;
}
.footer-feedback {
  display: flex;
  gap: 0.5rem;
}
.footer-legal-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.logo {
  width: 200px;
  filter: brightness(0) invert(1);
}
</style>
