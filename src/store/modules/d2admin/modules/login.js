import utils from "@/utils/utils.cookie"

export default {
    namespaced: true,
    actions:{
        login(params,{
            username = '',
            password = '',
            fromToken = '',
            systemAlias = ''
        } = '') {
            return new Promise((resolve,reject) => {
                if(!fromToken) {
                    console.log("调用接口")
                }else {
                    utils.cookie.set('token',fromToken)
                    utils.cookie.set('Authorization',fromToken)
                }
                console.log(params,'params');
                resolve()
            })
        }
    }
}