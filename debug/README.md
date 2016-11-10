#Xcode内置模拟器调试web页面

##环境准备
*Mac 我当前版本：10.11.3  主要是需要内置的Safari浏览器
*xcode   其实只需要内置的simulator
>提示: 内置的simulator默认安装在这里：/Applications/Xcode.app/Contents/Developer/Applications,可以手动启动后保留在Dock,
方便以后使用

##安装app到模拟器中
>xcrun simctl install device path/to/xxx.app
>*说明：xcrun 是xcode提供的执行命令的方式
>*      simctl 是xcode提供的对模拟器操作的命令      xcrun simctl help 可以查看其它命令
>*模拟器内不支持app store安装方式 只支持.app文件安装   xcode=>file=>project setting=>.app 查找文件路径

##打开Safari浏览器的开发模式
>safari=>偏好设置＝》高级＝》在菜单栏现实“开发”菜单

##使用app打开需要调试的url
>xcrun simctl openurl test5s cmlive://openwebview?url=http://localhost:8080/index.html
>*说明：test5s是我本地模拟器里面iphone5s的设备名称
>*说明：cmlive:// 是web与app之前定义的scheme协议，liveme里面还支持其他操作






