<template>
    <ul class="list-group">
        <li class="list-group-item">
            <span class="item-name">Name</span>
            <span class="item-price float-right">Price</span>
        </li>
        <hr>
        <li v-for="(item, index) in items" :key="index" class="list-group-item">
            <span class="item-name">{{  item.title  }}</span>
            <button class="btn btn-sm btn-danger" @click="removeItem(index)">Delete</button>
            <span class="item-price float-right">{{  item.price  }}</span>
        </li>
        <hr>
        <li class="list-group-item">
            <span class="item-name">Total - $</span>
            <span class="item-name">{{  totalPrice  }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['items'],
    computed: {
        totalPrice() {
            var total = 0
            this.items.forEach(item => {
                // console.log(item)
                total += parseFloat(item.price)
                console.log(item.price)
            })
            return total

        }
    },
    methods: {
        removeItem(index) {
            this.$emit('itemRemoved', index)
        }
    }
}
</script>

<style>
</style>