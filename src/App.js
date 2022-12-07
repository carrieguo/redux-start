import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';

import { 
  addAction,
  squareAction} from './actions/actions'

import math from './reducers/math'

const store = createStore(math);

console.log(store.getState())
store.dispatch(addAction(1))
console.log(store.getState()) //10+1

store.dispatch(addAction(2))
console.log(store.getState()) //11+2

store.dispatch(squareAction())
console.log(store.getState()) //13*13

function App() {
  return (
    <div className="App">
      123
    </div>
  );
}

export default App;
