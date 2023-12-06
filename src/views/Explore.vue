<script setup lang="ts">
import { runnerStore } from "@/store/runnerStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import Runner from "@/components/Runner.vue";

const route: RouteLocationNormalizedLoaded = useRoute();
const runnerId: string = route.params.id as string;

const { getRunnerById } = storeToRefs(runnerStore());

const runner = getRunnerById.value(runnerId);
onMounted(() => {
  console.log(route.params.id);
});
</script>

<template>
  <div
    class="bg-gray-900 px-6 py-8 text-white max-w-md w-full m-auto h-80 mt-8"
    v-if="runner"
  >
    <Runner
      :name="runner.name"
      :tag="runner.tag"
      :color="runner.color"
      :criterias="runner.criteria"
    />
  </div>
</template>

<style scoped></style>
