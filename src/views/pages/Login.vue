<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <form v-on:submit="loginAuth">
                  <h1>Вход</h1>
                  <p class="text-muted">Введите свои данные, чтобы зайти в Ваш аккаунт</p>
                  <CInput
                      placeholder="Логин"
                      autocomplete="username email"
                      required
                      v-model="email"
                  >
                    <template #prepend-content>
                      <CIcon name="cil-user"/>
                    </template>
                  </CInput>
                  <CInput
                      placeholder="Пароль"
                      type="password"
                      autocomplete="curent-password"
                      required
                      v-model="password"
                  >
                    <template #prepend-content>
                      <CIcon name="cil-lock-locked"/>
                    </template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton type="submit" color="primary" class="px-4">Войти</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">


                    </CCol>
                  </CRow>
                </form>
              </CCardBody>
            </CCard>
            <CCard
                color="primary"
                text-color="white"
                class="text-center py-5 d-md-down-none"
                body-wrapper
            >
              <CCardBody>
                <h2>Регистрация</h2>
                <p>Обратитесь к главному менеджеру для регистрации.</p>

              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
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
import alert from '../../components/alert/alert-block';
import appRouter from '@/router'

const router = appRouter
const qs = require('qs')
const axios = require('axios')

export default {
  name: 'Login',
  data() {
    return {
      warning: false,
      success: false,
      alert_message: '',
      email: '',
      password: '',
      type: 1,
    };
  },
  methods: {
    loginAuth() {
      event.preventDefault();
      let app = this;
      axios(
          {
            method: 'post',
            url: '/token',
            data: qs.stringify({
              username: this.email,
              password: this.password
            }),
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
          .then(({data}) => {

            window.auth.login(data.access_token);
            router.push({path: '/dashboard'})
          }).catch(function (error) {
        app.success = true;
        app.alert_message = error.response.data.detail;
        setTimeout(function () {
          app.success = false;
        }, 3000)
      })
    }, showErrors: function (errors) {
      let app = this;
      this.errors = errors;
      setTimeout(function () {
        app.errors = {};
      }, 3000)
    },
    showSuccess: function (message) {
      let app = this;
      app.success = message;
      setTimeout(function () {
        app.success = '';
      }, 3000)
    },
  },
  components: {
    alert,
  }
}
</script>
<style>

.alert_block {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>
