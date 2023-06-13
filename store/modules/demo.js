const demo = {
	state: {
		Value: '',//观察名单类型
		languageCode: '' ,//国际化语言,
		// theme:'light',//主题颜色
	},

	getters: {
		demoValue: state => state.Value, //存放观察名单类型
		code: state => state.languageCode, //存放国际化语言
		// themeColor:state => state.theme,//获取主题颜色
	},

	mutations: {
		//set方法
		//修改观察名单类型
		demoValue1(state, demoValue) {
			state.Value = demoValue
		},
		//修改国际化语言
		code(state, updateCode) {
			state.languageCode = updateCode
		},
		//修改主题颜色
		// changeTheme(state,color){
		// 	state.theme = color
		// },
	}

}
export default demo