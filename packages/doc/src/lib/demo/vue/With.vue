<script lang="ts" setup>
import Likftc from "@likftc/core";
import { computed, watch } from "vue";
import useFrame from "./useFrame";

let frame = useFrame();

const { get, sync } = Likftc(frame.value);
watch(frame, () => {
  sync(frame.value);
});
</script>

<template>
  <transition-group name="list-complete" tag="ul">
    <li
      v-for="item in frame"
      :key="get(item)"
      class="list-complete-item"
    >
      {{ item }}
    </li>
  </transition-group>
</template>

<style scoped lang="css" src="./style.css"></style>
