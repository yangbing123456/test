import request from '../utils/uniRequest.js'

export default {
	//注册接口
	register(data) {
		return request.post(
			'/app/user/reg',
			data
		)
	},
}