<template>
  <div class="main-wrapper">
    <Navbar></Navbar>
    <RouterView></RouterView>
    <FooterComponent></FooterComponent>
  </div>
</template>

<style>

</style>


<script>

import { RouterView } from 'vue-router'
import Navbar from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { RouterView, Navbar, FooterComponent }
}

</script>

  