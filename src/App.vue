<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <plans-list :plans="plans"></plans-list>
</template>

<script>
import PlansList from "@/components/plans/PlansList.vue";

export default {
  components: {
    PlansList
  },
  data() {
    return {
      plans: [
        {
          id: 1,
          title: 'plan 1',
        },
        {
          id: 2,
          title: 'plan 2',
        },
        {
          id: 3,
          title: 'plan 3',
        },
      ],
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
