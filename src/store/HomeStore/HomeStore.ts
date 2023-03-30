import { makeAutoObservable } from 'mobx'

// import { callGetCharityList } from '~/api/api'
// import { exampleT } from './type'
class HomeStore {
  total = 0
  page = 1
    count = 9
    text = 'test'
    constructor() {
        makeAutoObservable(this)
    }

    setPage = (value: number): void => {
        this.page = value
    }
}

export default HomeStore
