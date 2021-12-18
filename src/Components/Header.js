import '../css/styles.css';

import { useContext } from 'react';
import { LangContext } from '../App';

const Header = ({ setLang }) => {

    const contextValue = useContext(LangContext);

    const handleLanguageChange = (e) => {
        setLang(e.target.value)
    }

    return (
        <header>
            <h1>{contextValue.dictionary.titulo}</h1>
                <select onChange={(e) => handleLanguageChange(e)}>
                    <option value="es">es</option>
                    <option value="en">en</option>
                </select>
        </header>
    )
}

export default Header