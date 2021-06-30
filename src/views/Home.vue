<template>
  <div class="home">
    <h1 class="title">Finance Tracker</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
.title {
  font-size: clamp(2.5rem, 3.2vw + 2rem, 4rem);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  background-image: linear-gradient(
    90deg,
    rgb(2, 0, 36) 0%,
    rgb(9, 9, 121) 57%,
    rgb(0, 212, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* font-size: clamp(2.5rem, 3.2vw + 2rem, 4rem);
  min-height: 0vh;
  font-family: silkabold;
  text-align: center;
  line-height: 1.2;
  color: transparent;
  margin: 32px;
  background: linear-gradient(
      90deg,
      rgb(2, 0, 36) 0%,
      rgb(9, 9, 121) 57%,
      rgb(0, 212, 255) 100%
    )
    text rgb(2, 0, 36); */
}
</style>
