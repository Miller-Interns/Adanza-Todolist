<script setup lang="ts">
import { useTodoStore } from '../stores/todo-store'
import { ref } from 'vue'

const store = useTodoStore()
const props = defineProps(['todo'])

const isEditable = ref<boolean>(false)
const newEdit = ref('')
function toggleEdit() {
  isEditable.value = !isEditable.value
}

function submitEdit() {
  store.editTodo(props.todo, newEdit.value)
  toggleEdit()
}
</script>

<template>
  <div class="todoBlock">
    <div class="blockLeft">
      <input type="checkbox" v-model="$props.todo.checked" />
      <input v-model="newEdit" type="text" v-if="isEditable" @keyup.enter="submitEdit" />
      <div v-else>
        <span :class="{ strikethrough: props.todo.checked }">{{ props.todo.text }}</span>
      </div>
    </div>
    <div>
      <button class="remove" @click="store.removeTodo(todo)">X</button>
      <button v-if="isEditable" class="edit" @click="submitEdit">submit</button>
      <button v-else class="edit" @click="toggleEdit">✎</button>
    </div>
  </div>
</template>

<style>
div {
  margin-left: 2px;
}
.todoBlock {
  display: flex;
  justify-content: space-between;
}

.remove,
.edit {
  float: right;
  height: auto;
  background: red;
  font-size: x-small;
  margin-right: 3px;
  margin-top: 2px;
  border-radius: 5px;
}

.edit {
  background: aqua;
}

.blockLeft {
  display: flex;
}

.strikethrough {
  text-decoration: line-through;
}
</style>
