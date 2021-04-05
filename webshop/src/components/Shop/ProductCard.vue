<template>
  <div class="product">

      <div class="card">
          <div class="cardImage">
                
                <img class="images" :src="product.image">
                
            </div>
            <div class="cardText">
                <!-- <small class="mt"> {{ product.price.toFixed(2) }}$</small> -->
                <h2 class="mt"> {{ product.name }}</h2>
                <p class="mt">{{ product.short }}</p>
                
            </div>
      </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this.$route.params._id)
  }
}
</script>

<style>

</style>