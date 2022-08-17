// pages/iphone/iphone.js
Page({
	data: {

	},
	formSubmit:function(e){
		console.log(e.detail.value);
		var obj = {};
		obj.username = e.detail.value.username;
		obj.password = e.detail.value.pwd;
		obj.code = e.detail.value.code;
		obj.iphone = e.detail.value.iphone;
		console.log(obj);
		
		// 本地存放注册的多个用户
		var arr = wx.getStorageSync('userobjs') || [];
		arr.push(obj);
		wx.setStorageSync('userobjs', arr);
		wx.showToast({
			title:"登录成功",
			duration: 2000,
			success:function(){
				wx.navigateTo({
					url:'../login/login'
				})
			}
		})
	},

	onLoad(options) {
		wx.setNavigationBarTitle({
			title: '手机号注册',
		})
	},
})