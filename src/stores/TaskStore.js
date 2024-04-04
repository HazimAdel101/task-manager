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

        favsCount() {
            return this.tasks.reduce((previous, current) => {
                return current.isFav ? previous + 1 : previous
            }, 0)
        },

        totalCount: (state) => {
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
        async addTask(task) {
            this.tasks.push(task);

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (res.error) {
                console.log(res.error);
            }
        },

        // async deleteTask(id) {

        //     this.tasks = this.tasks.filter(task => task.id !== id);

        //     const res = await fetch('http://localhost:3000/tasks/' + id, {
        //         method: 'DELETE',
        //     })

        //     if (res.error) {
        //         console.log(res.error);
        //     }
        // },

        async deleteTask(id) {
            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'DELETE',
            })

            if (!res.ok) {
                console.log('Failed to delete task');
                return;
            }

            this.tasks = this.tasks.filter(task => task.id !== id);
        },
        
        async toggleFav(id) {
            const task = this.tasks.find(task => task.id === id);
            task.isFav = !task.isFav;

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'PATCH',
                body: JSON.stringify({
                    isFav: task.isFav
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (res.error) {
                console.log(res.error);
            }
        }
    }
})