import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function validateInput(userInput) {
  if (
    !Number.isFinite(userInput.initialInvestment) ||
    userInput.initialInvestment < 0
  ) {
    return false;
  }

  if (
    !Number.isFinite(userInput.annualInvestment) ||
    userInput.annualInvestment < 0
  ) {
    return false;
  }

  if (
    !Number.isFinite(userInput.expectedReturn) ||
    userInput.expectedReturn > 100 ||
    userInput.expectedReturn < -100
  ) {
    return false;
  }

  if (!Number.isInteger(userInput.duration) || userInput.duration < 1) {
    return false;
  }

  return true;
}

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 750,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = validateInput(userInput);

  function handleInput(inputId, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputId]: +newValue,
      };
    });
  }

  return (
    <main>
      <UserInput onInput={handleInput} userInput={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter valid values.</p>
      )}
    </main>
  );
}

export default App;
