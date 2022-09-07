<template>
  <div id="app">

    <!-- <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/test/1' }">Test 1</router-link>
    <router-link :to="{ path: '/test/2' }">Test 2</router-link>
    <router-link :to="{ path: '/test/3' }">Test 3</router-link> -->

    <Navbar @search="search"></Navbar>

    <div class="container">

      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>
          <!-- <Inventory @newItemAdded="addCartItems" :items="items"></Inventory> -->
        </div>
        <div class="col-sm-3">
          <Cart @itemRemoved="removeItem" :items="cart"></Cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
// import Inventory from './components/Inventory'
import data from './data.js'

export default {
  components: {
    Navbar,
    Cart,
    // Inventory
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
    search(keyword) {
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    },
    addCartItems(item) {
      this.cart.push(item)
      // console.log(item)
    },
    removeItem(index) {
      this.item.splice(index, 1)
    }
  }
}
</script>
<style>
.container {
  padding-top: 10px;
}
</style>
