<template>
  <div>
    <CRow>
      <CCol md="12">
        <CCard class="clapans">
          <CCardHeader>
            <div class="d-flex aligin-items-center justify-content-between">
              <span>Мастеры</span>
              <CButton color="success" @click="warningModal = !warningModal">
                Добавить
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <div class="d-flex aligin-items-center justify-content-between">
              <CSelect
                  v-if="isSelect"
                  horizontal
                  label="Действие на выбор"
                  :value.sync="action_switcher"
                  :options="['Не выбрано ничего','Включить отмеченные','Отключить отмеченные']"
                  v-on:change="actionSwitcher()"
                  class="col-4"
              />
              <CSelect
                  horizontal
                  label="Город"
                  :options="['Алматы', 'Астана']"
                  :value.sync="action_switcher_city"
                  v-on:change="actionSwitcherCity()"
                  class="col-4"
              />
            </div>
            <CDataTable
                class="mb-0 table-outline"
                hover
                :items="tableItems"
                :fields="tableFields"
                head-color="light"
                column-filter
                table-filter
                sorter
                :tableFilter="{'label':'Поиск','placeholder':'Введите слово для поиска'}"
            >
              <template #select-filter="{item}">
                <CInputCheckbox
                    :value.sync="all_select"
                    custom
                    inline
                    @change="allSelect()"
                />
              </template>
              <td slot="select" slot-scope="{ item,index  }">
                <CInputCheckbox
                    :value.sync="item.select"
                    custom
                    inline
                    @change="actionSelectChange(item,index )"
                />
              </td>
              <td slot="city" slot-scope="{ item }">
                {{ item.city }}
              </td>
              <td slot="district" slot-scope="{ item }">
                {{ item.district }}
              </td>
              <td slot="street" slot-scope="{ item }">
                {{ item.street }}
              </td>
              <td slot="building" slot-scope="{ item }">
                {{ item.buildingname }}
              </td>
              <td slot="numHouse" slot-scope="{ item }">
                {{ item.buildingnum }}
              </td>
              <td slot="numHouse" slot-scope="{ item }">
                {{ item.entrancenum }}
              </td>
              <td slot="status" slot-scope="{ item }">
                <CBadge v-if="item.status==0" color="danger">
                  выключен
                </CBadge
                >
                <CBadge v-else-if="item.status==1" color="success">включен</CBadge>
                <CBadge v-else-if="item.status==2" color="warning">нет данных</CBadge>
                <CBadge v-else color="info">не известно</CBadge>
                <br/>
                <CSwitch
                    class="mt-1"
                    color="primary"
                    :checked.sync="item.status==1"
                    :value="item.status"
                    @update:checked="actionStatusChange(item)"
                />
              </td>
              <td slot="settings" slot-scope="{ item, index }">
              <span
                  style="white-space: nowrap; cursor: pointer"
                  class="d-flex align-items-center"
                  @click="warningModal = !warningModal"
              ><CIcon name="cilSettings" class="mr-1"/> Настройки
              </span>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CModal title="Настройки" :show.sync="warningModal">
      <CCard>

        <CCardBody>
          <CForm v-on:submit="submitForm()">
            <CSelect horizontal label="Город" :value.sync="setting.city" :options="cities"/>
            <CInput type="text" v-model="setting.city" label="Свой вариант" horizontal
                    />
            <CInput type="text" v-model="setting.district" label="Район" horizontal
                    />
            <CSelect horizontal label="Улица" :value.sync="setting.street" :options="streets"/>
            <CInput type="text" v-model="setting.street" label="Свой вариант" horizontal
                    />
            <CInput type="text" v-model="setting.typeofbuilding" label="Тип здания"
                    horizontal
                    />

            <CInput type="text" v-model="setting.buildingnum" label="Номер здания"
                    horizontal
                    />


            <CSelect horizontal label="Подъезд" :value.sync="setting.entrancenum" :options="entrances"/>
            <CInput type="text" v-model="setting.entrancenum" label="Свой вариант" horizontal
                    />
            <CInput type="text" v-model="setting.buildingname" label="Свой вариант"
                    horizontal
                    />

            <CButton color="success" type="submit">
              Добавить
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CModal>
    <div class="alert_block">
      <CAlert color="warning" closeButton v-if="warning">
        {{ alert_message }}
      </CAlert>
      <CAlert color="primary" closeButton v-if="success">
        {{ alert_message }}
      </CAlert>
    </div>
  </div>
</template>

