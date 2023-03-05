import React from "react";
import CreateTimer from "./timer";
import Card from "../createCard";
import BtnReset from "./btn-reset";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ICard } from "../../type/type";


// Функция для старта игры генерации карточек
export default function StartGame() {

  const arrCards:ICard[] = useTypeSelector(state => state.game.arrCards);
  const dificult:number = useTypeSelector(state => state.game.dificult);
  const timer:boolean = useTypeSelector(state => state.tools.timer);
  


  let cardGroupStyle = () => {
    let groupStyle = ''
    switch (dificult) {
      case 2:
        return groupStyle = 'card__group-baby';
      case 4:
        return groupStyle = 'card__group-easy';
      case 6:
        return groupStyle = 'card__group-medium';
      case 8:
        return groupStyle = 'card__group-hard';
      case 10:
        return groupStyle = 'card__group-god';
      default:
        return groupStyle;
    }
  }

  return (
    <>
      <CreateTimer />
      <div className={cardGroupStyle()}>
        {arrCards.map((card) => (<Card card={card} key={card.id} />))}
      </div>

      {timer && <BtnReset />}
    </>
  )
}