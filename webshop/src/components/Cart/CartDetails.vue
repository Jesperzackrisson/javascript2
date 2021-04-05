<template>
  <div>
      <div v-if="cartDetails.length < 1" class="emptyCart">
          <h1>Your cart is empty..</h1>
          <button @click="() => $router.push('/shop')"> Go back to the shop</button>
      </div>
      <div v-else>
          <table class="styleTable">
    
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <CartDetailsCard v-for="item in cartDetails" :key="item.product._id" :item="item"/> 
            </tbody>
          </table>
          
          <table class="styleTable">
              <thead>
                    <tr>
                        <th>Total price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ cartTotal }}$</td>
                        <td>{{ cartQuanTotal }}</td>
                        <td>
                            <button>Checkout</button>
                        </td>
                    </tr>
                </tbody>
          </table>
      </div>
    
  </div> 
  
</template>

<script>
import { mapGetters } from 'vuex'
import CartDetailsCard from '../Cart/CartDetailsCard'
export default {
    props: ['item'],
    components: {
        CartDetailsCard,
        
    },
    computed: {
        ...mapGetters(['cartDetails', 'cartTotal', 'cartQuanTotal']),
        
    }
    
    
}
</script>

<style>
.styleTable {
    border-collapse: collapse;
    margin: 5rem auto;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 700px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    
}
.styleTable thead tr {
    background-color: #16a085;
    color: #fff;
    text-align: left;
}
.styleTable th, .styleTable td {
    padding: 20px 15px;
}

.fas {
    cursor: pointer;
    font-size: 20px;
    padding: 0 0.5rem;
}

.styleTable tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styleTable tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
    
}

.styleTable button {
    /* background-color: lightskyblue; */
    background-color: turquoise;
    border: none;
    border-radius: 5px;
    padding: 10px 10px;
    color: #fff;
    cursor: pointer;
}

.emptyCart {
    text-align: center;
    padding-top: 3rem;
}

.emptyCart h1 {
    font-size: 5rem;
}

.emptyCart button {
    background-color: #121212;
    color: #fff;
    border: none;
    padding: 20px 22px;
    margin-top: 2rem;
    font-size: 2rem;
    border-radius: 5px;
    cursor: pointer;
}



</style>