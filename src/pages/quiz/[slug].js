import { useRouter } from "next/router";
import Link from "next/link";
import { createClient } from "@sanity/client";
import { useState } from "react";

const Quiz = ({ quiz }) => {
  console.log({quiz})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleOptionChange = (selectedOptionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOptionIndex;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quiz.quizzes.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      const isAllAnswered = userAnswers.length === quiz.quizzes.length;
      if (isAllAnswered) {
        setIsSubmitted(true);
        let newScore = 0;
        quiz.quizzes.forEach((question, index) => {
          const selectedOptionIndex = userAnswers[index];
          if (
            selectedOptionIndex !== undefined &&
            question.options[selectedOptionIndex].isCorrect
          ) {
            newScore += 10;
          }
        });
        setScore(newScore);

        const percentage = (newScore / (quiz.quizzes.length * 10)) * 100;
        if (percentage <= 25) {
          setFeedback(`Poor`);
        } else if (percentage <= 50) {
          setFeedback(`Good`);
        } else if (percentage <= 75) {
          setFeedback(`Excellent`);
        } else {
          setFeedback(`Perfect`);
        }
      }
    }
  };
  const hanldeBackQuestion = () => {
    const backIndex = currentQuestionIndex - 1;
    if (backIndex >= 0) {
      setCurrentQuestionIndex(backIndex);
    }
  };
  return (
    <div className="mx-auto p-7 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl m-[80px] mt-19 ">
      {!isSubmitted && (
        <div className="">
          <p>{quiz.quizzes[currentQuestionIndex].question}</p>
          {quiz.quizzes[currentQuestionIndex].options.map((option, index) => (
            <label key={option._key}>
              <input
                type="radio"
                name={`quiz-${currentQuestionIndex}`}
                value={option.option}
                checked={userAnswers[currentQuestionIndex] === index}
                onChange={() => handleOptionChange(index)}
              />
              {option.option}
            </label>
          ))}
          <button className="flex" onClick={handleNextQuestion}>
            Next
          </button>
          <button className="flex" onClick={hanldeBackQuestion}>
            Back
          </button>
        </div>
      )}
      {isSubmitted && (
        <div className="">
          {quiz.quizzes.map((question, index) => (
            <div className="" key={question._key}>
              <p className="">{question.question}</p>
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
              {userAnswers[index] !== undefined ? (
                <p>{`Your answer: ${
                  question.options[userAnswers[index]].option
                }`}</p>
              ) : (
                <p>{`You didn't answer this question.`}</p>
              )}
            </div>
          ))}
          <p>
            Score: {score}/{quiz.quizzes.length * 10}
          </p>
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
    poorFeedback,
    goodFeedback,
    excellentFeedback,
    perfectFeedback
  }`);
  return {
    props: {
      quiz, //Return the fetch variable
    },
  };
}

export default Quiz;
