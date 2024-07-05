<script setup lang="ts">
import TodoCategory from '@/components/todo-category.vue'
import CreateCategory from '@/components/create-category.vue'
</script>

<template>
  <nav class="navbar">
    <div class="backToHomePage">
      <button><RouterLink to="/">Back to Home Page</RouterLink></button>
    </div>
    <CreateCategory></CreateCategory>
  </nav>
  <h1>Todo-List</h1>
  <div class="category">
    <TodoCategory></TodoCategory>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.category {
  display: flex;
  text-align: center;
  justify-content: space-center;
}

.backToHomePage {
  display: flex;
  float: left;
  justify-content: left;
  align-items: left;
}

.navbar {
  display: flex;
  float: right;
  justify-self: start;
  background: #0275dd;
  width: 100%;
}
</style>
