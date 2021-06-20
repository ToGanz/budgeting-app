<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <span v-if="!loggedIn">
      <router-link :to="{ name: 'Register' }">Register</router-link>
      |
      <router-link :to="{ name: 'Login' }">
        Login
      </router-link>
    </span>
    <span v-else>
      <router-link :to="{ name: 'Plans' }">Budget Plans</router-link>
      |
      <router-link :to="{ name: 'Categories' }">Categories</router-link>
      |
      <router-link :to="{ name: 'Profile' }">Profile</router-link>
      |
      <button type="button" class="logoutButton" @click="logout">
        Logout
      </button>
    </span>
  </div>
</template>

<script>
import { authComputed } from '@/store/helpers.js'

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
