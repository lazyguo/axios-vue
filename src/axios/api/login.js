import request from '../axios'

// 示例
// export function getLogin(params) {
//     return request({
//         url:'xxx',
//         method:'get',
//         params
//     })
// }

// 登录
export function login(data) {
  return request({
    url: 'user/login',
    method: 'post',
    data
  })
}
