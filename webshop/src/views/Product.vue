<template>
  
  <div class="product">
    <navbar />
      <div class="closePage">
        
        <router-link to="/shop"><i class="fas fa-times"></i></router-link>
      </div>
      <div class="productCard">
          
        <div class="productCardImage">

          <img class="cardImages" :src="product.image">

        </div>

        <div class="productCardText">

          <h1>{{ product.name }}</h1>
          <br>
          <span> {{ product.price }}$</span>
          <p class="mt-1"> {{ product.desc}} </p>

        </div>

        <div class="productCardBtn">

         
          <button class="addToCartBtn" @click="addProductToCart({ product, quantity })">ADD TO CART</button>

        </div>

      </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import Navbar from '../components/Navbar'
export default {
  props: ['_id'],
  components: { 
    Navbar,
},
data() {
  return {
    quantity: 1
  }
},
methods: {
    ...mapActions(['getProduct', 'addProductToCart', 'clearProduct']),
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this._id)
  },
  destroyed() {
    this.clearProduct()
  }
}
</script>

<style scoped>
/* * {
  background-color: #F5F5F5;
} */

.product {
  background-color: #F5F5F5;
  overflow-y: hidden;
}
.productCard {
  width: 400px;
  height: 94vh;
  text-align: center;
  margin: auto;
  padding-top: 1rem;
}
.productCardText {
  margin-top: 1rem;
}
.productCardBtn {
  margin-top: 1rem;
}

.fas {
  color: #121212;
  float: none;
}

.goBackBtn {
  width: 120px;
  height: 40px;
  color: #fff;
  background-color: #16a085;
  border: none;
  cursor: pointer;
}
.addToCartBtn {
  width: 150px;
  height: 50px;
  border: none;
  color: #fff;
  background-color: #16a085;
  margin-left: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
}
.cardImages {
  width: 400px;
}
.mt-1 {
  margin-top: 1rem;
}
.closePage i  {
  font-size: 30px;
  cursor: pointer;
  position: relative;
  /* float: right; */
  left: 1115px;
  top: 150px;
}
</style>