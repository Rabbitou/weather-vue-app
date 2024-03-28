<script setup lang="ts">
import { WeatherResponse } from "../types/weather";
import WindIcon from "./IconWind.vue";
import HumidityIcon from "./IconHumidity.vue";
const props = defineProps<{
  data: WeatherResponse;
}>();
const WEATHER_ICON = "https://openweathermap.org/img/wn";
</script>

<template>
  <section
    className="flex flex-col justify-center items-center mt-4 text-center"
  >
    <div className="w-40 h-40">
      <img
        :src="`${WEATHER_ICON}/${props.data.weather[0].icon}@4x.png`"
        alt=""
      />
    </div>
    <div>
      <div className="text-6xl font-bold mb-2 flex justify-center">
        {{ Math.ceil(props.data.main.temp) }}
        <span className="text-xl">&deg;C</span>
      </div>
      <div>
        <span className="text-xl opacity-85 capitalize">
          {{ props.data.weather[0].description }}
        </span>
      </div>
    </div>
    <div className="mt-8 flex gap-10">
      <div className="flex items-center gap-4 justify-center">
        <div className="w-12 h-12">
          <HumidityIcon />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl opacity-70">
            {{ Math.ceil(props.data.main.humidity) }}%
          </span>
          <span className="text-sm opacity-40">Humidity</span>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <div className="w-12 h-12">
          <WindIcon />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl opacity-70">
            {{ Math.ceil(props.data.wind.speed * 3.6) }} km/h
          </span>
          <span className="text-sm opacity-40">Wind Pressure</span>
        </div>
      </div>
    </div>
  </section>
</template>
