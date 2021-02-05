<template>
 <navArea/>
  <router-view/>
</template>
<script>
import navArea from './components/NavArea.vue'
export default {
  components:{navArea}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
