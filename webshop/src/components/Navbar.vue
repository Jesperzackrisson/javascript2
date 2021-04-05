<template>
  <nav>
      <div class="d-flex navbar">
          <div class="d-flex">
              <div>
                  <i class="fab fa-shopware"></i>
              </div>
              <div>
                  <h1>Shopify</h1>
              </div>  
          </div>
          

          <ul class="links" v-if="loggedIn">
              <li><router-link class="routerLinks" to="/">Home</router-link></li>
              <li><router-link class="routerLinks" to="/shop">Shop</router-link></li>
              <li><router-link class="routerLinks" to="/cart"><span v-show="cartItemCounter" class="counterBadge">{{ cartItemCounter }}</span><i class="fas fa-shopping-cart"></i></router-link></li>
              <div class="dropdown">
                  <li><i class="fas fa-user dropButton"></i></li>
                  <div class="dropdownContent">
                      <p class="pt">View order</p>
                      <p class="mt" @click="() => $router.push('/profile')">Profile</p>
                      <p class="mt pb" @click="logout">Logout</p>
                  </div>
              </div> 
          </ul>
          <ul class="links" v-if="!loggedIn">
              <li><router-link class="routerLinks" to="/">Home</router-link></li>
              <li><router-link class="routerLinks" to="/shop">Shop</router-link></li>
              <li><router-link class="routerLinks" to="/cart"><span v-show="cartItemCounter" class="counterBadge">{{ cartItemCounter }}</span><i class="fas fa-shopping-cart"></i></router-link></li>
              <li><router-link class="routerLinks" to="/login">Login</router-link></li>
          </ul>
      </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
computed: {
    ...mapGetters(['cartItemCounter', 'loggedIn'])
},
methods: {
    ...mapActions(['logout'])
}
}
</script>

<style>
nav {
    background-color: #16a085;
    height: 4rem;
}

.pt {
    padding-top: 2rem;
}

.pb {
    padding-bottom: 1rem;
}
.navbar h1 {
    color: #fff;
    font-size: 2.5rem;
    padding-top: 0.6rem;
}
.navbar {
    justify-content: space-between;
    max-width: 70vw;
    margin: auto;
}
.d-flex {
    display: flex;
}

.links li {
    list-style-type: none;
    display: inline-block;
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #fff;
    cursor: pointer;
}

.routerLinks {
    color: #fff;
    text-decoration: none;
    padding: 3px 16px; 
}

/* .counterBadge {
    color: #fff;
    background-color: red;
    border-radius: 50%;
    position: relative;
    padding: 0 0.5rem;
    right: 15rem;
    top: 0.5rem;
    font-size: 1rem; 
} */

.counterBadge {
    color: red;
}

.fas {
    color: #fff;
}

.fab {
    color: #fff;
    padding-top: 0.8rem;
    font-size: 2.5rem;
    margin-right: 1rem;
}

/* Dropdown */

.dropdownContent {
    background-color: #16a085;
    width: 100px;
    display: none;
}

.dropdownContent p {
    text-decoration: none;
    display: block;
    text-align: center;
    color: #fff;
    cursor: pointer;
}

.dropdown {
    position: relative;
    bottom: 44px;
    left: 250px;
    z-index: 1;
}

.dropdown:hover .dropdownContent {
    display: block;
}


</style>