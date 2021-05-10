<template>
  <div class="alert_block">
    <ul v-if="errors">
      <li class="alert_item alert_danger" v-for="(error) in errors">
        <div class="alert_text">
          <p v-html="error[0]"></p>
        </div>
      </li>
    </ul>
    <ul>
      <li class="alert_item alert_success" v-if="success.length">
        <p class="alert_text">
          {{ success }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    errors: {},
    success: ''
  },

};
</script>
