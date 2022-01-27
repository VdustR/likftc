<script lang="ts" setup>
import useFrame from "./useFrame";

const frame = useFrame();
</script>

<template>
  <transition-group name="list-complete" tag="ul">
    <li v-for="item in frame" :key="item" class="list-complete-item">
      {{ item }}
    </li>
  </transition-group>
</template>

<style scoped lang="css" src="./style.css"></style>
