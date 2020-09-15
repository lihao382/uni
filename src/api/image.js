import request from '../utils/request'

export default {
  images(id,page,limit,order,keyword){
    return request({
      url:`/admin/imageclass/${id}/image/${page}?limit=${limit}&order=${order}`,
      method:"get"
    })
  }
}