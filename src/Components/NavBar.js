import '../css/styles.css';

import { useContext } from 'react';
import { LangContext } from '../App';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from "react-router-dom";

const NavBar = () => {
    const contextValue = useContext(LangContext);
    
    const location = useLocation();

    const [active, setActive] = useState(location.pathname.slice(1) ? location.pathname.slice(1) : 'home');

    function changeStyle(button) {
        setActive(button);
    }

    return (
        <>
            <ul>
                <Link to="/" className={(active === 'home' ? 'li-active' : '')} onClick={() => changeStyle('home')}><li>{contextValue.dictionary.navbar_item1}</li></Link>
                <Link to="tictactoe" className={(active === 'tictactoe' ? 'li-active' : '')} onClick={() => changeStyle('tictactoe')}><li>{contextValue.dictionary.navbar_item2}</li></Link>
                <Link to="quiz" className={(active === 'quiz' ? 'li-active' : '')} onClick={() => changeStyle('quiz')}><li>{contextValue.dictionary.navbar_item3}</li></Link>
            </ul>
            <Outlet />
        </>
    )
}

export default NavBar
