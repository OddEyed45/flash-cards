const FlashCard = (props) => {
    return (
    <>
        <div className="flashcard-design">
            <h2 className="card">{props.Question}</h2>
        </div>
    </>
    );
}
export default FlashCard;