import { useRouter } from "next/router";
import Link from "next/link";
import { createClient } from "@sanity/client";
import { useState } from "react";

const Quiz = ({ quizzes }) => {
  console.log("quizzes:", quizzes); // check if quizzes is defined
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const handleOptionSelect = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
  };

  const handleNextButtonClick = () => {
    const currentQuestion = quizzes[currentQuestionIndex];
    console.log("currentQuestion:", currentQuestion); // check if currentQuestion is defined
    const isCorrect = currentQuestion.options[selectedOptionIndex].isCorrect;
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedOptionIndex(null);
    if (currentQuestionIndex === quizzes.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateAccuracy = () => {
    return ((score / quizzes.length) * 100).toFixed(2);
  };

  if (showResults) {
    return (
      <div>
        <h1>Results</h1>
        <p>You scored {score} out of {quizzes.length} ({calculateAccuracy()}%)</p>
      </div>
    );
  }
  const currentQuestion = quizzes[currentQuestionIndex];

  if (!currentQuestion || !currentQuestion.options) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={option._key}>
            <button onClick={() => handleOptionSelect(index)} disabled={selectedOptionIndex !== null}>
              {option.option}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleNextButtonClick} disabled={selectedOptionIndex === null}>Next</button>
    </div>
  );
  
};

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "54m8bn61", //Project id is in the sanity.json
    dataset: "production",
    useCdn: false,
  });
  const quizzes = await client.fetch(`*[_type == "assessment"]{
    quizzes
  }`); 
  return {
    props: {
      quizzes, //Return the fetch variable
    },
  };
}

export default Quiz;

