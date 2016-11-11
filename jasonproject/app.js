//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getData:function(obj){
    wx.request({
      url: obj.url,
      data: obj.data || {},
      method: obj.method || 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        if(typeof obj.success == 'function'){
          obj.success(res);
        }
      },
      fail: function() {
        // fail
        if(typeof obj.fail == 'function'){
          obj.fail();
        }
      },
      complete: function() {
        // complete
        if(typeof obj.complete == 'function'){
          obj.complete();
        }
      }
    })
  },
  globalData:{
    userInfo:null
  }
})