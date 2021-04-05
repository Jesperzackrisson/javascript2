<template>
  <form class="register" id="register" @submit.prevent="onSubmit">
          <div>
              <h1>Register</h1>
          </div>
          <div>
              <input type="text" id="firstName" placeholder="First name" v-model="user.firstName">
          </div>
          
          <div>
              <input type="type" id="lastName" placeholder="last name" v-model="user.lastName">
          </div>

          <div>
              <input type="email" id="email" placeholder="email" v-model="user.email">
          </div>

          <div>
              <input type="password" id="password" placeholder="password" v-model="user.password">
          </div>

          <div>
              <button type="submit">Register</button>
              <p>You already got an account? <router-link to="/login">Login</router-link></p>
          </div>  
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
data() {
        return {
          user: {
              firstName: '',
              lastName: '',
              email: '',
              password: ''
          }
        }
      },
    
       methods: {
      ...mapActions(['register']),
      onSubmit() {
          if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
              this.register(this.user)
          }
      }
    },
}
</script>

<style>
.register {
    text-align: center;
    background-color: #121212;
    width: 40vw;
    height: 50vh;
    margin: 4rem auto;
    padding-top: 10rem;
    border-radius: 8px;
}

.register h1 {
    color: #fff;
    font-size: 3rem;
}

.register input {
    width: 50%;
    margin-top: 1rem;
    padding: 12px 18px;  
    border-radius: 5px;
    border: 1px solid #121212
}
.register button {
    margin-top: 1rem;
    background-color: #fff;
    border: none;
    color: #121212;
    padding: 8px 25px;
    border-radius: 8px;
    margin-left: 0.5rem;
    cursor: pointer;
}

.register a {
    text-decoration: none;
    color: #16a085;
}

.register p {
    color: #fff;
}
</style>