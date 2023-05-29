<template>
  <div class="toast-container custom-toast-container position-fixed end-0">
    <div
      id="toastMessage"
      ref="toastMessage"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <strong class="me-auto">{{ title }}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['title', 'message']
}
</script>

<style>
.custom-toast-container {
  position: absolute;
  top: 66px !important;  /* 自定义上边距 */
  right: 0px !important; /* 自定义右边距 */
}
</style>