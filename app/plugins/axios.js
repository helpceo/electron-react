import axios from 'axios';

let http = axios.create(
  {
    baseURL:"http://192.168.1.9:9004/user/api/v1"
  }
  
);
// http.defaults.headers.common["Authorization"] = 'hdjhaskdhahdkah.djaljdjl';
http.interceptors.request.use(function(config){
    //在请求发出之前进行一些操作
    if(config.url.indexOf('?') === -1) {
        config.url += '?time=' + new Date().getTime()
    } else {
        config.url += '&time=' + new Date().getTime()
    }
    return config;
  },function(error){
    return Promise.reject(error);
  });
  //添加一个响应拦截器
  http.interceptors.response.use(function(res){
    //在这里对返回的数据进行处理
    
    return res;
  },function(error){
    // if (error.response && error.response.status === 401) {
        // 如果已经位于登陆那就不跳啦
        // if (window.location.pathname === '/login') return
        //     window.location.href = "/login"
        // }
    return Promise.reject(error);
  })
export default http;