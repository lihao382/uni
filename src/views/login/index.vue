<template>
  <div id="login">
    <div>
      <p>UNI-ADMIN</p>
      <el-form :model="form" status-icon ref="form" :rules="rules" class="login_input">
        <el-form-item  prop="username">
           <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
         <el-form-item prop="password">
            <el-input el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
         </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="logins('form')">登录</el-button>
          </el-form-item>
          
      </el-form>
     
    </div>
  </div>
</template>
<script>
import loginApi from '../../api/login'
export default {
  name: "login",
  data() {
    return {
      form:{
        username:"",
        password:""
      },
       rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          
        ]
      }
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    logins(formName){

      this.$refs[formName].validate(valid=>{
          
        if(valid){
          
          // console.log(this.form.username)
          loginApi.login(this.form).then(res=>{
            console.log(res)
            if(res.status==200){
              const login_token=res.data.data.token
              const login_role=res.data.data;
              console.log(login_role)
              if(login_role.status==1){
                const login_info=login_role;
                localStorage.setItem("UNI_info",JSON.stringify(login_info))
              }
              localStorage.setItem("UNI_token",login_token)
              this.$router.push("/")
              this.$message({
                message:"登录成功",
                type:"warning"
              })
              
            }
          })
        }
      })
    }
  },
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
#login {
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  margin: 50px auto;
  p {
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid;
    font-weight: bold;;
  }
  .login_input {
    height: 60px;
    width: 80%;
    padding: 10px;
    margin: 10px auto;
     text-align: center;
      vertical-align:middle;
      .el-input{
        margin: 5px;
      }
    .el-button{
      width: 80%;
      margin-top: 20px;
      // text-align: center;
      // vertical-align:middle;
    }
  }
}
</style>
