import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
  state: {
    info:[] ,//Array Vacio
    page:1,
    flagsPilots:false,
    dataPerson:{},
    flagUser:false,
    // itemShipModel:'',
    pilotsItemData:[],
    itemDetailsSelect:'',
    nItemPilots:0,
    nCountPilots:0
  },
  mutations: {
    //flagUser: true si el usuario existe en el localstorage
    ADD_PAGE:(state)=>{(++state.page)},
    SET_USER:(state,dataUser)=>{state.dataPerson  = Object.assign({} , dataUser);},

    SET_ITEMSHIP_PILOTS:function(state,payload){
      console.log('tipo1:' + typeof(payload));
      console.log('tipo2:' + typeof(state.pilotsItemData));
     
        state.pilotsItemData.push(payload);
         console.log(state.pilotsItemData);
         console.log(state.info);
    },
     SET_EMPTY_PILOTS:function(state){
         state.pilotsItemData=[];
         console.log('pilotsItemData:')
          console.log(state.pilotsItemData);
     },
     SET_NITEMS_PILOTS:function(state,newValue){
      state.nItemPilots=newValue;
      console.log('1.- state.nItemPilots:')
       console.log(state.nItemPilots);
      },
      SET_COUNT_PILOTS:function(state){
        state.nCountPilots++;
        console.log('1. state.nCountPilots:')
         console.log('A. :' + state.nCountPilots);
      },
      SET_FLAG_USER:function(state,newValue){
        state.flagUser = newValue;
      },
    
    // SET_ITEM_SHIP_MODEL(state, itemShipModel) {
    //   state.itemShipModel = itemShipModel;
    //   console.log( 'APA:' + state.itemShipModel)
    // },
 
  SET_ITEMSHIPINFO:function(state,payload){
    for(let i in payload){
      state.info.push(payload[i]);
    }
    console.log('PEPINOOOO')
    console.log(state.info);
    },
    SET_FLAGPILOT:function(state,newValue){
      state.flagsPilots = newValue;
    }
  },
  actions: {
    GET_ITEMSHIP: (state) =>
    {
      axios
       .get(`https://swapi.py4e.com/api/starships?page=${state.state.page}`)
      .then(response => {
        if(response.status == 200){
           //let shipListInfo = response.data.results;
            // state.info.push(response.data.results);
            //  console.log("Antes de la siguiente llamada");
            //  console.log(state.state.info);
             state.commit("SET_ITEMSHIPINFO",response.data.results);
            //  console.log('Despues de la llamada');
            //  console.log(state.state.info);

            // state.state.page++;
             state.commit("ADD_PAGE",state.state.page);
             
        }
        console.log ('TESOROOOO');
        
       })
      .catch(error=>console.log(error));
    },
   
    
    LOGIN_USER:function(state,dataUser){
      console.log("LOGIN_USER....");
      let userLocal='';
      if (localStorage.length > 0)
      {
         userLocal = localStorage.getItem('usuario');
         
         if(userLocal != null){
           console.log("Hay localstorage....")
          if((dataUser.email === JSON.parse(userLocal).email) &&
            (dataUser.password === JSON.parse(userLocal).password)){
              localStorage.setItem("usuario", JSON.stringify(dataUser));
              state.commit("SET_USER",dataUser);
              state.commit("SET_FLAG_USER",true);
              //state.state.flagUser = true;
              console.log('El usuario es correcto');
            }
            else {
              console.log("Usuario no registrado...");
              state.commit("SET_FLAG_USER",false);
             // state.state.flagUser = false;
            }
         }
         else{  
          console.log('El usuario no registrado..');
          state.commit("SET_FLAG_USER",false);

          // state.state.flagUser = false;
         }

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
    },
    
    GET_ALLITEMSPILOTS(state,pilotsUrlArray){

      console.log(state);
      console.log('GET_ALLITEMSPILOTS...');
      console.log('A PA2: ' + pilotsUrlArray.length);
      state.commit('SET_NITEMS_PILOTS',4);

      console.log('state.nItemPilots:' + state.state.nItemPilots);
      console.log('2.- state.nCountPilots: ' +  state.state.nCountPilots);

      if(pilotsUrlArray.length > 0 && 
        (state.state.nCountPilots != state.state.nItemPilots)){

       console.log('3.- state.nCountPilots: ' +  state.state.nCountPilots);
       console.log('state.nItemPilots: '+ state.state.nItemPilots);
        state.commit('SET_FLAGPILOT',true);

        //   this.pilotsItems = Object.values(this.itemShip['pilots']);
           console.log('APAAA')
           console.log(pilotsUrlArray);
          // state.commit("SET_ITEMPILOTS");
          console.log(state);
   
           for( let urlPilot of pilotsUrlArray){

             console.log('FREJOREL:  ' + urlPilot);
             console.log('pilotsItemData:' );
             console.log( state.state.pilotsItemData)

           //  this.$store.GET_ITEMPILOTS(urlPilot);
           axios
           .get(urlPilot)
           .then(response => {
            if(response.status == 200){
               let shipPilots = response.data;
               console.log("JAMONNNN");
               console.log(shipPilots);
               state.commit("SET_ITEMSHIP_PILOTS",shipPilots);
               state.commit("SET_COUNT_PILOTS");
            }
            else{
              console.log("No funciono la llamada");
              console.log(response.status);
            }
           })
          .catch(error=>console.log(error));
             console.log('Estamos despues de la llamada del ...')
           }
            console.log(state.state.pilotsItemData); 
          }
    }

  },
 
  getters: {
    getPilotData:(state)=>{
      console.log('LLamando al getPilotData.."');
      return state.pilotsItemData;
    },
  //   getModel: (state) => {
  //     console.log('getModel');
  //     return state.itemShipModel;
  //   }
   }
})
