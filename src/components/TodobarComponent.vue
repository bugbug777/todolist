<script setup>
import { storeToRefs } from 'pinia'
import todoStore from '../stores/todo'

const todo = todoStore()
const { content } = storeToRefs(todo)
const { addTodo } = todo
</script>

<template>
  <div class="relative">
    <input v-model="content" class="block w-full rounded-[10px] py-3 px-4 placeholder-shown:text-[#9F9A91]" type="text"
      placeholder="新增待辦事項">
    <button
      @click="addTodo"
      class="absolute top-0 right-0 bottom-0 flex justify-center items-center rounded-[10px] text-white p-[10px] m-1 bg-[#333]"
      type="button">
      <font-awesome-icon icon="fa-solid fa-plus" fixed-width />
    </button>
  </div>
</template>