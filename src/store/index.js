import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
  state: {
    info:[] ,
    page:1,
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
  
  getters: {
    getInfo:(state)=>{
      return state.info}
  }
})
