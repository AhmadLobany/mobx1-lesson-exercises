import { observable, action } from 'mobx'

export class Item {
    @observable name
    @observable location
    @observable completed = false
    constructor(name,location = "Super Sell") {
        this.name = name
        this.location = location
    }
}