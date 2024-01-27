<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue"
</script>

<template>
  <NavBar />
  <main>
  
    <div id="router-div">
      <RouterView />
    </div>

    <!-- <button @click="$sharedMethods.navigateTo('/about')">Test </button> -->
  </main>
</template>

<style scoped></style>
