// pages/cinema/cinema.js
Page({
	data: {
		scrollViewTitle:[
			'Vip专享','视频','图片','趣事','精华','穿越','爆料'
		],
		currentIndex:0,
		winHeight:100,
		vipTotalPages:3,
		vipPages:1,
		vipArray:[],
		videoArray:[],
		imageArray:[]
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
							winHeight:result.windowHeight * vipArr.length / 1.5
						})
					},
				});
				this.setData({
					vipPages:pages
				})
			}
		});
	},
	// 下拉刷新事件
	onPullDownRefresh(){
		this.loadVip(this.data.vipPages);
	},
	// 上拉触顶事件
	onReachBottom(){
		if (this.data.currentIndex == 0) { //vip
			if (this.data.vipPages > this.data.vipTotalPages) {
				wx.showToast({
					title: '已经到底了哦',
				})
			}else{
				this.loadVip(this.data.vipPages + 1);
			}
		}
		if (this.data.currentIndex == 1) { //视频
			
		}
		if (this.data.currentIndex == 2) { //图片
			
		}
	},
	onShareAppMessage(){
		return{
			title:"123"
		}
	},
	onShareTimeline(){
		return{
			title:"aaaa",
			path:"/pages/cinema/cinema",
			desc:"xxxxx"
		}
	}
})