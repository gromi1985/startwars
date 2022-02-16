<template>
<div id="login">
  <div >
    <img src="../assets/loginAccount.png" alt="">
  </div>
  <h1>SIGN IN</h1>
  <form id="signIn">
    <input  type="email" name="email" v-model="email" placeholder="Username or Email Address"> 
    <input  type="password" name="password" v-model="password"  autocomplete="on" placeholder="Password">
    <button  @click="recuperarLocalStorage">Sign In</button>
    <div id="remember-container">
      <span id="remember">Need help signing in?</span>
    </div>
  </form>
</div>

</template>
<script>
  export default{
    name: "Login",
    data(){
      return{
        email:'',
        usuario:'',
        password:''
      }
    },
    methods:{
      
      recuperarLocalStorage:function(event){
        event.preventDefault();  
        console.log('recuperarLocalStorage()')
        this.usuario = localStorage.getItem('usuario');
        if(this.usuario){
           if(this.email === JSON.parse(this.usuario).email)
             console.log('Se ha conectado con exito:'  + this.email)
        }
      }
    }
  }

</script>
<style>
/* #login div,
#login h1,
#login input,
#login a{

} */
#login{
  font-family:"DIN Next W01 Light";
  margin-top:100px;
  padding-bottom:40px;
  background-color:#181818;
  min-width:440px;
  min-height:23rem;
  width:410px;
  margin:0 auto;
  font-size:12px;
  min-height: 100vh;
}
#login img{
width: 322px;
height: 60px;
}
#login input,
#login button{
  display:block;
  width: 350px;
  font-size:1.1rem;
 }
 #login button{
   background-color: #484848;
   font-size:1.5em
 }
 #remember-container{
   text-align: right;
   font-size:1.25em;
 }
 #login h1{
   font-size:1.4rem;
   margin-bottom:1.3rem;
   text-transform: uppercase;
   color: #edd700;
   text-align:center;
 }

</style>