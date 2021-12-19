import { useState } from "react";
import QuizGame from './QuizGame';
import EmptyQuiz from './EmptyQuiz';

const Game = ({ score, setScore, currentQuiz, setCurrentQuiz, setFinished }) => {

    //const [quizzes, setQuizzes] = useState(require("../../assets/empty-data.json"));
    const [quizzes, setQuizzes] = useState(require("../../assets/mock-data.json"));

    return (
        <div>
            {quizzes.length > 0 && (
                <QuizGame
                    score={score}
                    setScore={setScore}
                    currentQuiz={currentQuiz}
                    setCurrentQuiz={setCurrentQuiz}
                    quizzes={quizzes}
                    setFinished={setFinished}
                />
            )}

            {quizzes.length <= 0 && (
                <EmptyQuiz />
            )}
        </div>
    )
}

export default Game
