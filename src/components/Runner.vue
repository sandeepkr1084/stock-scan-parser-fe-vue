<script setup lang="ts">
import { Criteria } from "@/store/runnerStore/interfaces";
import { getText } from "@/utility/helper";

defineProps({
  name: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  criterias: {
    type: Array<Criteria>,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="bg-cyan-500 p-3">
    <div class="header">
      {{ name }}
    </div>
    <div class="text-xs" :style="{ color: color }">
      {{ tag }}
    </div>
  </div>
  <div class="body-section" v-for="(criteria, index) in criterias">
    <div v-html="getText(criteria)" class="mt-2"></div>
    <div v-if="index < criterias.length - 1" class="text-xs mt-2">and</div>
  </div>
</template>

<style scoped></style>
