<template>
<div class="wrapper">
    <Navbar></Navbar>
    <div class="content">
      <RouterView></RouterView>
    </div>
    <div class="footer">
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<style>
</style>

<script>
// import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { Navbar, FooterComponent }
}
</script>
