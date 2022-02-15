import { createStore } from 'vuex'

export default createStore({
  state: {
    info:[],
    ItemAddInfo:[]
  },
  mutations: {
    addInfoShips(state){
      state.info = [state.info,...state.ItemAddInfo]
    }
  },
  actions: {
    //metodos
    AddInfoShipsAction(contexto){
      contexto.commit('addInfoShips')
    }
    
  },
  modules: {
    gettersInfo(state){
      return (state.info);
    }
  }
})
