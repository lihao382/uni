<template>
   <div id="shop_index">
    <div class="left">
      <el-menu
        :router="true"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/shop/shop_index">
          <i class="el-icon-s-claim"></i>
          <span slot="title">商品列表</span>
        </el-menu-item>
        <el-menu-item index="/shop/shop_index1">
          <i class="el-icon-s-help"></i>
          <span slot="title">分类列表</span>
        </el-menu-item>
        <el-menu-item index="/shop/shop_index2">
          <i class="el-icon-s-help"></i>
          <span slot="title">商品规格</span>
        </el-menu-item>
        <el-menu-item index="/shop/shop_index3">
          <i class="el-icon-s-help"></i>
          <span slot="title">商品类型</span>
        </el-menu-item>
        <el-menu-item index="/shop/shop_index4">
          <i class="el-icon-s-help"></i>
          <span slot="title">商品评论</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
name:"",
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style lang="scss"
 scoped>
/* @import url(); 引入css类 */
#shop_index{
  display: flex;
  .left{
    width: 15%;
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
  background:white;
    border-right:1px solid #ccc;
  }
  .right{
    width: 83%;
    position: absolute;
    top: 60px;
    right: 0;
  }
}
</style>