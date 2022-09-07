<template>
    <div v-if="!loading" class="row">
        <div v-for="(item, index) in items" :key="index" class="card" style="width: 15rem;">
            <img class="card-img-top" :src="item.photo" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.price }}</p>
                <a @click="addToCart(item)" class="btn btn-primary">+ add</a>
            </div>
        </div>
    </div>
    <h1 v-else>Loading....</h1>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            loading: true,
            items: []
        }
    },
    mounted() {
        this.fetchInventory()
    },
    methods: {
        addToCart(item) {
            this.$emit('newItemAdded', item)
            // console.log(item)
        },
        fetchInventory() {
            var self = this
            axios.get('http://localhost:3000/items').then(response => {
                self.items = response.data
                self.loading = false
            })
        }
    },

}
</script>

<style>
</style>