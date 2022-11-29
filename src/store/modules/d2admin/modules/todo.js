export default {
  namespaced: true,
  state: {
    infoList: [
      {
        id: '1',
        msg: '今天吃饭',
        isOk: false
      },
      {
        id: '2',
        msg: '今天睡觉',
        isOk: false
      }
    ],
    already: 0
  },
  mutations: {
    addInfo(state, info) {
      state.infoList.push(info)
    },
    removeInfo(state, info) {
      let index = state.infoList.findIndex(item => item.id == info.id)
      state.infoList.splice(index, 1)
    },
    changeStatus(state,info) {
        state.already = state.infoList.filter(item => item.isOk == true).length
    }
  }
}
