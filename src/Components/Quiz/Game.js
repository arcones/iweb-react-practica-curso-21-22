import { useState } from "react";
import QuizGame from './QuizGame';
import EmptyQuiz from './EmptyQuiz';
import { useEffect } from "react";

const Game = ({ setScore, currentQuiz, setCurrentQuiz, setFinished }) => {

    const URL = 'https://core.dit.upm.es/api/quizzes/random10wa?token=2bca751d84825b1e6c2a'
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        if (quizzes.length === 0) {
            fetch(URL)
                .then(res => res.json())
                .then(json => { setQuizzes(json) })
        }
    }, [quizzes]);

    return (
        <div>
            {quizzes.length > 0 && (
                <QuizGame
                    setScore={setScore}
                    currentQuiz={currentQuiz}
                    setCurrentQuiz={setCurrentQuiz}
                    quizzes={quizzes}
                    setFinished={setFinished}
                    setQuizzes={setQuizzes}
                />
            )}
            {quizzes.length <= 0 && (
                <EmptyQuiz />
            )}
        </div>
    )
}

export default Game
