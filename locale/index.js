/*
 * @Author: “wangsong” “1023151055@qq.com”
 * @Date: 2023-04-14 14:04:47
 * @LastEditors: “wangsong” “1023151055@qq.com”
 * @LastEditTime: 2023-05-26 14:27:47
 * @FilePath: \oc-web\src\locale\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 批量导入langs下的Json文件夹
const path = require("path");
const files = require.context("./langs", false, /\.json$/);
const modules = {};
const langList = []
files.keys().forEach((key) => {
	const name = path.basename(key, ".json");
	langList.push(name)
	modules[name] = files(key).default || files(key);
});

console.log(modules, 'Json文件模块');
console.log(langList, '语言列表');

import VueI18n from 'vue-i18n'
// import en from './langs/en'
// import zh from './langs/zh-cn'
import Vue from 'vue'
// import store from '@/store/index.js'
Vue.use(VueI18n)

const i18n = new VueI18n({
	// locale: localStorage.getItem('languageCode') ||  'zh-cn',
	locale: uni.getStorageSync('code') || 'zh-cn',
	messages: {
		// 'zh-cn': { ...zh },
		// 'en': { ...en }
		...modules
	},
	silentTranslationWarn: true
})

export default i18n