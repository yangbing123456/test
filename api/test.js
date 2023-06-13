//引入axios配置
import request from '@/utils/request'

//导出请求方法
/**
 * 授权登录
 * @param {*} data 
 */
// export function wxLogin(data) {
// 	return request({
// 		url: 'http://127.0.0.1:9999/api/user/login.do',
// 		method: 'post',
// 		data:data
// 		// data
// 	})
// }

export default {
	Login(data) {
		return request({
			url: 'http://127.0.0.1:9999/api/user/login.do',
			method: 'post',
			data: data
			// data
		})
	},
	register(data) {
		return request({
			url: 'http://127.0.0.1:9999/api/user/reg.do',
			method: 'post',
			data: data
		})
	}
}