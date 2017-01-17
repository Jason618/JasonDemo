import Vue from 'vue'
import VueResource from 'vue-resource'

//add vue-resource plugin
Vue.use(VueResource);

/*
 *@desc http 请求预处理
 *   所有异步请求都显示loading图标
 */
Vue.http.interceptors.push(function(request,next){
    //根据header判断请求类别
    var header = request.headers;
    var showLoading = header.get('showLoading');
    if(!!showLoading && showLoading == 'true'){
        //commit show loading
        //最后清除header中的showloading  showLoading不是标准的header参数
        header.delete('showLoading');
    }
    
    next(function(response){
        return response;
    });
});