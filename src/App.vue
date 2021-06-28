<template>
  <navigation-header></navigation-header>
  <div id="flashMessage" v-if="flashMessage">
    {{ flashMessage }}
  </div>
  <router-view />
</template>

<script>
import NavigationHeader from '@/components/layout/NavigationHeader.vue'

export default {
  components: {
    NavigationHeader
  },
  computed: {
    flashMessage() {
      return this.$store.getters['flashMessage']
    }
  },
  created() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('users/SET_USER', userData)
    }
  }
}
</script>

<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}

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
