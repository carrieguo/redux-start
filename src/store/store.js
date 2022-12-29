import math from '../reducers/math'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
//redux 只能处理同步，异步请求需要引入thunk
const store = createStore(math, applyMiddleware(thunk));

export default store