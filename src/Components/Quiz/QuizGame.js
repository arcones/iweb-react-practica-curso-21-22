import { useContext } from 'react';
import { LangContext } from '../../App';
import { useState } from "react";
import { Button } from 'react-bootstrap';
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'

const QuizGame = ({ score, setScore, currentQuiz, setCurrentQuiz, quizzes, setFinished }) => {

    const contextValue = useContext(LangContext);

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

    const submit = () => {
        setFinished(true)
    }

    return (
        <div className="container">
            <div className="contained-text">
                <h2>{contextValue.dictionary.quiz_title}</h2>
                <p>{contextValue.dictionary.quiz_score}{score}</p>
                <h3>{contextValue.dictionary.quiz_question}</h3>
                <p>{quizzes[currentQuiz].question}</p>
                <div>
                    {/* AQUI ME HE QUEDADO, no funcionan las imágenes q tienen todo el bloque attachment a null por defecto Uncaught TypeError: quizzes[currentQuiz].attachment is null */}
                    <img src={quizzes[currentQuiz].attachment.url} onError={(e) => (e.target.onerror = null, e.target.src = jordi)} alt='' width="600" height="300" />
                </div>
                <input type="response" id="answer" placeholder={contextValue.dictionary.quiz_answer} />
                <div>
                    <p>{contextValue.dictionary.quiz_author}{quizzes[currentQuiz].author.username}</p>

                    <img src={quizzes[currentQuiz].author.photo.url} onError={(e) => (e.target.onerror = null, e.target.src = mrx)} alt='' width="50" height="50" />
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

export default QuizGame
