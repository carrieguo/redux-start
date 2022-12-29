import React from 'react'
import { connect } from 'react-redux'

import { addAction, squareAction, getAction } from '../actions/actions'

function Container(props) {
  const { num, add, square, get } = props
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => add(1)}>加1</button>
      <button onClick={() => add(2)}>加2</button>
      <button onClick={() => square()}>乘方</button>
      <button onClick={() => get()}>获取异步</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    num: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (value) => {
      dispatch(addAction(value))
    },
    square: () => dispatch(squareAction()),
    get: () => dispatch(getAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
