<template>
  <div id="app">
    <div id="nav">
     
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
methods: {
  ...mapActions(['checkUser'])
},
created() {
  this.checkUser()
}
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
</style>
