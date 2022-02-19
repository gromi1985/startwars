<template>
  <div id="login">
    <div>
      <img src="../assets/loginAccount.png" alt="" />
    </div>
    <h1>SIGN IN</h1>
    <form id="signIn">
      <InputElement
        idElement="field-7"
        headTitle="Email"
        @newOninput="oninputElement"
        @newBlur="blurElement"
        @newFocus="focusElement"
        :flagEvents="flagEventsObject"
        tipo="2"
      ></InputElement>

      <InputElement
        idElement="field-8"
        headTitle="Password"
        @newOninput="oninputElement"
        @newBlur="blurElement"
        @newFocus="focusElement"
        :flagEvents="flagEventsObject"
        tipo="3"
      ></InputElement>
      <!-- <span vshow="mostrar" class="msgError">Error Usuario password Incorrecto <span> -->

      <button @click="validateUser">Sign In</button>
      <div id="remember-container">
        <span id="remember">Need help signing in?</span>
      </div>
    </form>
  </div>
</template>
<script>
import InputElement from "@/components/InputElement.vue";
export default {
  name: "Login",
  components: {
    InputElement,
    
  },
  data() {
    return {
      email: "",
      usuario: "",
      password: "",
      mostrar: false,
      flagEventsObject: {
        esActivateBlur: false,
        esActivateFocus: false,
        esActivateOninput: false,
      },
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: "home" });
    },
    validateUser() {
      if (this.$store.dispatch("GET_USER")) this.goHome();
    },
    initEventVariables() {
      console.log("initEventVariables");
      this.flagEventsObject.esActivateBlur = false;
      this.flagEventsObject.esActivateFocus = false;
      this.flagEventsObject.esActivateOninput = false;
    },
    blurElement() {
      console.log("blur");
      this.initEventVariables();
      this.flagEventsObject.esActivateBlur = true;
    },
    focusElement() {
      console.log("focus");
      this.initEventVariables();
      this.flagEventsObject.esActivateFocus = true;
    },
    oninputElement() {
      console.log("oninputElement");
      this.initEventVariables();
      this.flagEventsObject.esActivateOninput = true;
    },

    // recuperarLocalStorage:function(event){
    //   event.preventDefault();
    //   console.log('recuperarLocalStorage()')
    //   this.usuario = localStorage.getItem('usuario');
    //   if(this.usuario){
    //      if(this.email === JSON.parse(this.usuario).email)
    //        console.log('Se ha conectado con exito:'  + this.email)
  },
};
</script>
<style>
#login {
  font-family: "DIN Next W01 Light";
  margin-top: 100px;
  padding-bottom: 40px;
  background-color: #181818;
  min-width: 440px;
  min-height: 23rem;
  width: 410px;
  margin: 0 auto;
  font-size: 12px;
  min-height: 100vh;
}
#login img {
  width: 322px;
  height: 60px;
}
#login input,
#login button {
  display: block;
  width: 350px;
  font-size: 1.1rem;
}
#login button {
  background-color: #484848;
  font-size: 1.5em;
}
#remember-container {
  text-align: right;
  font-size: 1.25em;
}
#login h1 {
  font-size: 1.4rem;
  margin-bottom: 1.3rem;
  text-transform: uppercase;
  color: #edd700;
  text-align: center;
}
</style>