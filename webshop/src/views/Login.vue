<template>
  <div>
      <navbar />
      <login />
  </div>
</template>

<script>
import Login from '../components/Login-Register/Login/Login.vue'
import Navbar from '../components/Navbar'
export default {
  components: { 
      Login,
      Navbar 
},

}
</script>

<style>

</style>