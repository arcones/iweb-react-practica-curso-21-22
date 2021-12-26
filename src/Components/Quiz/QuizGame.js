import { useContext } from 'react';
import { LangContext } from '../../App';
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import jordi from './img/jordi.jpeg'
import mrx from './img/mrx.jpeg'

const QuizGame = ({ setScore, currentQuiz, setCurrentQuiz, quizzes, setFinished, setQuizzes}) => {

    const contextValue = useContext(LangContext);

    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledBack, setDisabledBack] = useState(true);
    const [timeLeft, setTimeLeft] = useState(60)
    const [inputs, setInputs] = useState(new Map())

    const answerSave = () => {
        var answersCopy = answers
        answersCopy[quizzes[currentQuiz].id] = document.getElementById("answer").value.toLowerCase()
        setAnswers(answersCopy)
        document.getElementById("answer").value = "";
    }

    const updateButtons = () => {
        if (currentQuiz === (quizzes.length - 1)) {
            setDisabledNext(true)
            setDisabledBack(false)
        } else if (currentQuiz === 0) {
            setDisabledNext(false)
            setDisabledBack(true)
        } else {
            setDisabledNext(false)
            setDisabledBack(false)
        }
    }

    const next = () => {
        answerSave()
        setCurrentQuiz(currentQuiz + 1)
    }

    const back = () => {
        answerSave()
        setCurrentQuiz(currentQuiz - 1)
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
        return quizzes[currentQuiz].author && quizzes[currentQuiz].author.photo ? quizzes[currentQuiz].author.photo.url : mrx
    }

    const getAuthorNameIfPossible = () => {
        return quizzes[currentQuiz].author && quizzes[currentQuiz].author.username ? quizzes[currentQuiz].author.username : "Anónimo"
    }

    const renderSpecificQuiz = (index) => {
        answerSave()
        setCurrentQuiz(index)
        updateButtons()
    }

    const truncate = (question) => {
        return question.substring(0, 500)
    }

    const fallbackAuthorPhoto = (e) => {
        e.target.onerror = null
        e.target.src = mrx
    }

    const fallbackAttachmentPhoto = (e) => {
        e.target.onerror = null
        e.target.src = jordi
    }

    let quizButtons = quizzes.map((item, index) => {
        return <Button key={index} onClick={() => renderSpecificQuiz(index)}>{index + 1}</Button>
    })

    const onEnterKey = (event) => {
        if (event.key === "Enter") {
            currentQuiz === (quizzes.length - 1) ? submit() : next()
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft === 0 ? submit() : prevTimeLeft - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    const reboot = () => {
        setQuizzes([])
        setScore(0)
    }

    const onChangeDo = (e) => {
        let newKey = new Map()
        newKey.set(currentQuiz, e.target.value)
        let merged = new Map([...inputs, ...newKey])
        setInputs(merged)
    }

    return (
        <div className="container">
            <div onLoad={updateButtons} className="contained-text">
                <h2>{contextValue.dictionary.quiz_title}</h2>
                <div>
                    {quizButtons}
                </div>
                <h3>{contextValue.dictionary.quiz_question}{currentQuiz + 1}</h3>
                <p>{truncate(quizzes[currentQuiz].question)}</p>
                <div>
                    <img src={getAttachmentURLIfPossible()} onError={e => fallbackAttachmentPhoto(e)} alt='' width="600" height="300" />
                </div>
                <input id="answer" value={inputs.get(currentQuiz)} onChange={e => onChangeDo(e)} onKeyPress={event => onEnterKey(event)} placeholder={contextValue.dictionary.quiz_answer} />
                <div>
                    <p>{contextValue.dictionary.quiz_author}{getAuthorNameIfPossible()}</p>
                    <img src={getAuthorPhotoIfPossible()} onError={e => fallbackAuthorPhoto(e)} alt='' width="50" height="50" />
                    <p>{contextValue.dictionary.quiz_time_remaining}{timeLeft}</p>
                </div>
                <div>
                    <Button onClick={back} disabled={disabledBack}>{contextValue.dictionary.quiz_fwd}</Button>
                    <Button onClick={next} disabled={disabledNext}>{contextValue.dictionary.quiz_next}</Button>
                </div>
                <Button onClick={submit}>{contextValue.dictionary.quiz_submit}</Button>
                <Button onClick={reboot}>{contextValue.dictionary.quiz_reboot}</Button>
            </div>
        </div>
    )
}

export default QuizGame
