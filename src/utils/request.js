import axios from "axios";

import { Loading } from 'element-ui';

const loading={
  loadinginstance:null,
  open(){
    if(this.loadinginstance===null){
      this.loadinginstance=Loading.service({
        target:".appmain",
        text:"正在加载中",
        background:"rgba(0,0,0,0.5)"
      })
    }
  },
  close(){
    if(this.loadinginstance!==null){
      this.loadinginstance.close()
    }
    this.loadinginstance=null
  }
}

const Server = axios.create({
  // baseURL: process.env.VUE_APP_SERVICE_URL,
  baseURL:process.env.VUE_APP_BASE_API,
  timeout: 3000
});

Server.interceptors.request.use(
  function(config) {
    loading.open()
    
    const token=localStorage.getItem("UNI_token")?localStorage.getItem("UNI_token"):"";

     config.headers.token=token
     
    

    console.log("请求拦截")
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Server.interceptors.response.use(
  function(response) {
    loading.close()
    // if(response.data.code=="202"){
    //   localStorage.removeItem("UNI_token")
    //   localStorage.removeItem("UNI_info")
    //   router.push({path:"/login"})
    // }
    console.log("响应拦截")
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default Server;
