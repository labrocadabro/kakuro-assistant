<script setup lang="ts">
import { ref, computed } from 'vue';
import { calculateSums, minSum, maxSum } from '@/utils/calculateSums';
const sum = ref<number>();
const digits = ref<number>();
const combos = computed(() =>
  sum.value && digits.value ? calculateSums(sum.value, digits.value) : null
);
const min = computed(() => (digits.value ? minSum(digits.value) : null));
const max = computed(() => (digits.value ? maxSum(digits.value) : null));
</script>

<template>
  <div>
    <label for="digits">How many numbers?</label>
    <input v-model.number="digits" id="digits" />
  </div>
  <div>
    <label for="sum">What do the numbers add to?</label>
    <input v-model.number="sum" id="sum" />
  </div>

  <ul v-if="combos">
    <li v-for="combo in combos" :key="combo.toString()">
      {{ combo.reduce((acc, val) => acc + val.toString(), '') }}
    </li>
  </ul>
  <p v-if="digits">With {{ digits }} numbers, the sum must be between {{ min }} and {{ max }}</p>
</template>
