const FlashCard = (props) => {
    return (
    <>
        <div className="flashcard-design">
            <h2 className="card">{(props.sideShown == 'Question') ? "Question: " + props.Question : "Answer: " + props.Answer}</h2>
        </div>
    </>
    );
}
export default FlashCard;