<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="I need to ..." v-model="newTask">
        <button>Add</button>
    </form>
</template>

<script setup>

import { ref } from 'vue';
import { useTasks } from '@/stores/TaskStore';
const taskStore = useTasks();
const newTask = ref('');
const handleSubmit = () => {

    if (newTask.value.length > 0){
        taskStore.addTask({
            title: newTask.value,
            isFav: false,
            id: Math.floor(Math.random() * 999999)
        })

        newTask.value = '';
    }
}
</script>