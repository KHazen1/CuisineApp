<script setup>
import Title from "../components/Title.vue";
import List from "../components/List.vue";
</script>

<template>
<div class="min-h-screen bg-gray-200 ">
  <div class="container flex flex-col pt-8 mx-auto space-y-8">
    <Title />
    <div class="flex justify-around">
      <List />
      <List isCheckedOff />
    </div>
  </div>
</div>
</template>