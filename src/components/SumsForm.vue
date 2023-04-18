<script setup lang="ts">
import { ref, computed } from 'vue';
import { calculateSums } from '@/utils/calculateSums';
const sum = ref<number>();
const digits = ref<number>();
const combos = computed(() =>
  sum.value && digits.value ? calculateSums(sum.value, digits.value) : null
);
</script>

<template>
  <label for="sum">Target Sum</label>
  <input v-model.number="sum" id="sum" />

  <label for="digits">number of digits</label>
  <input v-model.number="digits" id="digits" />

  <ul v-if="combos">
    <li v-for="combo in combos" :key="combo.toString()">
      {{ combo.reduce((acc, val) => acc + val.toString(), '') }}
    </li>
  </ul>
</template>
