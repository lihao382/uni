<template>
  <div id="bb">
    <div class="hh">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/index/index1' }">后台首页</el-breadcrumb-item>
        <el-breadcrumb-item>相册管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sell">
      <div class="ssy">
        <select class="sel">
          <option value>升序</option>
          <option value>降序</option>
        </select>
        <input class="sel_input" type="text" placeholder="输入图片名称" />
        <el-button type="primary" size="mini">搜索</el-button>
      </div>
      <div class="sst">
        <el-button type="primary" size="mini">创建相册</el-button>
        <el-button type="warning" size="mini">上传图片</el-button>
      </div>
    </div>
    <div class="cont_list">
      <div class="cont_list_left">
        <ul>
          <li v-for="(item,index) in names" :key="index">
            <p>{{item.name}}</p>
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                {{item.images_count}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
      <div class="cont_list_right">
          <div class="cont_list_cont" v-for="(item,index) in cont_img" :key="index">
              <img :src="item.url" alt="">
              <p class="p1">{{item.name}}</p>
              <div class="list_ss">
                <p><i class="el-icon-view"></i></p>
                <p><i class="el-icon-edit"></i></p>
                <p><i class="el-icon-delete"></i></p>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import login_album from "../../api/login";
import album_image from "../../api/image";
export default {
  name: "",
  data() {
    return {
      page: 1, //页数
      pageSize: 10, //每页的条数
      names: "",
      from:{
        cid:365,
        page: 1,
        order: "",
        pageSize: 10
      },
      cont_img:[]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.album();
    this.album_img();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    album() {
      login_album.album(this.page, this.pageSize).then(res => {
        console.log(res);
        this.names = res.data.data.list;
      });
    },
    album_img() {
      album_image.images(this.from.cid,this.from.page,this.from.order,this.from.pageSize).then(res => {
        console.log(res.data.data.list);
        this.cont_img=res.data.data.list
      });
    }
  }
};
</script>
<style lang="scss" scoped>
/* @import url(); 引入css类 */
#bb {
  width: 100%;
  height: 100%;
}
.hh {
  height: 50px;

  margin-left: 30px;
}
.el-breadcrumb {
  line-height: 50px;
}
.sel {
  width: 150px;
  height: 30px;
  border: 1px solid rgb(243, 238, 238);
  text-indent: 10px;
  font-size: 12px;
  padding: 6px;
  margin-top: 15px;
  margin-left: 20px;
  vertical-align: middle;
  border-radius: 4px;
}
.sell {
  width: 100%;
  height: 60px;
  background: rgb(245, 243, 243);
}
.sel_input {
  width: 150px;
  height: 30px;
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 4px;
  text-indent: 10px;
  font-size: 12px;
}
.el-button {
  margin-left: 10px;
  margin-top: 14px;
}
.ssy {
  float: left;
}
.sst {
  float: right;
  margin-right: 15px;
  margin-top: 2px;
}
.cont_list {
  width: 100%;
  .cont_list_left {
    width: 230px;
    border-right: 1px solid #ccc;
    background: #ccc;
    position: absolute;
    left: 0;
    top: 110px;
    bottom: 60px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 60px;
        display: flex;
        border-bottom: 1px solid #ccc;
        background: #fff;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
      }
      li:hover {
        background: rgb(241, 236, 236);
      }
    }
  }
  .cont_list_right {
    width: 100%;
    position: absolute;
    right: 0;
    top: 110px;
    left: 230px;
    bottom: 60px;
    flex: 1;
    background: white;
    padding: 20px;
    display: flex;
    
    .cont_list_cont{
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
      // background: red;
      margin-left: 10px;
      box-sizing: border-box;
      img{
        width: 200px;
        height: 150px;
      }
      .p1{
        width: 199px;
        height: 20px;
        line-height: 20px;
        position: absolute;
        top: 150px;
        background: rgba(0,0,0,0.4);
        // text-align: center;
      }
      .list_ss{
        width: 100px;
        height: 30px;
        // border: 1px solid #ccc;
        visibility: middle;
        margin: 9px auto;
        display: flex;
        p{
          width: 33%;
          text-align: center;
          line-height: 30px;
          border: 1px solid #ccc;
          
        }
        p:nth-of-type(1){
          border-right: none;
          border-radius:5px 0 0 5px;
        }
        p:nth-of-type(2){
          border-right: none;
        }
        p:nth-of-type(3){
          border-radius:0 5px 5px 0;
        }
      }
    }
  }
}

.el-dropdown-selfdefine {
  width: 50px;
  height: 35px;
  border: 1px solid #fff;
}
.el-dropdown-selfdefine:hover {
  background: rgb(241, 238, 238);
}
</style>
