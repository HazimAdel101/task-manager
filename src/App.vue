<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- New task form  -->

    <div class="new-task">
      <TaskForm />
    </div>

    <!-- Filter -->
    <nav class="filter">
      <button @click="filter = 'all'" class="">
        All Tasks
      </button>
      <button @click="filter = 'favs'">
        Favs
      </button>
    </nav>

    <!-- Task List -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} Tasks to do</p>
      <div v-for="task in taskStore.tasks" class="">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favsCount }} favs to do</p>
      <div v-for="task in taskStore.favs" class="">
        <TaskDetails :task="task" />
      </div>
    </div>
    
  </main>
</template>

<script setup>
import { useTasks } from "@/stores/TaskStore";
import TaskDetails from '@/components/TaskDetails.vue';
import TaskForm from '@/components/TaskForm.vue';
import { ref } from 'vue';


const taskStore = useTasks();

const filter = ref('all');
</script>

<style scoped></style>