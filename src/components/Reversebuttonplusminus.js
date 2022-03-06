import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/actions/counter'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Reversebuttonplusminus = () => {
  const counter = useSelector(state => state.counter)
  useEffect(() => {
    console.log('update')
  })
  const dispatch = useDispatch()
  const onInc = () => {
    dispatch(increment())
  }
  const onDec = () => {
    dispatch(decrement())
  }

  return (
    <div className="day d-flex row justify-content-between align-items-center">
      <div className="col">
        <button onClick={onDec} className="minus"><FaMinus /></button>
      </div>
      <div className="col">
        <div className="count">{counter.num}</div>
      </div>
      <div className="col">
        <button onClick={onInc} className="plus"><FaPlus /></button>
      </div>
    </div>
  )
}

export default Reversebuttonplusminus