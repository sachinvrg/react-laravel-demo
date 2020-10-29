/* eslint-disable import/no-anonymous-default-export */
import {Variables} from './constant'
import { get_item ,add_item ,select_item} from '../Functions/Items'

const addItem = data => (dispatchEvent=>{
  return add_item(data).then(res => {
    return dispatchEvent({
      type: Variables.ADD_ITEM,
      payload: res
    })
  })
})

const selectItem = data => (dispatchEvent=>{
  return select_item(data).then(res=>{
    return dispatchEvent({
      type: Variables.SELECT_ITEM,
      payload: res
    })
  })
})

const getItem = id =>(dispatchEvent=>{
  return get_item().then(res=>{
    return dispatchEvent({
      type: Variables.GET_ITEM,
      payload: res
    })
  })
})

export default {
    addItem,
    selectItem,
    getItem
};
