<script lang="ts" setup>
import TheNavigation from "../components/TheNavigation.vue";
</script>
<template>
  <v-app>
    <the-navigation />
    <v-main>
      <v-container class="py-8 px-6" fluid> <slot></slot></v-container>
    </v-main>
  </v-app>
</template>
