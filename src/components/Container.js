import {useContext} from "react";
import {Header} from './Header';
import { Routes, Route } from "react-router-dom";
import {WatchList} from '../pages/WatchList';
import {Watched} from '../pages/Watched';
import {Add} from '../pages/Add';
import { GlobalContext } from "../contexts/GlobalState";

export const Container = () => {

    const {theme} = useContext(GlobalContext)

  return (
    <div className={`mainContainer ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />

      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
};
