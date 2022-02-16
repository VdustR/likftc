<script lang="ts" setup>
import useLikftc from "@likftc/vue";
import useFrame from "./useFrame";
import { v4 } from "uuid";

let frame = useFrame();
const { get } = useLikftc(frame, v4);
</script>

<template>
  <transition-group name="list-complete" tag="ul">
    <li v-for="item in frame" :key="get(item)" class="list-complete-item">
      {{ item }}
    </li>
  </transition-group>
</template>

<style scoped lang="css" src="./style.css"></style>
