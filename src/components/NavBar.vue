<template>
    <div class="container" id="headCustom">  
      <nav id='menu' class="navbar justify-content-between">
        <p>1</p>
        <img alt="Star logo" src="../assets/indice.png" @click="goHome">
        <div class="  d-flex flex-row justify-content-end">
          <button type="button" @click="goLogin">LOGIN </button>
          <span>//</span>
          <button type="button" @click="goRegister">SIGN UP</button>
        </div>
    </nav>
  </div> 


</template>

<script>
export default {
  name:'NavBar',
 data(){
   return {
    brand:'Prueba'
   }
 },
 methods: {
        goLogin(){
          this.$router.push({ name: 'Login'})
        },
        goRegister(){
          this.$router.push({ name: 'Register'})
        },
        goHome(){
          this.$router.push({ name: 'Home'})
        }
 }
}
</script>

<style scoped>
#headCustom {
    max-width: 1400px;
    max-height: 134px;
    margin: 0 auto;
    padding: 20px 0;
}
#menu{
  padding:0;
  background:black;
  color:white;
  width:100%;
}
#menu>ul{
  list-style: none;
  padding :1rem;
}
#menu>ul>li{
margin:1.3rem;
}
img{
    height: 100%;
    width:203px;
    max-height: 88px;
}  
span{
  color:rgb(153, 153, 153);
}  


</style>