import { defineStore } from 'pinia'

export const useTasks = defineStore('tasks', {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: 'Task 1',
                description: 'Description 1',
                isFav: false
            },
            {
                id: 2,
                title: 'Task 2',
                description: 'Description 2',
                isFav: true
            },
            {
                id: 3,
                title: 'Task 3',
                description: 'Description 3',
                isFav: false
            }
        ]
    }),
    getters: {
        favs(state) {
            return this.tasks.filter(task => task.isFav)
        }
    }
})