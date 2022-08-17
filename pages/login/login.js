// pages/login/login.js
Page({
	data: {
		loginBtnState:true,  //控制登录按钮是否可用
		username:"",
		password:""
	},
	// 用户名输入框事件
	usernameInput:function(e){
		console.log(e);
		var val = e.detail.value;
		if (val != '') {
			this.setData({
				username:val
			});
			if (this.data.password != '') {
				this.setData({
					loginBtnState:false,
				})
			}
		}else{
			this.setData({
				loginBtnState:true,
			})
		}
	},
	// 密码输入框事件
	passwordInput:function(e){
		var val = e.detail.value;
		if (val != '') {
			this.setData({
				password:val
			});
			if (this.data.username != '') {
				this.setData({
					loginBtnState:false,
				})
			}
		}else{
			this.setData({
				loginBtnState:true,
			})
		}
	},
	// 登录按钮事件
	login:function(){
		var userInfs = wx.getStorageSync('userobjs') || [];
		var userInf = userInfs.find(item=>item.username == this.data.username)
		if (userInf) {
			if (userInf.password == this.data.password) {
				wx.showToast({
					title:"登录成功",
					duration: 2000,
					success:function(){
						wx.navigateTo({
							url:'../my/my'
						})
					}
				})
			}else{
				wx.showToast({
					title: '密码错误',
					duration: 2000,
				})
			}
		}else{
			wx.showToast({
				title: '用户名不存在',
				duration: 2000,
			})
		}
	}
	
})