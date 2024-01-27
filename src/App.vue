<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import HeroBanner from "@/components/HeroBanner.vue";
</script>

<template>
  <NavBar />
  <main>
    <HeroBanner />
    <div id="router-div">
      <RouterView />
    </div>

    <!-- <button @click="$sharedMethods.navigateTo('/about')">Test </button> -->
  </main>
  <Footer />
</template>

<style scoped>
#router-div {
  height: 100vh;
}
</style>
