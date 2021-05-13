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
      cities: [{value: 1, label: 'Павлодар'}, {value: 2, label: 'Астана'}],
      districts: [{value: 1, label: 'Сарыаркинский'}, {value: 2, label: 'Есиль'}],
      streets: [{value: 1, label: 'Сарыаркинский'}, {value: 2, label: 'Есиль'}],
      buildings: [{value: 1, label: 'Сарыаркинский'}, {value: 2, label: 'Есиль'}],
      houses: [{value: 1, label: '1'}, {value: 2, label: '2'}],
      entrances: [{value: 1, label: '1'}, {value: 2, label: '2'}],

    };
  },
};
</script>
