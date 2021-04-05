<template>
  <div class="shop">
      <navbar />
      <shopitem  v-for="product in products" :key="product._id" :product="product" class="cards"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import Navbar from '../components/Navbar'
import Shopitem from '../components/Shop/Shop-item'
export default {
  components: {
    Navbar,
    Shopitem,
  },
  computed: {
    ...mapGetters(['products']),
    
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  mounted() {
    this.getProducts()
  }
  

}
</script>

<style>

</style>