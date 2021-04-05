<template>
  <div class="home">
    <navbar />
    <hero />
    <!-- <login /> -->
  </div>
</template>

<script>
import Hero from '../components/Home/Hero.vue'
// import Login from '../components/Login-Register/Login/Login.vue'
import Navbar from '../components/Navbar'


export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    // Login,
    
  }
}
</script>

<style >
h1 {
  color: #121212;
  text-align: center;
}
</style>