import request from '../utils/request'

export default {
  login(data){
    return request({
      url:"/admin/login",
      method:"post",
      data:data
    })
  },
  album(page,limit){
    return request({
      url:`/admin/imageclass/${page}?limit=${limit}`,
      method:"get",
    })
  }
}