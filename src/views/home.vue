<template>
  <div class="container">
    <div class="Home">
      <h1>Jorge Adanza</h1>
      <p>July 5, 2024</p>
      <button type="button" class="btn btn-outline-success">
        <RouterLink to="/app">Go To App</RouterLink>
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 10px solid green;
  max-width: 700px;
  width: 100%;
  border-radius: 12px;

  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
