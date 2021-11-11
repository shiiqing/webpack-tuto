<template>
  <div>
    <div>About</div>
    <p @click="getChar">ddddd</p>
  </div>
</template>


<script>
export default {
  name: "About",
  methods: {
    getChar() {
      console.log('hello world');
    }
  }
}
</script>

<style scoped>
p {
  color: red;
}

</style>
