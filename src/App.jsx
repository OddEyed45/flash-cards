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
  const [buttonColor1, setButtonColor1] = useState("gray");
  const [buttonCursor1, setButtonCursor1] = useState("auto");
  const [buttonColor2, setButtonColor2] = useState("black");
  const [buttonCursor2, setButtonCursor2] = useState("pointer");

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
      const newIdx = internalIdx + 1;
      setCardIdx(idxList.at(newIdx));
      setSideShown("Question");
      setInternalIdx(newIdx);

      // update button states based on the new internal index
      const atEnd = newIdx >= cardContent.length - 1;
      const atStart = newIdx <= 0;
      setButtonColor2(atEnd ? "gray" : "black");
      setButtonCursor2(atEnd ? "auto" : "pointer");
      setButtonColor1(atStart ? "gray" : "black");
      setButtonCursor1(atStart ? "auto" : "pointer");
    }
  }

  const setBack = () => {
    if (internalIdx > 0) {
      const newIdx = internalIdx - 1;
      setCardIdx(idxList.at(newIdx));
      setSideShown("Question");
      setInternalIdx(newIdx);

      // update button states based on the new internal index
      const atStart = newIdx <= 0;
      const atEnd = newIdx >= cardContent.length - 1;
      setButtonColor1(atStart ? "gray" : "black");
      setButtonCursor1(atStart ? "auto" : "pointer");
      setButtonColor2(atEnd ? "gray" : "black");
      setButtonCursor2(atEnd ? "auto" : "pointer");
    }
  }

  const checkGuess = () => {
    if (guess.toLocaleLowerCase() == cardContent[cardIdx].Answer.toLocaleLowerCase())
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
            <button onClick={setBack} style={{backgroundColor: buttonColor1, cursor: buttonCursor1}}>
              Back
            </button>
            <button onClick={setNext} style={{backgroundColor: buttonColor2, cursor: buttonCursor2}}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
