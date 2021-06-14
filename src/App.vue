<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <span v-if="!loggedIn">
    <router-link :to="{ name: 'Register' }">Register</router-link>
    |
    <router-link  :to="{ name: 'Login' }">
      Login
    </router-link>
    </span>
    <span v-else>
      <router-link :to="{ name: 'Plans' }">Budget Plans</router-link>
      |
      <router-link :to="{ name: 'Categories' }">Categories</router-link>
      |

      <button type="button" class="logoutButton" @click="logout">
        Logout
      </button>
    </span>
  </div>
  <router-view />
</template>

<script>
import { authComputed } from './store/helpers.js'
import axios from 'axios'

export default {
  computed: {
    loggedIn: authComputed['users/loggedIn']
  },
  methods: {
    logout() {
      this.$store.dispatch('users/logout')
    }
  },
  created() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('users/SET_USER', userData)
    }

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
