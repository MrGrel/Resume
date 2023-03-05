import React from 'react';
import { useDispatch } from 'react-redux';
import { ICard } from '../type/type';

export default function Card({ card }: { card: ICard }) {

  const dispatch = useDispatch();

  const eventCard = () => {
    // Проверка на двойное нажатие
    if (card.open) {
      throw new TypeError('Вы уже открыли эту карту');
    };
    dispatch({ type: 'SET_PAIR', payload: card });
    dispatch({ type: 'SUCCESS_PAIR', payload: card });
  }

  return (
    <>
      <button id={`${card.id}`} className={card.cardStyle + card.cardPair} onClick={eventCard} disabled={card.success}>
        {card.open ? (card.img === '' ?
          <p>{`${card.cardNumber}`}</p>
          :
          <img src={card.img} alt='картинка' className='card__img'></img>)
          :
          null
        }
      </button>
    </>
  )
}
