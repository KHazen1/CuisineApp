<script setup>
    import useList from "../composable/useList"
  const { needed, checked, changeStatus } = useList()
  defineProps({
    isCheckedOff: {
      default: false,
      type: Boolean,
    },
  })
</script>

<template>
     <div class="w-1/3">
        <h3 class="text-2xl text-center"
        :class="isCheckedOff ? 'text-red-600' : 'text-blue-600'" >{{isCheckedOff ? "Checked-Off" : "Needed"}}</h3>
        <ul class="pt-8 space-y-4">
          <li
           v-for="item in isCheckedOff ? checked : needed" 
           :key="item.id" 
           @click="changeStatus(item.id)"
           :class="isCheckedOff ? 'text-red-600 hover:bg-red-400 text-decoration-line: line-through' : 'text-blue-600 hover:bg-blue-400'" 
           class="w-full px-4 py-2 font-bold text-center transition-colors duration-500 bg-gray-300 rounded-lg hover:cursor-pointer hover:text-gray-200"
          >
           {{ item.content }}
          </li>
        </ul>
      </div>
</template>