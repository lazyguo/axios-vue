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
    tipsList: [
      '嫉妒别人，仇视异己，就等于把生命交给别人.',
      '古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。',
      '大鹏一日同风起，扶摇直上九万里。',
      '有遗憾是正常的。没有遗憾的人生是糊涂的人生。',
      '恨别人，痛苦的却是自己。',
      '儿孙自有儿孙福，莫为儿孙做远忧。',
      '把自己的欲望降到最低点，把自己的理性升华到最高点，就是圣人。',
      '存平等心，行方便事，则天下无事。怀慈悲心，做慈悲事，则心中太平。'
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
    changeStatus(state, info) {
      state.already = state.infoList.filter(item => item.isOk == true).length
    }
  },
  actions:{
    // loginOut()
  }
}
