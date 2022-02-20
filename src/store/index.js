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
    SET_USER:(state,dataUser)=>{state.dataPerson  = Object.assign({} , dataUser);}

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
    },
    LOGIN_USER:function(state,dataUser){
      // state.dataPerson.email=dataUser.email;
      // state.dataPerson.password=dataUser.password;
      //state.dataPerson  = Object.assign({} , dataUser);
      console.log('3');
      console.log(dataUser);
      
      console.log(state.dataPerson)
      let userLocal='';
      if (localStorage.length > 0)
      {
         userLocal = localStorage.getItem('usuario');
         //console.log('Usuario Local:' + userLocal);
         
         if(userLocal != null){
          if((dataUser.email === JSON.parse(userLocal).email) &&
            (dataUser.password === JSON.parse(userLocal).password)){
              localStorage.setItem("usuario", JSON.stringify(dataUser));
              state.commit("SET_USER",dataUser);
              state.flagUser = true;
              console.log('El usuario es correcto');
            }
         }
         else{  
          console.log('El usuario no registrado');
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
      let userLocal='';
      if (localStorage.length > 0)
      {
         userLocal = localStorage.getItem('usuario');
         if(userLocal != null){
            if((dataUser.email === JSON.parse(userLocal).email) &&
              (dataUser.password === JSON.parse(userLocal).password)){
                dataUser={};
                console.log('Usuario ya registrado');
                state.commit("SET_USER",dataUser);
              }
              else{
                console.log(dataUser);
                localStorage.setItem("usuario", JSON.stringify(dataUser));
                state.commit("SET_USER",dataUser);
              }
            }
          else{
              localStorage.setItem("usuario", JSON.stringify(dataUser));
              state.commit("SET_USER",dataUser);
          }
      }
    }

  },
 
  getters: {
    getInfo:(state)=>{
      return state.info;
    },
    getUserExiste:(state)=>{
       return state.flagUser;
    }
   
  }
})
