import { useContext } from 'react';
import { LangContext } from '../../App';
import { useState } from "react";
import { Button } from 'react-bootstrap';
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'

const QuizGame = ({ setScore, currentQuiz, setCurrentQuiz, quizzes, setFinished }) => {

    const contextValue = useContext(LangContext);

    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledBack, setDisabledBack] = useState(true);
    const [answers, setAnswers] = useState({})

    const answerSave = () => {
        var answersCopy = answers
        answersCopy[quizzes[currentQuiz].id] = document.getElementById("answer").value.toLowerCase()
        setAnswers(answersCopy)
        document.getElementById("answer").value = "";
    }

    const next = () => {
        answerSave(currentQuiz)
        setCurrentQuiz(currentQuiz + 1)
        setDisabledBack(false)
        if (currentQuiz === (quizzes.length - 2)) {
            setDisabledNext(true)
        }
    }

    const back = () => {
        answerSave(currentQuiz)
        setCurrentQuiz(currentQuiz - 1)
        setDisabledNext(false)
        if (currentQuiz === 1) {
            setDisabledBack(true)
        }
    }

    const submit = () => {
        answerSave(currentQuiz)
        setFinished(true)
        let scoreObtained = 0
        Object.keys(answers).forEach((key) => {
            let keyNumber = Number(key)
            const filtered = quizzes.filter((quiz) => quiz.id === keyNumber)[0];
            if (filtered.answer.toLowerCase() === answers[key].toLowerCase()) {
                scoreObtained++
            }
        });
        setScore(scoreObtained)
    }

    const getAttachmentURLIfPossible = () => {
        return quizzes[currentQuiz].attachment ? quizzes[currentQuiz].attachment.url : jordi
    }

    const getAuthorPhotoIfPossible = () => {
        return quizzes[currentQuiz].author.photo ? quizzes[currentQuiz].author.photo.url : mrx
    }

    return (
        <div className="container">
            <div className="contained-text">
                <h2>{contextValue.dictionary.quiz_title}</h2>
                <h3>{contextValue.dictionary.quiz_question}</h3>
                <p>{quizzes[currentQuiz].question}</p>
                <div>
                    <img src={getAttachmentURLIfPossible()} onError={(e) => (e.target.onerror = null, e.target.src = jordi)} alt='' width="600" height="300" />
                </div>
                <input type="response" id="answer" placeholder={contextValue.dictionary.quiz_answer} />
                <div>
                    <p>{contextValue.dictionary.quiz_author}{quizzes[currentQuiz].author.username}</p>
                    <img src={getAuthorPhotoIfPossible()} onError={(e) => (e.target.onerror = null, e.target.src = mrx)} alt='' width="50" height="50" />
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
