<template>
  <CRow>
    <CCol md="12">
      <CCard>
        <CCardHeader>
          <div class="d-flex aligin-items-center justify-content-between">
            <span> Настройки </span>
          </div>
        </CCardHeader>
        <CCardBody>
          <pre>
          </pre>
          <CSelect
              horizontal
              label="Город"
              :value.sync="setting.city"
              :options="cities"
              class="col-4"
          />
          <CSelect
              horizontal
              label="Район"
              :value.sync="setting.district"
              :options="districts"
              class="col-4"
          />
          <CSelect
              horizontal
              label="Улица"
              :value.sync="setting.street"
              :options="streets"
              class="col-4"
          />
          <CSelect
              horizontal
              label="Наименование строения"
              :value.sync="setting.building"
              :options="buildings"
              class="col-4"
          />
          <CSelect
              horizontal
              label="Дом"
              :value.sync="setting.house"
              :options="houses"
              class="col-4"
          />
          <CSelect
              horizontal
              label="Подъезд"
              :value.sync="setting.entrance"
              :options="entrances"
              class="col-4"
          />
          <CSelect
              horizontal
              label="День недели ТО"
              :value.sync="setting.repairday"
              :options="entrances"
              class="col-4"
          />          
          <CSelect
              horizontal
              label="Время ТО"
              :value.sync="setting.repairtime"
              :options="entrances"
              class="col-4"
          />           
            <CButton color="success" type="submit">
              Сохранить
            </CButton>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      setting: {},
      warning: false,
      success: false,
      alert_message: '',
      warningModal: false,
      isSelect: false,
      action_switcher: '',
      action_switcher_city: '',
      id: "",
      cities: [{value: 1, label: 'Алматы'}, {value: 2, label: 'Астана'}],
      districts: [{value: 1, label: 'Бостандыкский'}, {value: 2, label: 'Есиль'}],
      streets: [{value: 1, label: 'Гагарина'}, {value: 2, label: 'Кунаева'}],
      buildings: [{value: 1, label: 'Гагарин Парк'}, {value: 2, label: 'Водно-Зеленый бульвар'}],
      houses: [{value: 1, label: '271'}, {value: 2, label: '12/2'}],
      entrances: [{value: 1, label: '1'}, {value: 2, label: '2'}],
      repairday: [{value: 1, label: 'Пн'}, {value: 2, label: 'Вт'}, {value: 3, label: 'Ср'}, {value: 4, label: 'Чт'}, {value: 5, label: 'Пт'}, {value: 6, label: 'Сб'}, {value: 7, label: 'Вс'}],
      repairtime: [{value: 1, label: 'Пн'}, {value: 2, label: '00:00 - 02:00'}, {value: 3, label: '02:00 - 04:00'}, {value: 4, label: '04:00 - 06:00'}, {value: 5, label: '06:00 - 08:00'}],     

    };
  },
};
</script>
