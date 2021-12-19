import { useContext } from 'react';
import { LangContext } from '../../App';

const Quiz = () => {

    const contextValue = useContext(LangContext);

    return (
        <div className="container">
            <div className="contained-text">
                <h2>{contextValue.dictionary.quiz_title}</h2>
            </div>
        </div>
    )
}

export default Quiz
