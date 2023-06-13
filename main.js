import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// import axios from 'axios'
// 解决uniapp 适配axios请求，避免报adapter is not a function错误
// axios.defaults.adapter = config => {
// 	return new Promise((resolve, reject) => {
// 		let settle = require('axios/lib/core/settle');
// 		let buildURL = require('axios/lib/helpers/buildURL');
// 		uni.request({
// 			method: config.method.toUpperCase(),
// 			url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
// 			header: config.headers,
// 			data: config.data,
// 			dataType: config.dataType,
// 			responseType: config.responseType,
// 			sslVerify: config.sslVerify,
// 			complete: function complete(response) {
// 				// console.log("执行完成：", response)
// 				response = {
// 					data: response.data,
// 					status: response.statusCode,
// 					errMsg: response.errMsg,
// 					header: response.header,
// 					config: config
// 				};
// 				settle(resolve, reject, response);
// 			}
// 		})
// 	})
// }


//引vant组件
// import Vant from 'vant';
// Vue.use(Vant);

//引入store
import store from '@/store/index.js'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

// 引入并使用vue-i18n
import i18n from "@/locale/index.js";

App.mpType = 'app'

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n

const app = new Vue({
	store,
	i18n,
	...App
})
app.$mount()