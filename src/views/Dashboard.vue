<template>
  <div>
    <WidgetsDropdown/>
    <CRow class="clapans">
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <div class="d-flex aligin-items-center justify-content-between">
              <span>Клапаны</span>
              <div>
                <CButton color="success" class="mr-2" @click="downloadArray">
                  Скачать историю клапана в csv
                </CButton>
                <CButton color="success" @click="warningModal = !warningModal">
                  Добавить
                </CButton>
              </div>
            </div>
          </CCardHeader
          >
          <CCardBody>
            <div class="d-flex aligin-items-center justify-content-between">
              <CSelect
                  v-if="isSelect"
                  horizontal
                  label="Действие на выбор"
                  :value.sync="action_switcher"
                  :options="['Не выбрано','Включить отмеченные','Отключить отмеченные']"
                  v-on:change="actionSwitcher()"
                  class="col-4"
              />
              <CSelect
                  horizontal
                  label="Город"
                  :options="cities_name"
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

              <td slot="select" slot-scope="{ item,index }">
                <input type="checkbox"
                       v-model="item.select"
                       custom
                       inline
                       @change="actionSelectChange(index)"
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
                {{ item.typeofbuilding }}
              </td>
              <td slot="numHouse" slot-scope="{ item }">
                {{ item.buildingnum }}
              </td>
              <td slot="numDoor" slot-scope="{ item }">
                {{ item.entrancenum }}
              </td>
              <td slot="numMine" slot-scope="{ item }">
                {{ item.shaftnum }}
              </td>
              <td slot="stage" slot-scope="{ item }">
                {{ item.floor }}
              </td>
              <td slot="numOffice" slot-scope="{ item }">
                {{ item.aptoroffice }}
              </td>
              <td slot="id" slot-scope="{ item }">
                {{ item.valveID }}
              </td>
              <td slot="status" slot-scope="{ item,index}">
                <span class="badge" :class="'badge-'+colorStatus(item.status)">{{ textStatus(item.status) }}</span>
                <br/>
                <CSwitch
                    class="mt-1"
                    color="primary"
                    :checked.sync="item.status==1"
                    :value="item.status"
                    @update:checked="actionStatusChange(item,index)"
                />
              </td>
              <td slot="settings" slot-scope="{ item }">
                <span
                    style="white-space: nowrap; cursor: pointer"
                    class="d-flex align-items-center"
                    @click="warningModal = !warningModal"
                ><CIcon name="cilSettings" class="mr-1"/> Настройки
                </span>
                <span
                    style="white-space: nowrap; cursor: pointer"
                    class="d-flex align-items-center"
                    @click="$router.push({path: '/dashboard/'+item.valveID})"
                ><CIcon name="cilSettings" class="mr-1"/> История
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
            <CSelect horizontal label="Улица" :value.sync="setting.street" :options="streets"/>
            <CInput type="text" v-model="setting.street" label="Свой вариант" horizontal
            />
            <CSelect horizontal label="Дом" :value.sync="setting.house" :options="houses"/>
            <CInput type="text" v-model="setting.house" label="Свой вариант" horizontal
            />
            <CSelect horizontal label="Подъезд" :value.sync="setting.entrancenum" :options="entrances"/>
            <CInput type="text" v-model="setting.entrancenum" label="Свой вариант" horizontal
            />
            <CSelect horizontal label="Шахта" :value.sync="setting.shaftnum" :options="shaftnums"/>
            <CInput type="text" v-model="setting.shaftnum" label="Свой вариант" horizontal
            />
            <CSelect horizontal label="Этаж" :value.sync="setting.floor" :options="floors"/>
            <CInput type="text" v-model="setting.floor" label="Свой вариант" horizontal
            />
            <CSelect horizontal label="Квартира" :value.sync="setting.aptoroffice" :options="aptoroffices"/>
            <CInput type="text" v-model="setting.aptoroffice" label="Свой вариант" horizontal
            />
            <CSelect horizontal label="Юр./физ. лицо" :value.sync="setting.iscompany" :options="types"/>
            <CInput type="text" v-model="setting.ownername" label="ФИО" horizontal
            />
            <CInput type="text" v-model="setting.ownercontacts" label="Контакты"
                    horizontal
            />
            <CInput type="text" v-model="setting.ownerID" label="ИИН/БИН" horizontal
            />
            <CInput type="text" v-model="setting.district" label="Район" horizontal
            />
            <CInput type="text" v-model="setting.typeofbuilding" label="Тип здания"
                    horizontal
            />
            <CInput type="text" v-model="setting.buildingnum" label="Номер здания" horizontal
            />
            <CInput type="text" v-model="setting.buildingname" label="Название здания"
                    horizontal
            />
            <CInput type="text" v-model="setting.masterID" label="ID Мастера" horizontal
            />
            <CInput type="text" v-model="setting.masterhubID" label="ID Мастер Хаба" horizontal
            />
            <CInput type="text" v-model="setting.ownercontacts" label="Номер договора"
                    horizontal
            />
            <CSelect horizontal label="Тип оплаты" :value.sync="setting.payment" :options="payments"/>
            <CButton color="success" type="submit">
              Изменить
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
import MainChartExample from "./charts/MainChartExample";
import WidgetsDropdown from "./widgets/WidgetsDropdown";
import WidgetsBrand from "./widgets/WidgetsBrand";
import downloadCsv from 'download-csv';

