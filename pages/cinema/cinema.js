// pages/cinema/cinema.js
Page({
	data: {
		scrollViewTitle:[
			'Vip专享','视频','图片','趣事','精华','穿越','爆料'
		],
		currentIndex:0,
		winHeight:0,
		vipPages:1,
		vipArray:[]
	},
	changeCurrentIndex(e){
		this.setData({
			currentIndex:e.currentTarget.id
		})
	},

	onLoad(options) {

	},
})