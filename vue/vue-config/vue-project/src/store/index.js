/**
 * Created by Administrator on 2018/8/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultcity = '北京'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    city: localStorage.city || '北京'
  },
  actions: {
    changeCity (ctx,city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state,city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
