new Vue({
    el: '#vue-app',
    data: {
        items: [
            { name: 'Rice', price: 50 },
            { name: 'Chicken', price: 200 },
            { name: 'Egg', price: 150 },
        ],
        newItem: ''
    },
    computed: {
        total() {
            var sum = 0
            this.items.forEach(item => {
                sum += parseFloat(item.price)
            });
            return sum
        }
    },
    methods: {
        addItem() {
            this.items.push({
                name: this.newItem,
                price: 0.0
            })
        },
        removeItem(index) {
            this.items.splice(index, 1)
        }
    }
})