<script>
const qs = require('qs')
const axios = require('axios')
export default {
  name: "MasterHubs",
  data() {
    return {
      all_select: false,
      warning: false,
      success: false,
      alert_message: '',
      warningModal: false,
      isSelect: false,
      action_switcher: '',
      action_switcher_city: '',
      id: "",
      tableItems: [],
      tableFields: [
        {key: "select", label: "Выбор"},
        {key: "masterhubID", label: "ID мастер хаба"},
        {key: "city", label: "Город "},
        {key: "district", label: "Район ", _classes: "text-center"},
        {key: "street", label: "Улица "},
        {key: "typeofbuilding", label: "Вид здания"},
        {key: "buildingnum", label: "Номер дома "},
        {key: "entrancenum", label: "Номер подъезда "},
        {key: "status", label: "Статус"},
        {key: "settings", label: "Действия"},
      ],
      setting: {},
      cities: [{value: 'Павлодар', label: 'Павлодар'}, {value: 'Астана', label: 'Астана'}],
      districts: [{value: 'Сарыаркинский', label: 'Сарыаркинский'}, {value: 'Есиль', label: 'Есиль'}],
      streets: [{value: 'Сарыаркинский', label: 'Сарыаркинский'}, {value: 'Есиль', label: 'Есиль'}],
      buildings: [{value: 'Сарыаркинский', label: 'Сарыаркинский'}, {value: 'Есиль', label: 'Есиль'}],
      houses: [{value: 1, label: '1'}, {value: 2, label: '2'}],
      entrances: [{value: 1, label: '1'}, {value: 2, label: '2'}],
      aptoroffices: [{value: 1, label: '1'}, {value: 2, label: '2'}],
      shaftnums: [{value: 1, label: '1'}, {value: 2, label: '2'}],
      floors: [{value: 1, label: '1'}, {value: 2, label: '2'}],
      types: [{value: 1, label: 'Физ лицо'}, {value: 2, label: 'Юр лицо'}],
      payments: [{value: 1, label: '1'}, {value: 2, label: '2'}],
    };
  },
  mounted() {
    this.getResults(0);
  },
  methods: {
    allSelect() {
      let app = this;
      app.isSelect = true;
      for (var i = 0; i < app.tableItems.length; i++) {
        if (app.all_select == false) {
          this.tableItems[i].select = true;
          this.tableItems[i].street = this.tableItems[i].street + ' ';
        } else {
          this.tableItems[i].select = false;
          this.tableItems[i].street = this.tableItems[i].street + ' ';
        }
      }
      app.all_select = app.all_select == true ? false : true;
    },
    submitForm() {
      event.preventDefault();
      let app = this;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.auth.token;
      axios(
          {
            method: 'post',
            url: '/addmasterhub/',
            data: qs.stringify(this.setting),
          })
          .then(({data}) => {
            app.warningModal = false;
            app.success = true;
            app.alert_message = 'Успешно добавлено';
            app.setting = {};
            setTimeout(function () {
              app.success = false;
            }, 3000)
          }).catch(function (error) {
        app.warning = true;
        app.alert_message = error.response.data.detail;
        setTimeout(function () {
          app.warning = false;
        }, 3000)

      })
    },
    actionSelectChange(value) {
      let app = this;
      app.isSelect = true;
      if (app.tableItems[value].select == false) {
        app.tableItems[value].select = true;
        app.tableItems[value].street = this.tableItems[value].street + ' ';
      } else {
        app.tableItems[value].select = false;
        app.tableItems[value].street = this.tableItems[value].street + ' ';
      }
    },
    actionSwitcher() {
      let app = this;
      for (var i = 0; i < app.tableItems.length; i++) {
        if (app.tableItems[i].select == true) {
          if (this.action_switcher == 'Включить отмеченные') {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.auth.token;
            axios(
                {
                  method: 'post',
                  url: '/turnon/',
                  data: qs.stringify({
                    device_id: app.tableItems[i].valveID,
                  }),
                })
                .then(({data}) => {
                  app.success = true;
                  app.alert_message = data.responce;
                  setTimeout(function () {
                    app.success = false;
                  }, 3000)

                }).catch(function (error) {

            })
          } else if (this.action_switcher == 'Отключить отмеченные') {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.auth.token;
            axios(
                {
                  method: 'post',
                  url: '/turnoff/',
                  data: qs.stringify({
                    device_id: app.tableItems[i].valveID,
                  }),
                })
                .then(({data}) => {
                  app.success = true;
                  app.alert_message = data.responce;
                  setTimeout(function () {
                    app.success = false;
                  }, 3000)

                }).catch(function (error) {

            })
          } else {

          }

        }
      }
    },
    actionSwitcherCity() {
      if (this.action_switcher_city == 'Астана') {
        this.getResults(1);
      } else {
        this.getResults(0);
      }
    },
    actionStatusChange(item) {
      let app = this;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.auth.token;
      axios(
          {
            method: 'post',
            url: '/turnon/',
            data: qs.stringify({
              device_id: item.valveID,
            }),
          })
          .then(({data}) => {
            app.success = true;
            app.alert_message = data.responce;
            setTimeout(function () {
              app.success = false;
            }, 3000)

          }).catch(function (error) {

      })
    },
    getResults(city) {
      let app = this;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.auth.token;
      axios.get('/getmasterhubbycity/' + city).then(response => {
        app.tableItems = response.data;
        for (var i = 0; i < app.tableItems.length; i++) {
          app.tableItems[i].select = false;
        }
      }).catch(error => {
        if (error.response.status == 401) {
          window.auth.logout();
        }
      });
    },
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    },
  },
};
</script>
<style>
.clapans .form-inline {
  margin-left: 15px;
}

.alert_block {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 100000;
}
</style>
