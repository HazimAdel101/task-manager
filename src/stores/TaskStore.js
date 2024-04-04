import { defineStore } from 'pinia'

export const useTasks = defineStore('tasks', {
    state: () => ({
        tasks: [],
        loading: false
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
        async getTasks() {
            this.loading = true;
            const res = await fetch('http://localhost:3000/tasks');
            const data = await res.json();

            this.tasks = data;
            this.loading = false;
        },
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