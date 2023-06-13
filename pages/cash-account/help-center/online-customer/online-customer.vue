<template>
	<view class="container">
		<!-- 聊天内容展示区域 -->
		<scroll-view scroll-y="true">
			<view class="topbox" ref="box" id='box'>

				<view v-for="(item,index) in dataArr" :key="index" :class="item.value == 1? 'chatStyle1' : 'chatStyle'">
					<text class="time" :class="item.value == 1? 'time1' : 'time'">{{item.time}}</text>
					<text class="content" :class="item.value == 1? 'content1' : 'content'">{{item.name}}</text>
				</view>

			</view>
		</scroll-view>
		<!-- 输入框区域 -->
		<view class="bottombox">

			<u-icon :name='icon' size="40" @click="leftIcon"></u-icon>
			<u-field v-model="mobile" label="" label-width='0'
				:placeholder="$t('online-customer.online-customer.5qzz8np4icg0')" @confirm='successHandler'
				:right-icon='rightIcon' @right-icon-click='rightIconClick'>
			</u-field>

		</view>
		<!-- <m-chat ref="mChat" :messages="messages" @submit="submit" :loadMore="loadMore" height="100vh" :comment='true'>
		</m-chat> -->
		<!-- uview验证弹窗 -->
		<u-top-tips ref="uTips"></u-top-tips>
	</view>
</template>

<script>
	// import MChat from '@maybecode/m-chat'
	// import {
	// 	createElementBlock,
	// 	createElementVNode,
	// 	createTextVNode
	// } from "vue"
	export default {
		// components: {
		// 	MChat
		// },
		data() {
			return {
				// bool: true,
				dataArr: [], //存放发送的消息的数组
				otherDataArr: [], //存放接收消息的数组
				mobile: '', //输入框的值
				icon: '../../../../static/fonts/lianjie.png',
				rightIcon: '../../../../static/fonts/Group262.png'
				// messages: []
			}
		},
		// onLoad(data){
		// 	let l = data.test
		// 	if(l == 5){
		// 		uni.navigateTo({
		// 			url:'/pages/my-account/account-verification/account-verification?status=我的账户'
		// 		})
		// 	}
		// },

		//接收路由参数
		onLoad(data) {
			// setInterval(() => {
			let hours = new Date().getHours() + 1
			let minutes = new Date().getMinutes()
			let seconds = new Date().getSeconds()
			if (hours < 10) {
				hours = '0' + hours
			} else if (minutes < 10) {
				minutes = '0' + minutes
			} else if (seconds < 10) {
				seconds = '0' + seconds
			}
			let time = hours + ":" + minutes + ":" + seconds
			let obj = {
				name: data.id,
				time: time,
				value: 1
			}
			this.dataArr.push(obj)
			// }, 5000)

		},
		// computed: {
		// 	test() {
		// 		setInterval(() => {
		// 			return true
		// 		}, 5000)
		// 	}
		// },
		mounted() {
			// this.initWebSocket()
		},
		methods: {
			/**
			 * 初始化websocket连接
			 */
			initWebSocket() {
				let uId = 1;
				let websocket = null;
				if ('WebSocket' in window) {
					websocket = new WebSocket("ws://localhost:8009/webSocket" + uId);
				} else {
					alert("该浏览器不支持websocket！");
				}
				websocket.onopen = (event) => {
					console.log("建立连接");
					websocket.send('Hello WebSockets!');
				}
				websocket.onclose = (event) => {
					console.log('连接关闭')
					this.reconnect(); //尝试重连websocket
				}
				//建立通信后，监听到后端的数据传递
				websocket.onmessage = (event) => {
					let data = JSON.parse(event.data);
					//业务处理....
					if (data.step == 1) {
						alert(data.msg);
					}
				}
				websocket.onerror = () => {
					// notify.warn("websocket通信发生错误！");
					// initWebSocket()
				}
				window.onbeforeunload = () => {
					websocket.close();
				}
			},
			// 重连
			// reconnect() {
			// 	console.log("正在重连");
			// 	// 进行重连
			// 	setTimeout(() => {
			// 		this.initWebSocket();
			// 	}, 1000);
			// },



			// loadMore() {},
			// submit() {},
			//左侧按钮事件
			leftIcon() {
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths)); //拍照图片的路径
					}
				});
			},
			//右侧发送图标事件
			rightIconClick() {
				let hours = new Date().getHours()
				let minutes = new Date().getMinutes()
				let seconds = new Date().getSeconds()
				if (hours < 10) {
					hours = '0' + hours
				} else if (minutes < 10) {
					minutes = '0' + minutes
				} else if (seconds < 10) {
					seconds = '0' + seconds
				}
				let time = hours + ":" + minutes + ":" + seconds
				console.log(time)
				let obj = {
					name: this.mobile,
					time: time,
					value: ''
				}
				if (this.mobile != '') {
					this.dataArr.push(obj)
				} else {
					this.$refs.uTips.show({
						title: '1',
						type: 'warning',
						duration: '2300'
					})
				}
				console.log(obj, '222222')
				this.mobile = ''

			},
			//回车事件
			successHandler() {
				let hours = new Date().getHours()
				let minutes = new Date().getMinutes()
				let seconds = new Date().getSeconds()
				if (hours < 10) {
					hours = '0' + hours
				} else if (minutes < 10) {
					minutes = '0' + minutes
				} else if (seconds < 10) {
					seconds = '0' + seconds
				}
				// time1 - test > 60
				let time = hours + ":" + minutes + ":" + seconds
				console.log(time)
				let obj = {
					name: this.mobile,
					time: time,
					value: ''
				}
				if (this.mobile != '') {
					this.dataArr.push(obj)
				} else {
					this.$refs.uTips.show({
						title: '1',
						type: 'warning',
						duration: '2300'
					})
				}
				// this.dataArr.push(obj)
				console.log(obj, 'mmmm')
				this.mobile = ''
				// let x = document.createElement('span')
				// let y = document.createTextNode(this.mobile)
				// x.appendChild(y)
				// let A = document.getElementById('box')
				// A.appendChild(x)
				// A.style.textAlign = 'right'
				// x.style.display = 'block'
				// x.style.padding = '1rem'
				// x.style.Width = '64px'
				// x.style.Height = '1rem'
				// x.style.backgroundColor = '#12D18E'
				// x.style.borderRadius = '8px'
				// x.style.color = 'white'
				// x.style.margin = '1rem'
			}
		}
	}
