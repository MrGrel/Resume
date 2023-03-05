import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ICard } from "../../type/type";

export default function CreateTimer() {

  const dificult:number = useTypeSelector(state => state.game.dificult);
  const arrPair:ICard[] = useTypeSelector(state => state.game.arrPair);
  const dispatch = useDispatch();
  // const dificult = 2;
  // const arrPair = []
  const [timer, setTimer] = useState(30 * dificult);

  useEffect(() => {
    const startTimer = setInterval(() => {
      if (arrPair.length !== dificult * dificult ) {
        if (timer > 0) {
          setTimer((state) => state - 1);
          if (timer === 1) {
            setTimer(0);
            clearInterval(startTimer);
            dispatch({ type: 'END_GAME' });
          }
        }
      } else {
        clearInterval(startTimer);
        dispatch({ type: 'END_GAME' });
      } 
    }, 1000);

    return () => clearInterval(startTimer)
  }, [timer])

  return (
    <div className="timer__container">
      <div className="timer">
        {timer}
      </div>
    </div>
  )
}