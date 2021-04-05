<template>
<div class="shop">
  
      <div class="card ">
            
            <div class="cardImage">
                <img class="images" :src="product.image">
            </div>
            <div class="cardText">
                <h2 class="mt"> {{ product.name }}</h2>
                <p class="mt">{{ product.short }}</p>
            </div>
            <div class="cardAmount">
                <br>
                <router-link :to="{name: 'Product', params: {_id: product._id}}" class="view_btn">View Product</router-link>
            </div>
      </div>
  
</div>
</template>

<script>
export default {
 props: ['product'],
 
}
</script>

<style>
.shop {
    background-color: #F5F5F5;
}

.mt {
    margin-top: 1rem;
}

.images {
    width: 200px;
}

.searchInput {
    display: flex;
    padding-top: 3rem;
}
.searchInput input {
    width: 55%;
    margin: auto;
    padding: 10px 18px;
    outline: 0;
    border-image: linear-gradient(to right, #121212, #121212);
    border-image-slice: 1;
    border-width: 0 0 1px;
    background-color: #F5F5F5;
    padding-top: 3rem;
}

.cards {
    display: inline-block;
    text-align: center;
    margin-top: 1.5rem;
}
.card {
    margin-top: 1rem;
    width: 400px;
    position: relative;
    left: 25%;
    border-radius: 8px;
    margin: 10px;
}
.card:hover {
    transform: scale(1);
    
}
.cardImage {
    height: 210px;
    color: #fff;
    justify-content: center;
    background-color: #F5F5F5;
    
}
.cardText {
    height: 190px;
    padding-top: 3rem;
    background-color: #F5F5F5;
}

.cardAmount {
    height: 80px;
    background-color: #16a085;
    text-align: center;
    border-radius: 0px 0px 8px 8px;
    border: none;
    position: relative;
}

.view_btn {
    text-decoration: none;
    color: #fff; 
    font-size: 1.5rem;
    
}

.yourListBtn {
    width: 30px;
    height: 30px;
    border: none;
    background-color: #F5F5F5; 
    margin-left: 0.1rem;
    cursor: pointer;
}

.cardAmount button {
    margin-top: 1.5rem;
}
</style>