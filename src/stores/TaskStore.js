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
        favs() {
            return this.tasks.filter(task => task.isFav)
        },

        favsCount () {
            return this.tasks.reduce((previous, current) => {
                return current.isFav ? previous + 1 : previous
            }, 0)
        },

        totalCount: (state) =>{
            return state.tasks.length
        }

    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },

        deleteTask(id) {

            this.tasks = this.tasks.filter(task => task.id !== id)
        },

        toggleFav(id) {
            const task = this.tasks.find(task => task.id === id)

            task.isFav = !task.isFav
        }   
    }
})