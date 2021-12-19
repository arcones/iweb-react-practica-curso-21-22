import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { LangContext } from '../../App';
import { useState } from 'react';

const Quiz = () => {
    const contextValue = useContext(LangContext);

    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [quizzes, setQuizzes] = useState(require("../../assets/mock-data.json"));
    const [answer, setAnswer] = useState();

    const next = () => {
        let nextQuiz = currentQuiz + 1
        if (nextQuiz === 9) {
            setFinished(true)
            console.log(finished)
        } else {
            setCurrentQuiz(nextQuiz)
        }
    }

    const input = (theAnswer) => {
        console.log(theAnswer)
        setAnswer(theAnswer)
    }

    return (
        <div className="container">
            <div className="contained-text">
                <h2>{contextValue.dictionary.quiz_title}</h2>
                <h3>{contextValue.dictionary.quiz_question}</h3>
                <p>{quizzes[currentQuiz].question}</p>
                <div>
                    <img src={quizzes[currentQuiz].attachment.url} alt='' width="600" height="300" />
                </div>
{/*                 <form onSubmit={input}>
                    <input type="text" value={answer}/>
                    <input type="submit" value="Submit" />
                </form> */}
                <input type="response" id="answer" placeholder={contextValue.dictionary.quiz_answer} />
                <div>
                    <p>{contextValue.dictionary.quiz_author}</p>
                    <img src={quizzes[currentQuiz].author.photo.url} alt='' width="50" height="50" />
                </div>
                <Button onClick={next}>{contextValue.dictionary.quiz_next}</Button>
            </div>
        </div>
    )
}

export default Quiz
