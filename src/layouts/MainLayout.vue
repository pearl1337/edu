<script lang="ts" setup>
import TheNavigation from "../components/TheNavigation.vue";
</script>
<template>
  <v-app>
    <the-navigation />
    <v-main>
      <v-container class="py-8 px-6" fluid> </v-container>
      <slot></slot>
    </v-main>
  </v-app>
</template>
