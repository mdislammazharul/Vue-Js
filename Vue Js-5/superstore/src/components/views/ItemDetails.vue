<template lang="">
    <div v-if="item" class="row">
        <div class="col-sm-6">
            <img :src="item.photo" alt="Photo">
        </div>
        <div class="col-sm-6">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <h6>{{ item.price }}</h6>
            <button @click="addToCart(item)" class="btn btn-primary">+ add</button>
        </div>       
    </div>
    <h3 v-else>Loading...</h3>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            item: null
        }
    },
    mounted() {
        this.fetchItems()
    },
    methods: {
        fetchItems() {
            var self = this
            axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response => {
                self.item = response.data
            })
        },
        addToCart(item) {
            this.$store.commit('addToCart', item)
        }
    }
}
</script>
<style lang="">
    
</style>