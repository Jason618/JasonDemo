import Vue from 'vue'
import VueResource from 'vue-resource'

//add vue-resource plugin
Vue.use(VueResource);

const domain = 'https://cnodejs.org/api/v1/topics'

export default {
    getList: function (data, callback) {
        Vue.http.get(domain, {
            params: data
        }).then(callback, function (error) {
            console.info(error);
        })
    }
}
