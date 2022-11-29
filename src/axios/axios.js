import axios from "axios"
import { Message } from "element-ui"
import utils from "@/utils/utils.cookie"

// const serve = axios.create({
//     timeout: 3 * 1000,
//     baseURL: process.env.VUE_BASE_URL
// })

const serve = axios.create({
    baseURL:'/mock',
    timeout: 3 * 1000,
})
// 请求拦截器
serve.interceptors.request.use(
    (config) => {
        // let token = utils.cookie.get('token')
        // config.headers['Authorization'] = token
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

// 响应拦截器
serve.interceptors.response.use(
    (response) => {
        const dataAxios = response.data
        const { state, code } = dataAxios
        if(state === undefined && code === undefined) {
            // 二则皆为undefined代表可能不是后端写的接口
            return dataAxios
        }else {
            let s = state === undefined ? code : state
            let msgInfo = dataAxios.msg || dataAxios.Message
            if(typeof s === 'number') {
                s = String(s)
            }
                switch(s) {
                    case '401':
                        // 登录访问超时
                        errorCreate(`${msgInfo}`)
                        break;
                    case '402':
                        // 异地登录
                        errorCreate(`${msgInfo}`)
                        break;
                    case '200': return dataAxios;
                    case 'S200':
                    case '1':
                        // state === 1 代表没有错误
                        return dataAxios;
                    case '0200E':
                        // 与后端约定的state
                        errorCreate(`用户名或密码错误`);
                        break;
                    default:
                        errorCreate(`${msgInfo}: ${response.config.url}`)
                }
        }
    },
    (error) => {
        if(error && error.response) {
            switch(error.response.status) {
                case 400:
                    error.message = "请求错误"
                    break;
                case 401:
                    error.message = "未授权，请登录"
                    break;
                case 403:
                    error.message = "拒绝访问"
                    break;
                case 404:
                    error.message = `请求地址出错:${error.response.config.url}`
                    break;
                case 408:
                    error.message = "请求超时"
                    break;
                case 500:
                    error.message = "服务器内部错误"
                    break;
                case 501:
                    error.message = "服务未实现"
                    break;
                case 502:
                    error.message = "网关错误"
                    break;
                case 503:
                    error.message = "服务不可用"
                    break;
                case 504:
                    error.message = "网关超时"
                    break;
                case 505:
                    error.message = "HTTP版本不受限"
                    break;
                default:
                    break;
            }
        }
        // errorLog(error)
        return Promise.reject(error)
    }
)

export default serve