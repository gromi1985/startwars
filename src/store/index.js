import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
  state: {
    info:[] ,
    page:1,
    dataPerson:{}
  },
  mutations: {
    LOAD_ITEMSHIP:function(state,payload){
      let varTemp = [];
      varTemp = payload;
      varTemp = state.info.concat(payload);
      state.info = varTemp;
      },
    ADD_PAGE:(state)=>{(state.page++)
    console.log('AMERICA3 :' + state.page)}
  },
  actions: {
    //metodos
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
        
       
        //console.log('AMERICA :' + state.state.page);
        })
      .catch(error=>console.log(error));
    }
  },
   PUSH_USER:(state) =>
   {
      let user = JSON.stringify(state.state.dataPerson);//objeto json
      console.log(user);
      return true;

      //localStorage.setItem ("user", user);

      // this.dataPerson.email = this.email;
      // this.dataPerson.password = this.password;
      // this.dataPerson.firstName = this.firstName;
      // this.dataPerson.firstName = this.lastName;
      // this.dataPerson.offers = this.offers;
      // this.dataPerson.displayName = false;

      // localStorage.setItem("usuario", JSON.stringify(this.dataPerson));
   },
   GET_USER:(state)=>
  {
    let user = JSON.stringify(state.state.dataPerson);//objeto json
    console.log(user);
    return true;
   // localStorage.getItem('usuario'.state.dataPerson.usuario,);
  },
  
  getters: {
    getInfo:(state)=>{
      return state.info}
  }
})
