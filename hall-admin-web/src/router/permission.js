import router from './index'
import NProgress from 'nprogress'
import {
  Message
} from 'element-ui'


// 不重定向白名单
const whiteList = ['/', '/login']
// 路由拦截器，用于获取用户信息，页面拦截
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/') {
    // 调用退出登录
    // store.dispatch('Logout').then(() => {
    //   NProgress.done()
    //   next()
    // })
  } else {
    if (localStorage.getItem('token')) {
      //用户已经登录


    } else if (whiteList.indexOf(to.path) !== -1) { //在白名单
      NProgress.done()
      next()
    } else { //不在白名单
      NProgress.done()
      Message.error({
        showClose: true,
        message: '请重新登录'
      })
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
