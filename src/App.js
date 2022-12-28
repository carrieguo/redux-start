// import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';

import { 
  addAction,
  squareAction} from './actions/actions'

import math from './reducers/math'

import {Provider} from "react-redux"

import Container, {} from './Components/Container' 

const store = createStore(math);

console.log(store.getState())
store.dispatch(addAction(1))
console.log(store.getState()) //10+1

store.dispatch(addAction(2))
console.log(store.getState()) //11+2

store.dispatch(squareAction())
console.log(store.getState()) //13*13
//展示组件和容器组件

function App() {
  return (
    <Provider store={store}>
      <Container></Container>
     </Provider>
  );
}

store.subscribe(App)
export default App;
