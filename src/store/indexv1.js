import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
  state: {
    info:[] ,
    page:1,
    dataPerson:{},
    flagUser:false
  },
  mutations: {
    //flagUser: true si el usuario existe en el localstorage
    LOAD_ITEMSHIP:function(state,payload){
      let varTemp = [];
      varTemp = payload;
      varTemp = state.info.concat(payload);
      state.info = varTemp;
      },
    ADD_PAGE:(state)=>{(state.page++)
    console.log('AMERICA3 :' + state.page)
    },
    SETUSER:function(state,dataUser){
      // state.dataPerson.email=dataUser.email;
      // state.dataPerson.password=dataUser.password;
      state.dataPerson  = Object.assign({} , dataUser);
      console.log(state.dataPerson)
      let userLocal='';
      if (localStorage.length > 0)
      {
         userLocal = localStorage.getItem('usuario');
         console.log('Usuario Local:' + userLocal);
         
         if(userLocal != null){
         console.log("Entro mal");
          if((state.dataPerson.email === JSON.parse(userLocal).email) &&
            (state.dataPerson.password === JSON.parse(userLocal).password)){
              localStorage.setItem("usuario", JSON.stringify(state.dataPerson));
              state.flagUser = true;
            }
         }
         else{  
          console.log("Entro aqui");
       
          state.flagUser = false;
         }

       }
       else {
         console.log("Usuario no registrado");
         this.flagUser = false;
       }
    },
    REGISTERUSER:function(state,dataUser){
      console.log('REGISTERUSER');
      state.dataPerson  = Object.assign({} , dataUser);
      console.log(state.dataPerson);
      localStorage.setItem("usuario", JSON.stringify(state.dataPerson));
    }
    
  },
   actions: {
    GET_ITEMSHIP: (state) =>
    {
      axios
      .get(`https://swapi.dev/api/starships?page=${state.state.page}`)
      .then(response => {
        if(response.status == 200){
           let shipListInfo = response.data.results;
            state.commit("LOAD_ITEMSHIP",shipListInfo);
            state.commit("ADD_PAGE",state.state.page);
        }
       })
      .catch(error=>console.log(error));
    }
  },
 
  
  
  getters: {
    getInfo:(state)=>{
      return state.info;
    },
    getUserExiste:(state)=>{
       return state.flagUser;
    },
    // getExisteUser:(state)=>{
    //  // console.log('getExisteUser');
    //   return state.page;
    //   // let userLocal='';
    //   // if (localStorage.length > 0)
    //   // {
    //   //   userLocal = localStorage.getItem('usuario');
    //   //   if((state.dataPerson.email === JSON.parse(userLocal).email) &&
    //   //     (state.dataPerson.password === JSON.parse(userLocal).password))
    //   //     return true;
    //   // }
    //   // else {
    //   //   console.log("Usuario no registrado");
    //   //   return false;
    //   // }
    // }
   // localStorage.getItem('usuario'.state.dataPerson.usuario,);
  },
  //getExisteUserYes:(state,getters)=>{ getters.getExisteUser.length},
    
})
