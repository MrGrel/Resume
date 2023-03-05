import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { ICard } from '../../type/type';

export default function CreateDificultButton(props: {name: string}) {

  const dispatch = useDispatch();
  const arrDificultName = useTypeSelector(state => state.game.arrDificultName)
  const arrImg = useTypeSelector(state => state.game.arrImg)


  const shuffle = (arr: ICard[]) => {
    return arr.sort(() => Math.random() - 0.5);
  }

  const getNewId = (arr: ICard[]) => {
    let idItem: number = 100;

    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].id > idItem) {
        idItem = arr[i].id;
      }
    };

    return idItem + 1;
  }

  const dificultevent = () => {

    let dificult: number = 0;
    let cards: ICard[] = []
    let viewCards: ICard[] = []

    const cardStyle = (dificult: number) => {
      for (let i = 0; i < arrDificultName.length; i++) {
        if (dificult === (i + 1) * 2) {
          return `card__${arrDificultName[i]}`;
        }
      }
      return 'card__baby'
    }

    for (let i = 0; i < arrDificultName.length; i++) {
      if (props.name === arrDificultName[i]) {
        dificult = (i + 1) * 2;
        dispatch({ type: 'SET_DIFICULT', payload: dificult });
        break;
      }
    }

    for (let i = 0; i < dificult * 2 - 1; ++i) {
      const card: ICard = {
        id: getNewId(viewCards),
        cardStyle: cardStyle(dificult),
        cardPair: ' card__cover',
        cardNumber: i,
        open: false,
        success: true,
        img: ''
      }
      viewCards.push(card)
    };

    for (let i = 1; i < dificult * dificult; ++i) {
      const card = {
        id: getNewId(cards),
        cardStyle: cardStyle(dificult),
        cardPair: ' card__cover',
        cardNumber: i,
        open: false,
        success: false,
        img: arrImg[i - 1]
      };

      cards.push(card);

      if (i === dificult * dificult / 2) {
        i = 0
      }
      if (cards.length === dificult * dificult) {
        break
      }
    }
    dispatch({ type: 'VIEW_SET_CARDS', payload: viewCards });
    dispatch({ type: 'GAME_SET_CARDS', payload: shuffle(cards) });
  }

  return (
    <>
      <button onClick={dificultevent} className={'dificult__btn'}>{`${props.name}`}</button>
    </>
  )
}