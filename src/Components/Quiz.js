import { useContext } from 'react';
import { LangContext } from '../App';

const Quiz = () => {

    const contextValue = useContext(LangContext);

    return (
        <div className="container">
            <h2>
            {contextValue.dictionary.quiz_title}
            </h2>
        </div>
    )
}

export default Quiz