</script>

<style lang="scss">
	html,
	uni-page-body {
		height: 100%;
		width: 100%;
	}

	.chatStyle {
		width: 100%;
		min-height: 48px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
	}

	.time {
		text-align: center;
		width: 100%;
		margin-bottom: 0.5rem;
	}

	.content {
		min-width: 1rem;
		margin-bottom: 0.5rem;
		margin-right: 1rem;
		background-color: #12D18E;
		color: white;
		padding: 0.5rem;
	}

	.chatStyle1 {
		width: 100%;
		min-height: 48px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.time1 {
		text-align: center;
		width: 100%;
		margin-bottom: 0.5rem;
	}

	.content1 {
		min-width: 1rem;
		margin-bottom: 0.5rem;
		margin-left: 1rem;
		background-color: #e5e5e5;
		color: white;
		padding: 0.5rem;
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;

		.topbox {
			// width: 100%;
			height: 37.5rem;
			// border: 1px solid #999999;
			margin: 1rem 1rem 0 1rem;
			border-radius: 0.5rem;
			overflow: auto;
		}

		.bottombox {
			min-height: 3rem;
			margin: 1rem;
			// border: 1px solid #999999;
			border-radius: 0.5rem;
			background-color: #F5F5F5;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			bottom: 0.5rem;
			width: 94%;
		}

		.u-field {
			width: 100%;
		}
	}
</style>