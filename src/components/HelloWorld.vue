<script setup>
  import { ref } from 'vue'

  defineProps({
    msg: String,
  })

  const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p>
      vite-vue-vuetify
    </p>
  </div>

  <p>test task</p>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>