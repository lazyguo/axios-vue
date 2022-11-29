import Cookie from "js-cookie"

const cookie = {}

// 设定cookie
cookie.set = function (name = "default",value, settingCookie = {}) {
    let currentSetting = {
        expires: 1
    }
    Object.assign(currentSetting,settingCookie)
    Cookie.set(`${name}`,value, currentSetting)
}

// 获取指定cookie
cookie.get = function(name = "default") {
    return Cookie.get(`${name}`)
}

// 获取全部cookie
cookie.getAll = function () {
    return Cookie.get()
}

// 删除cookie
cookie.remove = function(name = "default") {
    return Cookie.remove(`${name}`)
}


// 利用localStorage设定指定日期删除操作
// export function setLoaclStorageTime(key,value) {
//     window.localStorage.setItem(key,JSON.stringify({data:value,time:new Date().getTime()}))
// }

// 项目中存储token
// setLoaclStorageTime(xxx,{name:'xxx'})

// export function getLocalStorageAndTime(key, exp = 86400000) {
//     let data = window.localStorage.getItem(key)
//     if(!data) return null
//     let dataObj = JSON.parse(data)
//     let time = new Date().getTime()
//     if(time - dataObj > exp) {
//         removeLocalStorage(key)
//         console.log("用户信息已过期");
//     }else {
//         return dataObj.data
//     }
// }

export default cookie