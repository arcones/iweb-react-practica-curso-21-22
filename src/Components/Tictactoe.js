import '../css/styles.css';
import { useContext } from 'react';
import { LangContext } from '../App';

const Tictactoe = () => {

    const contextValue = useContext(LangContext);

    return (
        <div className="container">
            <div className="contained-text">
                <h2>{contextValue.dictionary.tictactoe_title}</h2>
            </div>
        </div>
    )
}

export default Tictactoe
