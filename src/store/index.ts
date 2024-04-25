
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    user: {
      name: "hang",
      age: 27,
      school: '德州学院',
      sex: '男'
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    sum(state, num) {
      state.count += num
    }
  },
  actions: {
    sum_actions(context, num) {
      return new Promise((resolve, reject) => {
        if (context.state.count >= 30) {
          reject('超出限制最大值30')
        } else {
          resolve(context.state.count)
          context.commit('sum', num)
        }
      })
    }
  },
  getters: {
    getUserName: (state) => {
      return (age) => "[" + state.user.name + age + "]"
    }
  },
  modules: {

  }
})