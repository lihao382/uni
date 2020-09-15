<template>
  <div id="head">
    <p>UNI-ADMIN</p>
    <div>
      <el-menu
        :router="true"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="yellow"
        @select="handleSelect"
      >
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/shop">商品</el-menu-item>
        <el-menu-item index="/orde">订单</el-menu-item>
        <el-menu-item index="/member">会员</el-menu-item>
        <el-menu-item index="/setup">设置</el-menu-item>
        <el-menu-item>
          <div class="log">
      <el-dropdown @command="handle">
        <span class="el-dropdown-link">
          {{names}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="el-icon-edit" command="changepass">修改密码</el-dropdown-item>
          <el-dropdown-item class="el-icon-s-fold" command="checkout">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      names:""
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    const info=JSON.parse(localStorage.getItem("UNI_info"))
    console.log(info)
    this.names = info.username !== "undefined" ? info.username : "";
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    handle(command){
    console.log(command)
    switch (command) {
      case "cheangepass":
        this.changepass();
        break;
      case "checkout":
        this.checkout();
        break;
    }
  },
   cheangepass(){
    console.log("修改密码")
  },
  checkout(){
    localStorage.removeItem("UNI_token");
    localStorage.removeItem("UNI_info");
    this.$router.push("/login")
  }
  },
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
#head {
  width: 100%;
  height: 60px;
  background: #545c64;
  position: absolute;
  top: 0;
  left: 0;
  p{
    float: left;
    font-size: 18px;
    font-weight: 700;
    line-height: 60px;
    padding-left: 20px;
    color: whitesmoke;
  }
  .el-menu{
    float: right;
  }

}
.el-dropdown-link{
  color: whitesmoke;
}
</style>
