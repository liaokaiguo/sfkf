import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    navIndex:localStorage.navIndex || 1
  },

  mutations:{
    setNavIndex(state,navIndex){
      state.navIndex = navIndex;
    }
  }
})
