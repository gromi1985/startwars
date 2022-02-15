<template>
<div id="all-piece">
  <NavBar></NavBar>
  <div id="nav" class="d-flex flex-row justify-content-center border-y">
     <div class="border-x">
      <router-link to="/">HOME</router-link> 
    </div>
    <div class="border-x">
      <router-link to="/video">VIDEO</router-link> 
    </div>
    <div class="border-x">
      <router-link to="/starships">STARSHIPS</router-link>
    </div>
  </div>
  <!-- <p>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+</p> -->
  <div class="container-fluid">
    <router-view />
  </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";


export default {
  name: "App",
  components: {
    NavBar
  },
  data(){
    return{
      info:''
    }
  }
};
</script>

<style>
#app button{
  background: black;
  border:none;
  color:rgb(153, 153, 153);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: 700;
  /* color: rgb(156, 153, 152); */
   color:#999999; 
  font-family: "DIN Next W01 Regular", Helvetica, Arial, sans-serif;
   text-decoration:none;
   font-size: .875rem;
   line-height: 1rem;

}
#nav>div{
  padding:20px;
}

#nav div a.router-link-exact-active {
  color: white;
}
#all-piece{
  background:black;
}
#all-piece>p{
  margin-bottom: 0;
}
.border-y{
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.border-x{
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}


p{
  color:white;
  font-size:.8rem;
  padding:.8rem;
}
</style>
