<template>
  <div>
    <h4 style="text-align: center">
      Первый государственный университет г. Жезказган
    </h4>
    <select class="custom-select" id="inputGroupSelect01">
      <option selected>Выберите факультет...</option>
      <option value="1">Инженерный</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <select class="custom-select" id="inputGroupSelect01">
      <option selected>Выберите Кабинет/Аудиторию...</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <select class="custom-select" id="inputGroupSelect01">
      <option selected>Выберите Предмет...</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <CButton @click="warningModal = true" color="warning">
      Открыть уведомление
    </CButton>

    <CButton @click="dangerModal = true" color="danger">
      Открыть уведомление
    </CButton>

    <CModal title="Уведомление" color="warning" :show.sync="warningModal">
      Уверены что хотите покинуть Аудиторию?
    </CModal>

    <CModal title="Уведомление" color="danger" :show.sync="dangerModal">
      Вы покинули Аудиторию
    </CModal>

  </div>
</template>

<script>
export default {
  data() {
    return {
      warningModal: false,
      dangerModal: false,
    };
  },
};
</script>

<style scoped>
select {
  margin: 25px 0;
}

button{
  margin-right: 15px;
}
</style>