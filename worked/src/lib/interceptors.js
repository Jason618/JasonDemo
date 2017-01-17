//add vue-resource plugin
Vue.use(VueResource);

/*
 *@desc http 请求预处理
 *   所有异步请求都显示loading图标
 */
Vue.http.interceptors.push(function(request,next){
    //根据header判断请求类别
    var header = request.headers;
    console.info(header);
    var type = header.get('x-requested-with');
    if(!!type && type == 'xmlhttprequest'){
        console.info(type);
        //commit show loading
    }
    next(function(response){
        return response;
    });
});