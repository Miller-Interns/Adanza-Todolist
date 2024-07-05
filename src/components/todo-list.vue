<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo-store'
import TodoBlock from './todo-block.vue'

const store = useTodoStore()

const props = defineProps(['category'])
const newTodo = ref('')

function inputTodo() {
  store.addTodo(newTodo.value, props.category)
  newTodo.value = ''
}
</script>

<template>
  <div class="container">
    <div>
      <h2>{{ category }}</h2>
      <form @submit.prevent="inputTodo">
        <input v-model="newTodo" required placeholder="Enter To Do" />
        <button>Add Todo</button>
      </form>
      <ul>
        <div v-for="todo in store.todos" :key="todo.id">
          <li v-if="todo.category === props.category">
            <TodoBlock :todo="todo"></TodoBlock>
          </li>
        </div>
      </ul>
      <div>
        <button @click="store.removeCategory(props.category)">Remove Category</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;

  right: 0;
  left: 0;
  top: 100px;
  bottom: 0;
  margin: auto;
}

ul {
  list-style-type: none;
  padding-left: 0px;
  padding-right: 10px;
  margin-top: 10px;
}

li {
  text-align: left;
  margin: 5px 0 5px 0;
  border: 2px solid black;
  border-radius: 10px;
  padding: 0px 0px 0px 2px;
}
</style>
