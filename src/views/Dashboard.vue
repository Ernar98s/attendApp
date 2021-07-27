<template>
  <div>
    <h4 style="text-align: center">
      Первый государственный университет г. Жезказган
    </h4>

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

    <table id="customers">
      <tr>
        <th>Аудитория</th>
        <th>Дата</th>
        <th>Статус</th>
      </tr>
      <tr>
        <td>Аудитория №5</td>
        <td>24.07.2021</td>
        <td>Посещал</td>
      </tr>
      <tr>
        <td>Аудитория №2</td>
        <td>25.07.2021</td>
        <td>Посещал</td>
      </tr>
      <tr>
        <td>Аудитория №2</td>
        <td>26.07.2021</td>
        <td>Посещал</td>
      </tr>
    </table>
  </div>
</template>



<script>
export default {
  data() {
    return {
      warningModal: false, // модалка открывается при True
      dangerModal: false, // модалка открывается при True
    };
  },

  created() {

    // Pri zapuske proverka (esli nuzhno)
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + window.localStorage.getItem("token");
    axios({
      method: "get",
      url: "/api/",
    })
      .then((res) => {
        console.log(res.data);

      })
      .catch(function (error) {});
  },

  methods: {
    // metody kotorye nuzhno vyzyvat na sobytie

    getData(reason, days, time) {
      console.log(reason, days, time);
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + window.localStorage.getItem("token");
      axios({
        method: "post",
        url:
          "/api/"
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch(function (error) {});
    },
  },
};
</script>

<style scoped>
button {
  color: white;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-right: 15px;
}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>