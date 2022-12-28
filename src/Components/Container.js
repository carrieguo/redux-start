import React from 'react';
import { connect } from 'react-redux';



function Container(props){
  return(
    <div>
    <p>{store.getState()}</p>
    <button onClick={()=>{store.dispatch(addAction(1))}}>加1</button>
    <button onClick={()=>{store.dispatch(addAction(2))}}>加2</button>
    <button onClick={()=>{store.dispatch(squareAction())}}>乘方</button>
  </div>
  )
}

connect(mapStateToProps, mapDispatchToProps)(containerName)
export default Container