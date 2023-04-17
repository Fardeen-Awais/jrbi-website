import { useRouter } from "next/router";
import Link from "next/link";
import { createClient } from "@sanity/client";
import { useState } from "react";
import Progress from "@/components/Progress";

const Quiz = ({ quiz }) => {
  // States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [userPercentage, setuserPercentage] = useState("");
  const [color, setcolor] = useState("");

  // Options
  const handleOptionChange = (selectedOptionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOptionIndex;
    setUserAnswers(newAnswers);
  };

  // Next question function
  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quiz.quizzes.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      const isAllAnswered = userAnswers.length === quiz.quizzes.length; // check all the user filled the answered or not.
      if (isAllAnswered) {
        // if all answered submit
        setIsSubmitted(true);
        let newScore = 0;
        quiz.quizzes.forEach((question, index) => {
          const selectedOptionIndex = userAnswers[index];
          if (
            selectedOptionIndex !== undefined &&
            question.options[selectedOptionIndex].isCorrect
          ) {
            newScore += 1;
          }
        });
        setScore(newScore); // Adding score

        // Getting Expert options
        const feedbackValues = {
          poor: quiz.poorFeedback,
          good: quiz.goodFeedback,
          excellent: quiz.excellentFeedback,
          perfect: quiz.perfectFeedback,
        };

        const percentage = Math.floor(
          (newScore / (quiz.quizzes.length)) * 100
        ); // Getting percentage of the score
        if (percentage <= 25) {
          setFeedback(`${feedbackValues.poor}`);
          setuserPercentage(percentage);
          setcolor('red')
        } else if (percentage <= 50) {
          setFeedback(`${feedbackValues.good}`);
          setuserPercentage(percentage);
          setcolor('yellow')
        } else if (percentage <= 75) {
          setFeedback(`${feedbackValues.excellent}`);
          setuserPercentage(percentage);
          setcolor('blue')
        } else {
          setFeedback(`${feedbackValues.perfect}`);
          setuserPercentage(percentage);
          setcolor('green')
        }
      }
    }
  };
  // Back button Option

  const hanldeBackQuestion = () => {
    const backIndex = currentQuestionIndex - 1;
    if (backIndex >= 0) {
      setCurrentQuestionIndex(backIndex);
    }
  };

  return (
    <div className="mx-auto p-7 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl m-16 flex flex-col justify-center items-center font-poppins">
      <div
        className={`flex flex-col my-5 w-full ${isSubmitted ? "hidden" : ""}`}
      >
        <button className="flex my-4" onClick={hanldeBackQuestion}>
          Back
        </button>
        <p className="relative top-0 right-0 flex justify-start  font-semibold text-xl">{`${quiz.quizzes[currentQuestionIndex].question}`}</p>
        <p className="text-gray-500">Answer and get score </p>
        <p className="border-b border-black w-full my-5 py-2">{`Quiz ${[
          currentQuestionIndex + 1,
        ]} of ${quiz.quizzes.length}`}</p>
      </div>

      {!isSubmitted && (
        <div className="grid md:grid-cols-2 overflow-hidden ">
          <div className="flex flex-col justify-center md:justify-center items-center">
            <div className="grid md:grid-cols-2 gap-x-60 ">
              {quiz.quizzes[currentQuestionIndex].options.map(
                (option, index) => (
                  <button
                    key={option._key}
                    type="button"
                    name={`quiz-${currentQuestionIndex}`}
                    value={index}
                    onClick={() => handleOptionChange(index)}
                    className={`rounded-md mx-3 md:mx-2 py-4 text-sm font-poppins outline outline-1 outline-gray-400 my-3 w-96 md:w-72 overflow-hidden  ${
                      userAnswers[currentQuestionIndex] === index
                        ? "bg-gradient-to-r from-green-300  to-green-400"
                        : "bg-white "
                    }`}
                  >
                    {option.option}
                  </button>
                )
              )}
              <div></div>
            </div>
            <div className="flex w-full ">
              <button
                className="flex justify-center items-center w-full md:w-72 mx-3  my-10 py-3 bg-black-200 text-white rounded-md "
                onClick={handleNextQuestion}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {isSubmitted && (
        // <div className="">
        //   {quiz.quizzes.map((question, index) => (
        //     <div className="" key={question._key}>
        //       <p className="">{question.question}</p>
        //       {question.options.map((option, optionIndex) => (
        //         <label key={option._key}>
        //           <input
        //             type="radio"
        //             name={`quiz-${index}`}
        //             value={option.option}
        //             checked={userAnswers[index] === optionIndex}
        //             disabled
        //           />
        //           {option.option}
        //         </label>
        //       ))}
        //       {userAnswers[index] !== undefined ? (
        //         <p>{`Your answer: ${
        //           question.options[userAnswers[index]].option
        //         }`}</p>
        //       ) : (
        //         <p>{`You didn't answer this question.`}</p>
        //       )}
        //     </div>
        //   ))}

        //   <p className="">
        //     Score: {score}/{quiz.quizzes.length * 10} Percentage:{" "}
        //     {userPercentage}%
        //   </p>
        //   <p className="text-lg m-5">Feedback: {feedback} </p>
        // </div>
        <div className="flex flex-col justify-center items-center gap-14">
          <h2 className="text-5xl ">Result</h2>
          <div>
            <Progress
              score={score}
              userPercentage={userPercentage}
              feedback={feedback}
              totalQuestion = {quiz.quizzes.length}
              color = {color}
            />
          </div>
          <div className="flex flex-col justify-center items-center my-5 max-w-xs bg-yellow-200 p-10 md:max-w-3xl font-poppins ">
            <h3 className="text-2xl my-6 font-semibold text-tertiary ">
              Expert FeedBack
            </h3>
            <p className="text-start max-w- md:text-start ">{feedback}</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h3 className="text-2xl my-1">Resources</h3>
            <div>Blogs</div>
            <div>Videos</div>
          </div>
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
