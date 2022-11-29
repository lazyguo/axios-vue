import Mock from 'mockjs'

Mock.mock('/login','post',function(options) {
    const { body } = options
    const { username, password} = JSON.parse(body)
    if(username == 'admin' && password == '123456') {
        return {
            code:200,
            msg:'登录成功'
        }
    }else {
        return {
            msg:'账户或密码错误'
        }
    }
})
