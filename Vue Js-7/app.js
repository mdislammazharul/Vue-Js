const app = Vue.createApp ({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sadnderson',
            age: 45,
            change: false
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        changeBook() {
            this.change = true
        }
    }
})

app.mount('#app')