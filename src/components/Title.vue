<script setup>
import { ref } from "vue";
import useList from "../composable/useList";

const {addItem} = useList();

const newItem = ref(""); 
const add = () => {
  if (newItem.value) {
    addItem(newItem.value);
    newItem.value = "";
  }
};
</script>

<template>
    <h1 class="pb-4 text-6xl font-thin tracking-tight text-center text-green-800"> 🧑‍🍳 Shopping List 🥘 </h1>
    <input
     @change="add"
     v-model="newItem"
     type="text" class="px-4 py-2 mx-12 text-xl text-center rounded-lg" placeholder="Grocery Item"
    >
</template>