<script lang="ts" setup>
import Likftc from "@vdustr/likftc";
import { computed, watch } from "vue";
import useFrame from "./useFrame";

function itemToKey(item: number) {
  return String(item);
}
let frame = useFrame();
const keys = computed(() => frame.value.map(itemToKey));

const { get, sync } = Likftc(keys.value);
watch(keys, () => {
  sync(keys.value);
});
</script>

<template>
  <transition-group name="list-complete" tag="ul">
    <li
      v-for="item in frame"
      :key="get(itemToKey(item))"
      class="list-complete-item"
    >
      {{ item }}
    </li>
  </transition-group>
</template>

<style scoped lang="css" src="./style.css"></style>
