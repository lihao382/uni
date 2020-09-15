
//引入路由
import router from './router';
//导入当前登录接口
import logins from './api/login';

router.beforeEach((to,from,next)=>{
  const token=localStorage.getItem("UNI_token")
  if(!token){
    if(to.path!=="/login"){
      next("/login")
    }else{
      next()
    }
  }else{
    if(to.path=="/login"){
      next()
    }else{
      const login_info=localStorage.getItem("UNI_info")
      if(login_info){
        next()
      }else{
        logins.login().then(res=>{
          if(res.code==200){
            localStorage.setItem('user',JSON.stringify(res.data));
            next()
          }else{
            localStorage.removeItem("UNI_token");
            this.$message({
              message:"请先登录",
              type:"warning"
            });
            next("/login")
          }
        })
      }
    }
  }
})

