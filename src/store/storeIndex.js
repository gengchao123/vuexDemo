import Vue from 'vue'
import Vuex from 'vuex'
import shelfpicking from './modules/shelfpicking'
import userStore from './modules/userStore'
import vuexTest from './modules/vuexTest'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    shelfpicking, userStore, vuexTest
  }
})

export default store