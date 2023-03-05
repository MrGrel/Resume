import React from "react";
import { useDispatch } from "react-redux";


export default function BtnReset() {

  const dispatch = useDispatch()

  const eventBtn = () => {
    dispatch({ type: 'NEW_GAME', payload: [] })
  }

  return (
    <div className="restart__container">
      <button className="restart__btn" onClick={eventBtn}>Начать заново</button>
    </div>
  )
}