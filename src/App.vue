<script setup lang="ts">
import { ref } from "vue";
const counter = ref(0);

function inc() {
  counter.value += 1;
}
</script>
<template>
  <div>
    <p v-if="1 > 2" class="font-weight-black" @click="inc">
      Cooming soon {{ counter }}
    </p>
  </div>
</template>
