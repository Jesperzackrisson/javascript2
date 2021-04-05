<template>
<tr>
    <td>{{ item.product.name }}</td>
    <td>{{ item.product.price }}$</td>
    <td>{{ item.quantity }}</td>
    <td>  
        <i class="fas fa-plus" @click="incrementItemInCart()"></i>
        <i class="fas fa-trash" @click="removeItemFromCart(index)"></i>
        <i class="fas fa-minus" @click="decrementItemInCart()"></i>
    </td>
</tr>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['item'],
    data () {
        return {
            quantity: 1,
            
        }
    },
    methods: {
        ...mapActions(['addProductToCart', 'removeItemFromCart']),
        incrementItemInCart() {
            this.item.quantity++
        },
        decrementItemInCart() {
            if(this.item.quantity === 1) {
                return
            }
            this.item.quantity--
        }
        
        
    },
    computed: {
    ...mapGetters(['product']),
    
  },
    
}
</script>

<style>
.fa-plus, .fa-trash, .fa-minus {
    color: red;
}
</style>