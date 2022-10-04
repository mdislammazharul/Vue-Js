const app = Vue.createApp ({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sadnderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent (e) {
            console.log(e)
        },
        handleMousemove(e) {
            this.x = e.offsetX,
            this.y = e.offsetY
        }
    }
})

app.mount('#app')