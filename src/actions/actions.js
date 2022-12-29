import {ADD, SQUARE} from '../constans/ActionTypes'
//action

// const addOne = {
//   type: ADD,
//   num: 1
// }
// const addTwo = {
//   type: ADD,
//   num: 2
// }
// const square = {
//   type: SQUARE
// }

//action 创建函数
const addAction = (num) => {
  return{
    type: ADD,
    num
  }
}
const squareAction = () => {
  return{
    type: SQUARE
  }
}
//异步请求处理
const getAction = () =>{
 return (dispatch, getState)=>{
  fetch('./data.json').then(res=>res.json()).then(res=>{
    dispatch({
      type: 'get',
      num:res[0]
    })
  })
 }
}

export {
  addAction,
  squareAction,
  getAction
}