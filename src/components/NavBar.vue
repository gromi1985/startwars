<template>
    <div class="container " id="headCustom">  
      <nav id='menu' class="navbar justify-content-between">
          <div id="container-nav" class="d-flex justify-content-between">
            <div id="auxElement"></div>
              <router-link class = "nav-link" to = "/"> <img alt="Star logo" src="../assets/indice.png" > </router-link>
          
              <div class=" d-flex justify-content-end align-items-center">
                <router-link class = "nav-link" to = "/login"> LOGIN </router-link>
                <span>//</span>
                 <router-link class = "nav-link" to = "/register"> SIGN UP </router-link>
             </div>
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
          this.$router.push({ path: 'home'})
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
#auxElement{
  width:10px;
  height:10px;
  background: black;  
}
#menu{
  padding:0;
  background:black;
  color:white;
  width:100%;
}
#container-nav{
  width: 100%;
  margin-left:0;
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
.nav-link{
  color:rgb(153, 153, 153);
}  
.nav-link:hover{
  color:rgb(153, 153, 153);;
}
/**Estilos de los Input para Login y Register */

</style>