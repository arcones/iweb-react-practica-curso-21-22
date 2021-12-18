import './css/styles.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar'
import { createContext, useState } from 'react';
import es from './Lang/es.json'
import en from './Lang/en.json'
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import Tictactoe from './Components/Tictactoe';
import Quiz from './Components/Quiz';

export const LangContext = createContext({ userLang: 'es', dictionary: es })

function App() {

  const [lang, setLang] = useState('es')

  return (
    <LangContext.Provider value={{ userLang: lang, dictionary: lang === 'es' ? es : en }}>
      <div>
        <Header setLang={setLang} />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tictactoe" element={<Tictactoe />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </div>
    </LangContext.Provider>
  );
}

export default App;
