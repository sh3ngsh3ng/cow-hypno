<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main>
    <div id="router-div">
      <RouterView />
    </div>
    <button class="btn btn-primary">Testing</button>
  </main>
</template>

<style scoped></style>