const qs = require('qs')
const axios = require('axios')
export default {
  name: "Dashboard",
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand,
  },
  data() {
    return {
      cities_name: '',
      cities_arr: '',
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
        {key: "select", label: "Выбор", sorter: false, filter: false},
        {key: "status", label: "Статус клапана", filter: false},
        {key: "city", label: "Город "},
        {key: "district", label: "Район ", _classes: "text-center"},
        {key: "street", label: "Улица "},
        {key: "typeofbuilding", label: "Вид здания"},
        {key: "buildingnum", label: "Номер дома "},
        {key: "entrancenum", label: "Номер подъезда "},
        {key: "shaftnum", label: "Номер шахты "},
        {key: "floor", label: "Этаж"},
        {key: "aptoroffice", label: "Кв/офис"},
        {key: "valveID", label: "ID клапана"},
        {key: "settings", label: "Действия", sorter: false, filter: false},
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
    let city = auth.cities();
    this.cities_name = city.cities_name;
    this.cities_arr = city.cities;
    this.getResults(1);
  },
  methods: {
    downloadArray() {
      const datas = this.tableItems
      const columns = {
        select: "Выбор",
        status: "Статус клапана",
        city: "Город ",
        district: "Район ",
        street: "Улица ",
        typeofbuilding: "Вид здания",
        buildingnum: "Номер дома ",
        entrancenum: "Номер подъезда ",
        shaftnum: "Номер шахты ",
        floor: "Этаж",
        aptoroffice: "Кв/офис",
        valveID: "ID клапана",
        settings: "Действия",
      };
      downloadCsv(datas, columns);
    },
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
            url: '/addvalve/',
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
      this.getResults(this.cities_arr[this.action_switcher_city]);
    },
    getResults(city) {
      let app = this;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.auth.token;
      axios.get('/getvalvesbycity/' + city).then(response => {
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
    actionStatusChange(item, index) {
      let app = this;
      var status = app.tableItems[index].status == 1 ? '/turnoff/' : '/turnon/';
      var status_id = app.tableItems[index].status == 1 ? '0' : '1';
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.auth.token;
      axios(
          {
            method: 'post',
            url: status,
            data: qs.stringify({
              device_id: item.valveID,
            }),
          })
          .then(({data}) => {
            app.tableItems[index].status = status_id;
            app.success = true;
            app.alert_message = data.responce;
            setTimeout(function () {
              app.success = false;
            }, 3000)

          }).catch(function (error) {

      })
    },
    colorStatus(value) {
      var color = 'danger';
      if (value == 0) {
        color = 'danger';
      } else if (value == 1) {
        color = 'success';
      } else if (value == 2) {
        color = 'warning';
      } else {
        color = 'warning';
      }
      return color;
    },
    textStatus(value) {
      var color = 'Выключен';
      if (value == 1) {
        color = 'Отключен';
      } else if (value == 2) {
        color = 'Отключается';
      } else if (value == 3) {
        color = 'Сломался';
      } else if (value == 4) {
        color = 'Включается';
      } else if (value == 5) {
        color = 'Включен';
      } else {
        color = 'Выключен';
      }
      return color;
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
