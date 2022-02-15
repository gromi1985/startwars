<template>
  <div class="aa">
    <img alt="start Image" src="../assets/img1.webp">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button type="button" @click="goStarShips">STARSHIPS</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    goStarShips(){
      this.$router.push({ name: 'Starships'})
    }
  }
}
</script>

<style>
div>img{
  width: 100%;
}
</style>