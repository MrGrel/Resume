export interface IGameCard {
  dificult: number,
  arrDificultName: string[],
  arrViewCards: ICard[],
  arrCards: ICard[],
  arrPair: ICard[],
  arrImg: string[],
}

export interface IGameTools {
  startGame: boolean,
  timer: boolean,
  loading: boolean,
}

export interface ICard {
  id: number,
  cardStyle: string,
  cardPair: string,
  cardNumber: number,
  open: boolean,
  success: boolean,
  img: string,
}

export enum actionTypes {
  SET_DIFICULT = 'SET_DIFICULT',
  VIEW_SET_CARDS = 'VIEW_SET_CARDS',
  GAME_SET_CARDS = 'GAME_SET_CARDS',
  SET_PAIR = 'SET_PAIR',
  SUCCESS_PAIR = 'SUCCESS_PAIR',
  GET_IMG = 'GET_IMG',
  START_GAME = 'START_GAME',
  END_GAME = 'END_GAME',
  NEW_GAME = 'NEW_GAME',
}

interface IDificult {
  type: actionTypes.SET_DIFICULT,
  payload: number
}

interface IViewSetCards {
  type: actionTypes.VIEW_SET_CARDS,
  payload: ICard[]
}

interface IGameSetCards {
  type: actionTypes.GAME_SET_CARDS,
  payload: ICard[]
}

interface ISetPair {
  type: actionTypes.SET_PAIR,
  payload: ICard
}

interface ISuccessPair {
  type: actionTypes.SUCCESS_PAIR,
}

interface IGetImg {
  type: actionTypes.GET_IMG,
  payload: string[] 
}

interface IStartGame {
  type: actionTypes.START_GAME,
}

interface IEndGame {
  type: actionTypes.END_GAME,
}

interface INewGame {
  type: actionTypes.NEW_GAME,
  payload: []
}




export type TGameAction = IDificult | IViewSetCards | IGameSetCards | ISetPair | ISuccessPair | IEndGame | INewGame | IGetImg;
export type TToolsAction = IStartGame | IEndGame | INewGame | IGetImg;



