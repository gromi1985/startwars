<template>
<div id="register">
  <div >
    <img src="../assets/loginAccount.png" alt="">
  </div>
  <h1>CREATE YOUR ACCOUNT</h1>
  <form>
    <input class="d-block" type="text" name="firstName" v-model="firstName" placeholder="First Name">
    <input class="d-block" type="text" name="lastName" v-model="lastName" placeholder="Last Name">

    <input class="d-block" type="email" name="email" v-model="email" placeholder="Username or Email Address">
    <input class="d-block" type="text" name="displayName" v-model="displayName" placeholder="Display Name">
    <input class="d-block" type="password" name="password" autocomplete="on" v-model="pass"  placeholder="Password">
    <label><input type="checkbox"/> Show password</label>
    <label><input type="checkbox" v-model="offers" /> Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies.</label>
   
    <p>By creating an account, you agree to our Terms of Use and acknowledge that you have read our Privacy Policy, Cookies Policy and EU Privacy Rights. More...</p>
    <p>My home country/region: Spain. Change.</p>
    <button class="d-block" @click="guardarLocalStorage">Create Account</button>
    <p>Already have an account? Sign In</p>
  </form>
</div>

</template>
<script>
  export default{
    name: "Register",
    data(){
      return{
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        offers:'',

        dataPerson:{
        'firstName':'',
        'lastName':'',
        'email':'',
        'password':'',
        'offers':''
        }
      }
    },
    methods:{
      guardarLocalStorage(){
        this.dataPerson.email = this.email;
        this.dataPerson.password = this.password;
        this.dataPerson.firstName = this.firstName;
        this.dataPerson.firstName = this.lastName;
        this.dataPerson.offers = this.offers

        localStorage.setItem("usuario",JSON.stringify(this.dataPerson));
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
#register{
  font-family:"DIN Next W01 Light";
  margin-top:100px;
  padding-bottom:40px;
  background-color:#181818;
  min-width:440px;
  min-height:23rem;
  width:410px;
  margin:0 auto;
  font-size:12px;
}
#register img{
width: 322px;
height: 60px;
}
#register input,
#register button{
  width: 350px;
  font-size:1.1rem;
 }
 #register button{
   background-color: #484848;
   font-size:1.5em
 }
 #remember-container{
   text-align: right;
   font-size:1.25em;
 }
</style>