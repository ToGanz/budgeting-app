<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link :to="{ name: 'Register' }">Register</router-link>
    |
    <router-link v-if="!loggedIn" :to="{ name: 'Login' }">
      Login
    </router-link>
    <span v-else>
      |
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

export default {
  computed: {
    loggedIn: authComputed['users/loggedIn']
  },
  methods: {
    logout() {
      this.$store.dispatch('users/logout')
    }
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
