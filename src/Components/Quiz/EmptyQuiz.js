import { useContext } from 'react';
import { LangContext } from '../../App';
import travolta from './img/travolta.gif'

const EmptyQuiz = () => {
    const contextValue = useContext(LangContext);

    return (
        <div className="container">
            <div className="contained-text">
                <h2>{contextValue.dictionary.quiz_empty}</h2>
                <img src={travolta} alt="Travolta" width="600" height="600" />
            </div>
        </div>
    )
}

export default EmptyQuiz
