import { IGameCard, actionTypes, TGameAction } from "../../type/type"

const gameCard:IGameCard = {
  dificult: 0,
  arrDificultName: ['baby', 'easy', 'medium', 'hard', 'god'],
  arrViewCards: [],
  arrCards: [],
  arrPair: [],
  arrImg: [],
}

const reducerGame = (state:IGameCard = gameCard, action: TGameAction):IGameCard => {
  const pair = state.arrPair;

  switch (action.type) {
    case actionTypes.SET_DIFICULT:
      return { ...state, dificult: action.payload };

    case actionTypes.VIEW_SET_CARDS:
      console.log('true')
      return { ...state, arrViewCards: action.payload };

    case actionTypes.GAME_SET_CARDS:
      console.log('state >', state)
      return { ...state, arrCards: action.payload };

    case actionTypes.SET_PAIR:
      if (pair.length % 2 === 0 && pair.length !== 0) {
        const firstPair = pair[pair.length - 1];
        const secondPair = pair[pair.length - 2];
        if (firstPair.cardNumber !== secondPair.cardNumber) {
          state.arrCards.forEach(card => {
            if (card.id === firstPair.id || card.id === secondPair.id) {
              card.open = false;
              card.cardPair = ' card__cover';
            };
          });
          pair.splice(pair.length - 2, 2);
        };
      };
      state.arrCards.forEach(card => card.id === action.payload.id ? (card.open = true, card.cardPair = ' card__pair') : false);

      return { ...state, arrPair: [...state.arrPair, action.payload], arrCards: [...state.arrCards] };

    case actionTypes.SUCCESS_PAIR:
      if (pair.length % 2 === 0 && pair.length !== 0) {
        const firstPair = pair[pair.length - 1];
        const secondPair = pair[pair.length - 2];
        if (firstPair.cardNumber === secondPair.cardNumber) {
          // Если карточки одинаковые отключаем
          state.arrCards.forEach(card => {
            if (card.id === firstPair.id || card.id === secondPair.id) {
              card.success = true;
              card.open = false;
              card.cardPair = ' card__success';
            }
          });
          return { ...state, arrCards: [...state.arrCards] };
        };
      }

      return state;

    case actionTypes.END_GAME:
      state.arrCards.forEach(card => {
        card.open = false;
        card.success = true;
        card.cardPair = ' card__success';
      })
      return { ...state, arrCards: [...state.arrCards] };

    case actionTypes.NEW_GAME:
      return { ...state, arrViewCards: action.payload, arrCards: action.payload, arrPair: action.payload }

    case actionTypes.GET_IMG:
      return { ...state, arrImg: action.payload }

    default:
      return state
  }
}

export default reducerGame



