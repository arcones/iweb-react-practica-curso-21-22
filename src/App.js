import './css/styles.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar'
import { createContext, useState } from 'react';
import es from './Lang/es.json'
import en from './Lang/en.json'
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import Tictactoe from './Components/TicTacToe/Tictactoe';
import Quiz from './Components/Quiz/Quiz';
import { useEffect } from 'react';
// import { Spinner } from 'react-bootstrap';

export const LangContext = createContext({ userLang: 'es', dictionary: es })

function App() {

  const [lang, setLang] = useState('es')
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  // }, [])

  return (
    <LangContext.Provider value={{ userLang: lang, dictionary: lang === 'es' ? es : en }}>
      <div>
        <Header setLang={setLang} />
        <NavBar />
        {/* {loading ? <Spinner animation="border" variant="primary" /> : */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tictactoe" element={<Tictactoe />} />
            <Route path="quiz" element={<Quiz />} />
          </Routes>}
      </div>
    </LangContext.Provider>
  );
}

export default App;
