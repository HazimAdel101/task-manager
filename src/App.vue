<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Tasks</h1>
    </header>
    <div class="task-list">
      <p>All Tasks</p>
      <div v-for="task in taskStore.tasks" class="">
        <TaskDetails :task="task" />
      </div>
    </div>
    
  </main>
</template>

<script setup>
import { useTasks } from "@/stores/TaskStore";
import TaskDetails from '@/components/TaskDetails.vue';

const taskStore = useTasks();
</script>

<style scoped></style>