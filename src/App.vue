<template>
  <navigation-header></navigation-header>
  <router-view />
</template>

<script>
import NavigationHeader from '@/components/layout/NavigationHeader.vue'

export default {
  components: {
    NavigationHeader
  },
  created() {
    console.log("created")
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('users/SET_USER', userData)
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
