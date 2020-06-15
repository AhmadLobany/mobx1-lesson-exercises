import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    @action addItem = (name) => {
        const newItem = new Item(name)
        this.list.push(newItem)
    }
    @action editItem = (itemName, newLocation) => {
        for(let i in this.list) {
            if(this.list[i].name==itemName) {
                this.list[i].location = newLocation
                return;
            }
        }
    }
    @action deleteItem = (name) => {
        let index = -1
        for(let i in this.list) {
            if(this.list[i].name==name) {
                index = i
            }
        }
        if(index!=-1) {
            this.list.splice(index,1)
        }
    } 
}

