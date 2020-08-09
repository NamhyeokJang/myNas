import { observable, action } from 'mobx'

class UserStore {
    @observable isLogin
    @observable userInfo
    @observable isSession

    constructor() {
        this.isLogin = sessionStorage.getItem('user') ? true : false
        this.userInfo = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {}
    }

    @action.bound
    succeedLogin(userInfo) {
        this.isLogin = true
        this.userInfo = userInfo
        sessionStorage.setItem('user', JSON.stringify(userInfo))

    }

    @action.bound
    succeedLogout() {
        this.isLogin = false
        this.userInfo = {}
        sessionStorage.removeItem('user')
    }
}

export default UserStore