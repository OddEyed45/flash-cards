import { useState } from 'react';
import './App.css'
import FlashCard from './flashcard'

function App() {

  const cardContent = [
    {Question: "What is the name of the first cat in space?", Answer: "Felicette"},
    {Question: "How many toes does a cat typically have on its front paws?", Answer: "Five"},
    {Question: "What is the world record for the oldest recorded cat?", Answer: "38 years"},
    {Question: "What is the largest breed of domestic cat?", Answer: "Maine Coon"}
  ];
  const [cardIdx, setCardIdx] = useState(0);
  
  return (
    <>
      <div className='App'>
        <h1>Cat Fact Flashcards</h1>
        <h2>Do you love cats? Test your knowledge of cats here!</h2>
        <h4>Number of cards: {cardContent.length}</h4>
        <FlashCard Question={cardContent[0].Question} Answer={cardContent[0].Answer}/>
      </div>
    </>
  )
}

export default App
