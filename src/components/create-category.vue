<script setup lang="ts">
import { useTodoStore } from '../stores/todo-store'
import { ref } from 'vue'

const store = useTodoStore()
const newCategory = ref('')

function inputCategory() {
  store.addCategory(newCategory.value)
  newCategory.value = ''
}
</script>

<template>
  <div class="createCategory">
    <form @submit.prevent="inputCategory">
      <input v-model="newCategory" type="text" required />
      <button>Create Category</button>
    </form>
  </div>
</template>

<style></style>
