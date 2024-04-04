<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
            <i  :class="task.isFav? 'active' : ''" @click="taskStore.toggleFav(task.id)" class="material-icons">favorites</i>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useTasks } from '@/stores/TaskStore';

const props = defineProps({
    task: Object
})

const taskStore = useTasks();

</script>
