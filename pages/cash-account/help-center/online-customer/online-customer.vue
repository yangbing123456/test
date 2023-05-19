<template>
	<view class="container">
		<view class="topbox" ref="box" id='box'></view>
		<view class="bottombox">
			<u-field v-model="mobile" label="" label-width='0' placeholder="编辑短信" @confirm='successHandler'>
			</u-field>
		</view>
		<!-- <m-chat ref="mChat" :messages="messages" @submit="submit" :loadMore="loadMore" height="100vh" :comment='true'> -->
		<!-- </m-chat> -->
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
				mobile: '',
				// messages: []
			}
		},
		methods: {
			// loadMore() {},
			// submit() {},
			successHandler() {
				let x = document.createElement('span')
				let y = document.createTextNode(this.mobile)
				x.appendChild(y)
				let A = document.getElementById('box')
				A.appendChild(x)
				A.style.textAlign = 'right'
				x.style.display = 'block'
				x.style.padding = '1rem'
				x.style.Width = '64px'
				x.style.Height = '1rem'
				x.style.backgroundColor = '#12D18E'
				x.style.borderRadius = '8px'
				x.style.color = 'white'
				x.style.margin = '1rem'
				this.mobile = ''
			}
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;

		.topbox {
			// width: 100%;
			min-height: 18.75rem;
			border: 1px solid #999999;
			margin: 1rem;
			border-radius: 0.5rem;
		}

		.bottombox {
			flex: 1;
			margin: 1rem;
			min-height: 2.5rem;
			border: 1px solid #999999;
			border-radius: 0.5rem;
		}
	}
</style>