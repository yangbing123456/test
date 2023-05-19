import request from '@/utils/request'

/**
 * 授权登录
 * @param {*} data 
 */
export function wxLogin() {
	return request({
		url: '/wedding/hq-applets-user/wxLogin',
		method: 'post',
		params: {},
		// data
	})
}