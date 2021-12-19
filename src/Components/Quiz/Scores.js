import { useContext } from 'react';
import { LangContext } from '../../App';
import { Button } from 'react-bootstrap';

const Scores = ({score, setFinished, setScore, setCurrentQuiz}) => {

    const contextValue = useContext(LangContext);

    const reset = () => {
        setScore(0)
        setFinished(false)
        setCurrentQuiz(0)
    }
    
    return (
        <div className="container">
            <div className="contained-text">
                {contextValue.dictionary.quiz_score}{score}
            </div>
            <Button onClick={reset}>{contextValue.dictionary.quiz_reset}</Button>
        </div>
    )
}

export default Scores
