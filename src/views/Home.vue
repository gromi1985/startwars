<template>
  <div class="principalPage">
    <p>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</p>
    <img alt="start Image" src="../assets/img1.webp">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button type="button" @click="goStarShips">STARSHIPS</button>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Footer
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
p{
  color:white;
  font-size:.8rem;
  padding:.8rem;
}
</style>