
import { useState } from 'react';
import Game from './Game';
import Scores from './Scores';

const Quiz = () => {

    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [quizzes, setQuizzes] = useState(require("../../assets/mock-data.json"));


    return (
        <div>
            {!finished && (
                <Game
                    score={score}
                    setScore={setScore}
                    currentQuiz={currentQuiz}
                    setCurrentQuiz={setCurrentQuiz}
                    quizzes={quizzes}
                    setFinished={setFinished}
                />
            )}

            {finished && (
                <Scores
                    score={score}
                    setFinished={setFinished}
                    setScore={setScore}
                    setCurrentQuiz={setCurrentQuiz}
                />
            )}
        </div>

    )
}

export default Quiz
