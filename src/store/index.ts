import { makeAutoObservable } from 'mobx'

import LoginStore from '~/container/Login/LoginStore/LoginStore'

import HomeStore from './HomeStore/HomeStore'
export class RootStore {
  homeStore: HomeStore
  loginStore: LoginStore

  constructor() {
    makeAutoObservable(this)

    this.homeStore = new HomeStore()
    this.loginStore = new LoginStore()
  }
}

const rootStore = new RootStore()

export default rootStore
