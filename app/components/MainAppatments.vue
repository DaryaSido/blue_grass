<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h2>Проживание на курорте</h2>

    <div class="description">
      <span> Комфортное размещение</span> — важная часть вашего оздоровительного отдыха. Мы предлагаем уютные
      номера и апартаменты на любой вкус: от стандартных до просторных люксов с панорамными видами.
      Все варианты оснащены всем необходимым для полноценного восстановления и приятного пребывания.
      Выберите подходящий вариант по выгодной цене
      и забронируйте заранее, чтобы быть уверенными в идеальных условиях отдыха.
    </div>
    <div class="appartments_block">
      <div class="appartments">
        <h3>Аппартаменты люкс</h3>
        <div class="appartments_button">
          <span><a
            class="orange-btn"
            href="#"
          >Забронировать</a></span> <span> <a
            class="beige-btn"
            href="#"
          >Посмотреть</a></span>
        </div>
      </div>
      <div class="contacts">
        <div class="contacts_info">
          <h3>
            <span>Подберите отель</span>
            <span>по выгодной цене</span>
          </h3>
          <a
            class="contacts_info_chose"
            href="#"
          >Подобрать  <svg
            class="arrow"
            viewBox="0 0 27 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.3536 4.03544C26.5488 3.84017 26.5488 3.52359 26.3536 3.32833L23.1716 0.146349C22.9763 -0.0489133 22.6597 -0.0489133 22.4645 0.146349C22.2692 0.341611 22.2692 0.658194 22.4645 0.853456L25.2929 3.68188L22.4645 6.51031C22.2692 6.70557 22.2692 7.02215 22.4645 7.21742C22.6597 7.41268 22.9763 7.41268 23.1716 7.21742L26.3536 4.03544ZM4.37114e-08 4.18188L26 4.18188L26 3.18188L-4.37114e-08 3.18188L4.37114e-08 4.18188Z"
              fill="#BF6024"
            />

          </svg> </a>
        </div>
        <div class="contacts_info">
          <h3>Программа лояльности</h3>
          <div class="contacts_info_desc">
            Покупайте услуги курорта со скидкой до 20% и получите до 300 баллов за регистрацию!
          </div>
          <div class="contacts_info_btn">
            <a
              class="orange-btn"
              href="#"
            >Участвовать</a>
            <a
              class="contacts_info_chose"
              href="#"
            >Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1140px;
  padding-bottom: 20px;
}

h2 {
  align-items: center;
  text-align: center;
  align-content: center;
  margin-bottom: 50px;
}

.description {
  font-size: 16px;
  margin-bottom: 20px;

  & span {
    font-weight: 700;
  }
}
.appartments_block {
  display: grid;
  grid-auto-flow: column;
  column-gap: 30px;
}
.appartments {
  width: 530px;
  height: 600px;
  padding-left: 20px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  background: url('~/assets/images/appartment.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  align-items: left;
}
.appartments_button {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}
.contacts_info_chose {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 144px;
  gap: 15px;
  color: #bf6024;
  font-weight: 700;
  padding: 5px 15px 5px 15px;
  border: 2px solid #bf6024;
  border-radius: 50px;
}
.contacts_info h3 span {
  display: block;
  margin-bottom: 5px;
}
.contacts_info h3 {
  margin-bottom: 28px;
}

.arrow {
  width: 40px;
  /* height: 20px; */
  stroke-width: 0.1; /* толщина линии */
  stroke: #bf6024;
}
.contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}
.appartments:first-child h3 {
  color: white;
}
.contacts_info {
  width: 510px;
  height: stretch;
  padding: 30px 0px 30px 30px;
  display: flex;
  gap: 28px;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  align-items: left;
  background-color: #eaedf2;
}
.contacts_info_btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}
.beige-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 144px;
  gap: 15px;
  color: #e5c6b2;
  font-weight: 700;
  padding: 5px 15px 5px 15px;
  border: 2px solid #e5c6b2;
  border-radius: 50px;
}
.orange-btn {
  padding: 5px 15px 5px 15px;
  background: #bf6024;
  border: 2px solid #bf6024;
  border-radius: 50px;
  color: #eaedf2;
}
</style>
