import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import { Header } from "./components/Header";
import { WatchList } from "./pages/WatchList";
import { Watched } from "./pages/Watched";
import { Add } from "./components/Add"; */
import {GlobalProvider} from "./contexts/GlobalState";
import './lib/font-awesome/css/all.min.css';
import { Container } from "./components/Container";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Container />
      </Router>
    </GlobalProvider>
  );
}

export default App;
