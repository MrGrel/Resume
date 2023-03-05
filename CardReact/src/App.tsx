import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import getImg from "./asyncActions/fetchImg";
import DificultMode from "./components/first-view/first-view-card";
import StartGame from "./components/start-game/startGame";
import { useTypeSelector } from "./hooks/useTypeSelector";

export default function App() {

  const startGame = useTypeSelector(state => state.tools.startGame);
  const loading = useTypeSelector(state => state.tools.loading);
  const divRef  = useRef(null);
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<any>(getImg());
  }, [divRef])

  return (
    <>
      {loading &&
        <div ref={divRef} id="spinner" className="spinner__container">
          <div className="spinner">
            <div className="spinner-grow text-warning spinner__block" role="status"></div>
            <span className="text-warning">Одну минутку идет загрузка</span>
          </div>
        </div>}
      {!loading &&
        <div className="game__container">
          {!startGame && <DificultMode />}
          {startGame && <StartGame />}
        </div>}
    </>

  );
}


