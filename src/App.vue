<template>
  <div id="app">
    <p>this is a simple application</p>
    <img src="./assets/picture.png" alt="">
    <!-- <Home></Home> -->
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  methods: {
    getDataList() {
      console.log(new Set());
      
    }
  },
  created() {
    const promise = new Promise(() => {})
    console.log(promise);
  }
}

</script>


<style lang="scss" scoped>
p {
  background: aqua;
  color: green;
}
</style>