import Vue from 'vue'

//引入注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//数据持久化
//uniapp移动端想要数据持久化  就用uni.setStorageSync   用store做不了  即使插件也不行  因为访问不了window.locastorage
// import createPersistedstate from 'vuex-persistedstate'

//引入xx模块仓库
import demo from './modules/demo.js'

export default new Vuex.Store({
	modules: {
		demo
	},
	//数据持久化
	// plugins: [
	// 	createPersistedstate({
	// 		key: 'user',
	// 		paths: ['demo']
	// 	})
	// ]
	// state: {

	// 	//属性
	// 	Value: "普通视图",

	// },

	// getters: {
	// 	demoValue: state => state.Value,
	// },

	// mutations: {

	// 	//set方法
	// 	demoValue1(state, demoValue) {

	// 		state.Value = demoValue

	// 	},

	// },

	// actions: {

	// 	//这个部分我暂时用不上

	// },


})