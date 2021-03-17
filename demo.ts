import CreateStorage  from './index'
const LS = CreateStorage()

type IObj = {
  name:string
}
const obj = {
  name:'sibao'
}
LS.setItem('key',obj)

const newObj = LS.getItem<IObj>('key')
console.log(newObj?.name)

LS.removeItem('key')
LS.clear()