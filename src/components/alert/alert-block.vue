<template>
  <div class="alert_block">
    <CAlert color="primary">
      This is info alert.
    </CAlert>
    <CAlert color="warning" closeButton>
      This is warning dismissible alert.
    </CAlert>
  </div>
</template>
<script>
export default {
  props: {
    errors: '',
    success: '',
    type: '',
  },

};
</script>
