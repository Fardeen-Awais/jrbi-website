import { useState } from "react";

export default function Quiz() {
  const [answers, setAnswers] = useState(["", "", ""]);

  const handleAnswer = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex === 0 ? "perfect" : "incorrect";
    setAnswers(newAnswers);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <p>Select the correct answer for each question:</p>
      <ol>
        <li>
          Question 1: What is the capital of France?
          <ul>
            <li onClick={() => handleAnswer(0, 0)}>A. Paris</li>
            <li onClick={() => handleAnswer(0, 1)}>B. London</li>
            <li onClick={() => handleAnswer(0, 2)}>C. Berlin</li>
            <li onClick={() => handleAnswer(0, 3)}>D. Madrid</li>
          </ul>
        </li>
        <li>
          Question 2: What is the largest planet in our solar system?
          <ul>
            <li onClick={() => handleAnswer(1, 0)}>A. Jupiter</li>
            <li onClick={() => handleAnswer(1, 1)}>B. Saturn</li>
            <li onClick={() => handleAnswer(1, 2)}>C. Mars</li>
            <li onClick={() => handleAnswer(1, 3)}>D. Venus</li>
          </ul>
        </li>
        <li>
          Question 3: Who painted the Mona Lisa?
          <ul>
            <li onClick={() => handleAnswer(2, 0)}>A. Leonardo da Vinci</li>
            <li onClick={() => handleAnswer(2, 1)}>B. Vincent van Gogh</li>
            <li onClick={() => handleAnswer(2, 2)}>C. Pablo Picasso</li>
            <li onClick={() => handleAnswer(2, 3)}>D. Salvador Dalí</li>
          </ul>
        </li>
      </ol>
      <p>
        {answers.every((answer) => answer === "perfect")
          ? "Perfect!"
          : "Incorrect answers. Please try again."}
      </p>
    </div>
  );
}
