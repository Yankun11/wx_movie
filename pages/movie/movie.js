// pages/movie/movie.js
Page({
	data: {
		currentIndex:0,
		winHeight:500,
		hotMovie:[{nm:'abc',id:'11'},{nm:'xvz',id:'22'}]
	},
	movieDetail(e){
		wx.navigateTo({
			url: '/pages/movieDetail/movieDetail?id=' + e.currentTarget.id,
		})
	},
	changeCurrentIndex(e){
		this.setData({
			currentIndex:e.currentTarget.id
		})
	},

	onLoad(options){
		wx.request({
			url: 'https://m.maoyan.com/ajax/movieOnInfoList',
			success:(res => {
				console.log(res);
				this.setData({
					hotMovie:res.data.movieList,
					winHeight:res.data.movieList.length * 350
				})
			})
		})
	}
})