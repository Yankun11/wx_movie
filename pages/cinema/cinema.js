// pages/cinema/cinema.js
Page({
	data: {
		scrollViewTitle:[
			'Vip专享','视频','图片','趣事','精华','穿越','爆料'
		],
		currentIndex:0,
		winHeight:110,
		vipPages:1,
		vipArray:[]
	},
	changeCurrentIndex(e){
		this.setData({
			currentIndex:e.currentTarget.id
		})
	},
// 请求数据
	onLoad(options) {
		// 第一次加载时，加载第一页
		this.loadVip(this.data.vipPages);
	},
	// 加载vip内容
	loadVip(pages){
		var url = "http://m2.qiushibaike.com/article/list/text?type=refresh&count=12&page=" + pages;
		wx.request({
			url: url,
			success:res=>{
				var vipArr = [...this.data.vipArray,...res.data.items]
				this.setData({
					vipArray:vipArr
				});
				wx.getSystemInfo({
					success: (result) => {
						this.setData({
							winHeight:result.windowHeight * vipArr.length / 2
						})
					},
				});
				this.setData({
					vipPages:pages
				})
			}
		});
	}
})