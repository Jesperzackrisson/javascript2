import axios from 'axios'

export default {
    state: {
        userToken: null,
        loggedIn: false
    },
    getters: {
        loggedIn: state => state.loggedIn
    },
    mutations: {
        SET_USER: (state, token) => {
            if(token) {
                state.userToken = token
                state.loggedIn = true
            } else {
                state.userToken = null
                state.loggedIn = false
            }
            
        },
        CHECK_USER: state => {
            try {
                let token = localStorage.getItem('token')
                if(token) {
                    state.userToken = token
                    state.loggedIn = true
                } else {
                    state.userToken = null
                    state.loggedIn = false
                }
            }
            catch(err) {
                console.log(err);
            }
        }
    },
    actions: {
        register: async ({dispatch}, _user) => {
            const user = {
                email: _user.email,
                password: _user.password
            }
            await axios.post('http://localhost:9999/api/users/register', _user)
            dispatch('login', user)
            // console.log(dispatch);
        },
        login: ({commit}, payload) => {
            axios.post('http://localhost:9999/api/users/login', payload)
            .then(res => {
                if(res.status === 200) {
                    localStorage.setItem('token', res.data.token)
                    commit('SET_USER', res.data.token)
                }
            })
        },
        checkUser: ({commit}) => {
            commit('CHECK_USER')
        },
        logout: ({commit}) => {
            let token = localStorage.getItem('token')
            if(token) {
                localStorage.removeItem('token')
                commit('SET_USER', null)
                
            }
        }
        
    },
}