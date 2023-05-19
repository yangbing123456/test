<template>
	<view>
		<view class="top-box" v-for='item in this.data' :key='item.id'>
			<view class="iconstyle">
				<image class="first-box" :src='item.icon' />
			</view>
			<view class="top-box-first">
				<view>
					<text style="color: #616161;padding-right: 0.3rem;">{{item.name}}</text>
					<text style="color: #FFC20C;font-size: 10px;">{{item.status}}</text>
				</view>
				<view>
					<text class="addressstyle">{{item.label}}</text>
					<text class="addressstyle">ip</text>
				</view>

			</view>
		</view>
		<view class="middle-box" id="container">
			<map style="width: 100%; height: 200px;" :scale='10' :latitude="latitude" :longitude="longitude"
				:markers="covers" />

		</view>
		<view class="bottom-box">
			<view class="bottom-box-first" v-for="item in dataArr" :key='item.id'>
				<text style="color: #9D9E9E;">{{item.time}}</text>
				<text style="color: #616161;">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	// import AMapLoader from '@amap/amap-jsapi-loader';
	export default {
		// name: "gaode",
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 22.276389,
				longitude: 114.182915,
				covers: [{
					latitude: 22.276389,
					longitude: 114.18291,
					iconPath: '../../../../static/Card1.png'
				}, {
					latitude: 22.276389,
					longitude: 114.18291,
					iconPath: '../../../../static/Card1.png'
				}],

				// map: null,
				data: [],
				dataArr: [{
						time: '8小时前，03:01',
						text: '成功登陆',
						id: 1
					},
					{
						time: '8小时前，03:01',
						text: '成功登陆',
						id: 2
					},
					{
						time: '8小时前，03:01',
						text: '成功登陆',
						id: 3
					},
					{
						time: '8小时前，03:01',
						text: '成功登陆',
						id: 4
					},
					{
						time: '8小时前，03:01',
						text: '成功登陆',
						id: 5
					},
				]
			}
		},
		onLoad(data) {
			let obj = JSON.parse(data.object)
			obj.icon = '../' + obj.icon
			this.data[0] = obj
		},
		mounted() {
			// this.initMap();
		},
		methods: {
			// initMap() {
			// 	AMapLoader.load({
			// 		key: "d0e0f08225d7443cf11ab1d60ff0457f", //此处填入我们注册账号后获取的Key
			// 		version: "2.0", //指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
			// 		plugins: [''], //需要使用的的插件列表，如比例尺'AMap.Scale'等
			// 	}).then((AMap) => {
			// 		this.map = new AMap.Map("container", { //设置地图容器id
			// 			viewMode: "3D", //是否为3D地图模式
			// 			zoom: 5, //初始化地图级别
			// 			center: [104.0045, 30.3140], //初始化地图中心点位置
			// 		});
			// 		// this.map.plugin(['AMap.MapType', 'AMap.Scale', 'AMap.HawkEye'], () => {
			// 		// 	this.map.addControl(new AMap.MapType());
			// 		// 	// this.map.addControl(new AMap.Scale());
			// 		// 	// this.map.addControl(new AMap.HawkEye());
			// 		// })
			// 	}).catch(e => {
			// 		console.log(e);
			// 	})
			// },


			// moveToLocation() {
			// 	let that = this; //防止this指向问题
			// 	wx.chooseLocation({
			// 		success: function(res) {
			// 			console.log(res.name);
			// 			//赋值给data中的mapName
			// 			that.setData({
			// 				mapName: res.name
			// 			})
			// 		},
			// 		//错误信息
			// 		fail: function() {
			// 			console.log(err);
			// 		}
			// 	})
			// }
		}
	}
</script>

<style lang="scss">
	.top-box {
		display: flex;
		width: 100%;
		padding: 1rem;

		.iconstyle {
			width: 3rem;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 0.5rem;
		}

		.first-box {
			width: 3rem;
			height: 3rem;
		}

		uni-image {
			width: 0.1rem;
			height: 0.1rem;
		}

		.top-box-first {
			display: flex;
			flex-direction: column;
			justify-content: center;

			.addressstyle {
				display: flex;
				flex-wrap: wrap;
				width: 12.5rem;
				font-size: 10px;
				color: #616161;
			}
		}
	}

	.middle-box {
		// width: 100%;
		// padding: 1rem;
		min-height: 12.5rem;
		border: 1px solid #EEEEEE;
		margin: 1rem;
		border-radius: 0.5rem;

	}

	.bottom-box {
		margin-top: 1rem;
		padding: 1rem;
		width: 100%;
		min-height: 6.25rem;

		.bottom-box-first {
			display: flex;
			justify-content: space-between;
			margin-bottom: 1rem;
		}
	}
</style>