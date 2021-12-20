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
                <h2>{contextValue.dictionary.quiz_score}{score}</h2>
                <h2>{contextValue.dictionary.quiz_score_percentage}{((score/10)*100).toFixed(2)}%</h2>
            </div>
            <Button onClick={reset}>{contextValue.dictionary.quiz_reset}</Button>
        </div>
    )
}

export default Scores
