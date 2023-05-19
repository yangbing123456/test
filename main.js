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


// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';

// 引入并使用vue-i18n
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 构造i18n对象
const i18n = new VueI18n({
	// 默认语言，这里的local属性，对应message中的cn、en属性
	locale: 'cn',
	// 引入语言文件
	messages: {
		// 这里的属性名是任意的，您也可以把zh设置为cn等，只是后续切换语言时
		// 要标识这里的语言属性，如：this.$i18n.locale = zh|en|cn|xxx
		'cn': Chinese,
		'en': English,
	}
})

App.mpType = 'app'

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n

const app = new Vue({
	i18n,
	...App
})
app.$mount()