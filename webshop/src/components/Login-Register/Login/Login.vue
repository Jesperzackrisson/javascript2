<template>
  <div class="login_page" id="login_page">
      
    <form class="login" id="login" @submit.prevent="onSubmit">
          <div>
              <h1>Login</h1>
          </div>
          <div>
              <input type="email" id="email" placeholder="Please enter a valid email" v-model="email">
          </div>
          
          <div>
              <input type="password" id="password" placeholder="Please enter a valid password" v-model="password">
          </div>

          <div>
              <button type="submit">Login</button>
              <p>No account? <router-link to="/register">Register</router-link></p>
          </div>  
    </form>

    
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    components: {
        
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        onSubmit() {
            if(this.email !== '' && this.password !== '' ) {
                let user = {
                    email: this.email,
                    password: this.password
                }

                this.login(user)
            }
        }
    }
}
</script>

<style >

/* Login form */
.login {
    text-align: center;
    background-color: #121212;
    width: 40vw;
    height: 50vh;
    margin: 4rem auto;
    padding-top: 10rem;
    border-radius: 8px;
}

.login h1 {
    color: #fff;
    font-size: 3rem;
}

.login input {
    width: 50%;
    margin-top: 1rem;
    padding: 12px 18px;  
    border-radius: 5px;
    border: 1px solid #121212
}
.login button {
    margin-top: 1rem;
    background-color: #fff;
    border: none;
    color: #121212;
    padding: 8px 25px;
    border-radius: 8px;
    margin-left: 0.5rem;
    cursor: pointer;
}

.login_page p {
    color: #fff;
    margin-top: 1rem;
}

.login a {
    text-decoration: none;
    color: #16a085;
}

/* Register form */


</style>