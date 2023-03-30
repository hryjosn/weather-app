import { makeAutoObservable } from 'mobx'

import { callUserLogin } from '~/api/api'
// import { exampleT } from './type'
class HomeStore {
  email: string = ''
  password: string = ''
  constructor() {
    makeAutoObservable(this)
  }

  onSubmit = async (): Promise<void> => {
    const res = await callUserLogin({
      data: {
        email: this.email,
        password: this.password,
      },
    })
    console.log('res>?', res)
  }
}

export default HomeStore
