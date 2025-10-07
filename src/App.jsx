import { useState } from 'react';
import './App.css'
import FlashCard from './flashcard'

function App() {

  const cardContent = [
    { Question: "What is the name of the first cat in space?", Answer: "Felicette" },
    { Question: "How many toes does a cat typically have on its front paws?", Answer: "Five" },
    { Question: "What is the world record for the oldest recorded cat?", Answer: "38 years" },
    { Question: "What is the largest breed of domestic cat?", Answer: "Maine Coon" }
  ];


  const [cardIdx, setCardIdx] = useState(-1);
  const [sideShown, setSideShown] = useState("Question");
  const [internalIdx, setInternalIdx] = useState(-1);
  const [guess, setGuess] = useState("");

  let tempIdxList = [];
  for (let idx = 0; idx < cardContent.length; idx++)
  {
    tempIdxList.push(idx);
  }
  tempIdxList.sort(() => Math.random() - 0.5);
  const [idxList, setIdxList] = useState(tempIdxList);

  const flipCard = () => {
    setSideShown(prev => (prev === 'Question' ? 'Answer' : 'Question'));
  }

  const setNext = () => {
    if (internalIdx < cardContent.length - 1) {
      setCardIdx(idxList.at(internalIdx + 1));
      setSideShown("Question");
      setInternalIdx(internalIdx + 1);
    }
  }

  const setBack = () => {
    if (internalIdx > 0) {
      setCardIdx(idxList.at(internalIdx - 1));
      setSideShown("Question");
      setInternalIdx(internalIdx - 1);
    }
  }

  const checkGuess = () => {
    if (guess == cardContent[cardIdx].Answer)
      alert("Correct Answer!");
    else
      alert("Sorry :( Wrong Answer.")
  }

  return (
    <>
      <div className='App'>
        <h1>Cat Fact Flashcards</h1>
        <h2>Do you love cats? Test your knowledge of cats here!</h2>
        <h4>Number of cards: {cardContent.length}</h4>
        <div>
          <div className='current-card' onClick={flipCard}>
            <FlashCard Question={(cardIdx >= 0) ? cardContent.at(cardIdx).Question : "Click the next button to see the questions"} 
            Answer={(cardIdx >= 0) ? cardContent.at(cardIdx).Answer : "Click the next button to see the fun answers"} sideShown={sideShown} />
          </div>
          <div className='guess'>
            <h5>Type your guess:</h5>
            <input type='input' value={guess} onChange={(e) => {setGuess(e.target.value)}}/>
            <button onClick={checkGuess}>Guess!</button>
          </div>
          <div className='buttons'>
            <button onClick={setBack}>
              Back
            </button>
            <button onClick={setNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
