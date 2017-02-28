// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource';

/* eslint-disable no-new */

Vue.use(vueResource);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});


//设置请求头
// Vue.http.interceptors.push({
//   request (request) {
//     request.headers = request.headers || {};
//     request.headers['Cache-Control'] = 'no-cache';
//     request.headers['If-Modified-Since'] = '0';
//     request.headers.userAgent='Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';
//     request.headers.acceptsEncoding='gzip, deflate, sdch';
//     request.headers.acceptsLanguage='zh-CN,zh;q=0.8';
//     request.headers.referer='';
//     return request;
//   }
// });

Vue.http.interceptors.push((request, next) => {
  request.headers = request.headers || {};
  request.headers['Cache-Control'] = 'no-cache';
  request.headers['If-Modified-Since'] = '0';
  request.headers.userAgent='Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';
  request.headers.acceptsEncoding='gzip, deflate, sdch';
  request.headers.acceptsLanguage='zh-CN,zh;q=0.8';
  request.headers.referer='';

  next((response) => {//在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法

  });

  return request;

});

