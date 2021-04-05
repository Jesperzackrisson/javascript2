<template>
  <div>
    <navbar />
    <cart-details  />
    
  </div>
</template>

<script>
import CartDetails from '../components/Cart/CartDetails.vue'
import Navbar from '../components/Navbar'
import { mapGetters } from 'vuex'
export default {
  components: {
    Navbar,
    CartDetails,
  },
  props: ['item'],
  computed: {
    ...mapGetters(['cartDetails'])
  }
  
  
  

}
</script>

<style>

</style>
