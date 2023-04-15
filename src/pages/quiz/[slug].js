import { useRouter } from "next/router";
import Link from "next/link";
import { createClient } from "@sanity/client";
import { useState } from "react";
import { useEffect } from "react";

const Quiz = ({ quiz }) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleOptionChange = (questionIndex, selectedOptionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOptionIndex;
    setUserAnswers(newAnswers);
  };

  useEffect(() => {
    let newScore = 0;
    quiz.quizzes.forEach((question, index) => {
      const selectedOptionIndex = userAnswers[index];
      if (selectedOptionIndex !== undefined && question.options[selectedOptionIndex].isCorrect) {
        newScore += 10;
      }
    });
    setScore(newScore);
  }, [quiz, userAnswers]);

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    const percentage = (score / (quiz.quizzes.length * 10)) * 100;
    if (percentage <= 25) {
      setFeedback("Poor");
    } else if (percentage <= 50) {
      setFeedback("Good");
    } else if (percentage <= 75) {
      setFeedback("Excellent");
    } else {
      setFeedback("Perfect");
    }
  };

  return (
    <div>
      {!isSubmitted && quiz.quizzes.map((question, index) => (
        <div key={question._key}>
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <label key={option._key}>
              <input
                type="radio"
                name={`quiz-${index}`}
                value={option.option}
                checked={userAnswers[index] === optionIndex}
                onChange={() => handleOptionChange(index, optionIndex)}
              />
              {option.option}
            </label>
          ))}
        </div>
      ))}
      {!isSubmitted && <button onClick={handleSubmitQuiz}>Submit Quiz</button>}
      {isSubmitted && (
        <div>
          {quiz.quizzes.map((question, index) => (
            <div key={question._key}>
              <p>{question.question}</p>
              {question.options.map((option, optionIndex) => (
                <label key={option._key}>
                  <input
                    type="radio"
                    name={`quiz-${index}`}
                    value={option.option}
                    checked={userAnswers[index] === optionIndex}
                    disabled
                  />
                  {option.option}
                </label>
              ))}
              <p>{`Your answer: ${question.options[userAnswers[index]].option}`}</p>
            </div>
          ))}
          <p>Score: {score}/{quiz.quizzes.length * 10}</p>
          <p>Feedback: {feedback}</p>
        </div>
      )}
    </div>
  );
};




export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const quiz = await client.fetch(`*[_type == "assessment"][0]{
    quizzes,
  }`); 
  return {
    props: {
      quiz, //Return the fetch variable
    },
  };
}

export default Quiz;

