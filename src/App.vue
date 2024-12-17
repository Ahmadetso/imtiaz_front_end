<script setup>
import SideBar from './components/SideBarComponents/SideBar.vue'
import MainContent from './components/ContentComponents/MainContent.vue'
</script>

<template>
  <main class="grid rtl:grid-cols-[256px_1fr] h-screen" dir="rtl">
    <side-bar />
    <MainContent class="" />
  </main>
</template>

<style scoped></style>
