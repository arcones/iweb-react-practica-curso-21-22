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
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledBack, setDisabledBack] = useState(true);

    const answerCheck = () => {
        if (document.getElementById("answer").value.toLowerCase() === quizzes[currentQuiz].answer.toLowerCase()) {
            console.log("Has acertado")
            setScore(score + 1)
        }
        document.getElementById("answer").value = "";
    }

    const next = () => {
        answerCheck(currentQuiz)
        setCurrentQuiz(currentQuiz + 1)
        setDisabledBack(false)
        if (currentQuiz === (quizzes.length - 2)) {
            setDisabledNext(true)
        }
    }

    const back = () => {
        answerCheck(currentQuiz)
        setCurrentQuiz(currentQuiz - 1)
        setDisabledNext(false)
        if (currentQuiz === 1) {
            setDisabledBack(true)
        }
    }

    const submit = (value) => {
        console.log(value)
    }

    return (
        <div className="container">
            <div className="contained-text">
                <p>{contextValue.dictionary.quiz_score}{score}</p>
                <h2>{contextValue.dictionary.quiz_title}</h2>
                <h3>{contextValue.dictionary.quiz_question}</h3>
                <p>{quizzes[currentQuiz].question}</p>
                <div>
                    <img src={quizzes[currentQuiz].attachment.url} alt='' width="600" height="300" />
                </div>
                <input type="response" id="answer" placeholder={contextValue.dictionary.quiz_answer}/>
                <div>
                    <p>{contextValue.dictionary.quiz_author}{quizzes[currentQuiz].author.username}</p>
                    <img src={quizzes[currentQuiz].author.photo.url} alt='' width="50" height="50" />
                </div>
                <div>
                    <Button onClick={back} disabled={disabledBack}>{contextValue.dictionary.quiz_fwd}</Button>
                    <Button onClick={next} disabled={disabledNext}>{contextValue.dictionary.quiz_next}</Button>
                </div>
                <Button onClick={submit}>{contextValue.dictionary.quiz_submit}</Button>
            </div>
        </div>
    )
}

export default Quiz
