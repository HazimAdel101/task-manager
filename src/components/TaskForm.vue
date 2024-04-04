<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="I need to ..." v-model="newTask">
        <button>Add</button>
    </form>
</template>

<script setup>

import { ref } from 'vue';
import { useTasks } from '@/stores/TaskStore';
import { useToast } from "vue-toastification";

const taskStore = useTasks();
const newTask = ref('');
const toast = useToast();

const handleSubmit = () => {

    if (newTask.value.length > 0) {
        taskStore.addTask({
            title: newTask.value,
            isFav: false,
            id: Math.floor(Math.random() * 999999)
        })
        newTask.value = '';
    }
    else {
        toast.error("The Name is required", {
            timeout: 2000
        });
    }
}
</script>