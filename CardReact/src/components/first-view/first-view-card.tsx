import React from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ICard } from "../../type/type";
import Card from "../createCard";
import CreateDificultButton from "./buttomDificult";


export default function DificultMode() {

  const arrViewCards:ICard[] = useTypeSelector(state => state.game.arrViewCards);
  const arrDificultName:string[] = useTypeSelector(state => state.game.arrDificultName);
  const startGame:boolean = useTypeSelector(state => state.tools.startGame);
  const dispatch = useDispatch();
  console.log('startGame > ', startGame);

  let btnClick = () => {
    if (!arrViewCards.length) throw new TypeError('Вы не выбрали сложность')
    dispatch({ type: 'START_GAME' });
    console.log('startGame > ', startGame);
  }

  return (
    <>
      <div className="game__btn-group">
        <div className="dificult__group">
          {arrDificultName.map((name, index) => (<CreateDificultButton name={name} key={index} />))}
        </div>
        <button className="game__btn-start" onClick={btnClick}>Начать игру</button>
      </div>
      <div className="game__view">
        <div className="view__horisontal">
          {arrViewCards &&
            arrViewCards.map((card, index) => {
              if (index % 2 === 0) {
                return (
                  <Card card={card} key={card.id} />
                )
              }
            })
          }
        </div>
        <div className="view__vertical">
          {arrViewCards &&
            arrViewCards.map((card, index) => {
              if (index % 2 !== 0) {
                return (
                  <Card card={card} key={card.id} />
                )
              }
            })
          }
        </div>
      </div>
    </>
  )
}