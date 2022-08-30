<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <Inventory @newItemAdded="addCartItems" :items="items"></Inventory>
        </div>
        <div class="col-sm-3">
          <Cart :items="cart"></Cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
import Inventory from './components/Inventory'
import data from './data.js'

export default {
  components: {
    Navbar,
    Cart,
    Inventory
  },
  data() {
    return {
      items: [],
      cart: []
    }
  },
  mounted() {
    this.items = data
  },
  methods: {
    addCartItems(item) {
      this.cart.push(item)
      // console.log(item)
    }
  }
}
</script>
<style>
.container {
  padding-top: 10px;
}
</style>
