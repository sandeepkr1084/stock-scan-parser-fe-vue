<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { runnerStore } from "@/store/runnerStore"
import { onMounted } from 'vue';

const {getList} = storeToRefs(runnerStore())
const {setRunners} = runnerStore()

onMounted(() => {
  setRunners()
})
</script>

<template>
  <div class="flex items-center">
    <div class="bg-gray-900 px-6 py-8 text-white max-w-md w-full m-auto h-80 mt-8">
      <ul class="text-left mb-4">
      <li class="border-b border-dotted border-b-white" v-for="l in getList">
          <router-link :to="'/explore/'+l.id">
          <div>{{ l.name }}</div>
          <div class="subtext text-xs" :style="{color: l.color}">{{ l.tag }}</div>
        </router-link>
      </li>
      
    </ul>
    </div>
    
  </div>
  <RouterView />
</template>

<style scoped></style>
