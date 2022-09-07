<template lang="">
    <div>
     <h1>{{item}}</h1>
    </div>
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
        }
    }
}
</script>
<style lang="">
    
</style>