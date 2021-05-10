<template>
  <div>
    <CRow class="clapans">
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <div class="d-flex aligin-items-center justify-content-between">
              <span>История клапана: {{id}}</span>
            </div>
          </CCardHeader
          >
          <CCardBody>
            <CDataTable
                class="mb-0 table-outline"
                hover
                :items="tableItems"
                :fields="tableFields"
                head-color="light"
            >
              <td slot="select" slot-scope="{ item }">
                <CInputCheckbox
                    :value="item.select"
                    custom
                    inline
                    @change="isSelect = true"
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
                    @click="$router.push({path: '/dashboard/'+item.id})"
                ><CIcon name="cilSettings" class="mr-1"/> История
                </span>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChartExample from "./charts/MainChartExample";
import WidgetsDropdown from "./widgets/WidgetsDropdown";
import WidgetsBrand from "./widgets/WidgetsBrand";
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
      warning: false,
      success: false,
      alert_message: '',
      warningModal: false,
      isSelect: false,
      action_switcher: '',
      id: this.$route.params.id,
      tableItems: [],
      tableFields: [
        {key: "ID", label: "ID",},
        {key: "comment", label: "Комметарий"},
        {key: "date", label: "Дата", },
      ],
    };
  },
  mounted() {
    this.getResults();
  },
  methods: {
    getResults() {
      let app = this;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.auth.token;
      axios.get('/getcommentsbyID/'+ app.$route.params.id).then(response => {
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
  },
};
</script>
