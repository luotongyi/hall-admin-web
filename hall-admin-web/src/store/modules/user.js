const user = {
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    UserLogin({
      commit
    }, params) {
      commit()
      console.log(params)

      return new Promise((resolve, reject) => {
        resolve()

        reject()
      })
    }
  }
};

export default user
