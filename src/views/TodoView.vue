<script setup lang="ts">
import TodoCategory from '@/components/TodoCategory.vue'
import CreateCategory from '@/components/CreateCategory.vue'
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
  float: left;
  justify-content: right;
}

.navbar {
  display: flex;
  float: right;
  justify-self: start;
  justify-content: right;
  background: black;
  width: 100%;
}
</style>
