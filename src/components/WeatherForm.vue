<script setup lang="ts">
import { ref } from "vue";
import { WeatherResponse } from "../types/weather";
import Loader from "./Loader.vue";
import IconSearch from "./IconSearch.vue";
import { getWeatherByName } from "../action/index";
import WeatherCard from "./WeatherCard.vue";

const value = ref("");
const data = ref<WeatherResponse | null>(null);
const isLoading = ref(false);
const error = ref("");

const onSubmit = async () => {
  if (!value) return;

  if (error) error.value = "";
  try {
    isLoading.value = true;
    const res = await getWeatherByName({ location: value.value });
    data.value = res;
  } catch (er) {
    if (data) data.value = null;
    error.value = "Something went wrong !";
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div
    className="max-w-[450px] w-full p-4 rounded-md border border-gray-800 bg-gray-900"
  >
    <form className="flex gap-2" @submit.prevent="onSubmit">
      <input
        type="text"
        v-model="value"
        className="bg-transparent border border-gray-700 outline-none rounded-md w-full h-10 px-2"
      />
      <button
        className="h-10 flex items-center justify-center bg-gray-800 w-10 rounded-md hover:bg-gray-700 transition-all"
        type="submit"
        v-bind:disabled="isLoading"
      >
        <Loader v-if="isLoading" /> <IconSearch v-if="!isLoading" />
      </button>
    </form>
    <span v-if="error" className="block text-sm mt-2 text-red-500">{{
      error
    }}</span>
    <WeatherCard v-if="data" :data="data" />
  </div>
</template>
