// pages/movieDetail/movieDetail.js
Page({
	data: {
		id:''
	},

	onLoad(options) {
		this.setData({
			id:options.id
		})
		// wx.request({
		// 	url: 'url',
		// })
	}
})