<script setup lang="ts"></script>

<template>
  <div class="container">
    <h2>Проживание на курорте</h2>

    <div class="description">
      <span> Комфортное размещение</span> — важная часть вашего оздоровительного отдыха. Мы
      предлагаем уютные номера и апартаменты на любой вкус: от стандартных до просторных люксов с
      панорамными видами. Все варианты оснащены всем необходимым для полноценного восстановления и
      приятного пребывания. Выберите подходящий вариант по выгодной цене и забронируйте заранее,
      чтобы быть уверенными в идеальных условиях отдыха.
    </div>
    <MainRooms />
  </div>
</template>

<style scoped lang="scss">
// .container {
//   max-width: 1140px;
//   padding-bottom: 20px;
// }

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
// .appartments_block {
//   display: grid;
//   grid-auto-flow: column;
//   column-gap: 30px;
// }
// .appartments {
//     width: 530px;
//   height: 600px;
//   padding-left: 20px;
//   padding-bottom: 30px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   border-radius: 20px;
//   background: url('~/assets/images/appartment.png');
//   background-size: cover;
//   background-position: center center;
//   background-repeat: no-repeat;
//   align-items: left;
// }
// .appartments_button {
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   margin-bottom: 15px;
// }
// .contacts_info_chose {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   max-width: 144px;
//   gap: 15px;
//   color: #bf6024;
//   font-weight: 700;
//   padding: 5px 15px 5px 15px;
//   border: 2px solid #bf6024;
//   border-radius: 50px;
// }
// .contacts_info h3 span {
//   display: block;
//   margin-bottom: 5px;
// }
// .contacts_info h3 {
//   margin-bottom: 28px;
// }

// .arrow {
//   width: 40px;
//   /* height: 20px; */
//   stroke-width: 0.1; /* толщина линии */
//   stroke: #bf6024;
// }
// .contacts {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 30px;
// }
// .appartments:first-child h3 {
//   color: white;
// }
// .contacts_info {
//   width: 510px;
//   height: stretch;
//   padding: 30px 0px 30px 30px;
//   display: flex;
//   gap: 28px;
//   flex-direction: column;
//   justify-content: center;
//   border-radius: 20px;
//   align-items: left;
//   background-color: #eaedf2;
// }
// .contacts_info_btn {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 15px;
// }
// .beige-btn {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   max-width: 144px;
//   gap: 15px;
//   color: #e5c6b2;
//   font-weight: 700;
//   padding: 5px 15px 5px 15px;
//   border: 2px solid #e5c6b2;
//   border-radius: 50px;
// }
// .orange-btn {
//   padding: 5px 15px 5px 15px;
//   background: #bf6024;
//   border: 2px solid #bf6024;
//   border-radius: 50px;
//   color: #eaedf2;
// }
</style>
