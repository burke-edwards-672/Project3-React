import { useState } from "react";

export default function Card({ questions, index, nextCard, prevCard }) {
    const [isFlipped, setFlippedState] = useState(false);

    function flip() {
        setFlippedState(!isFlipped);
    }

    return (
        <>
            <div onClick={flip} className={isFlipped ? "flip-card flipped" : "flip-card"}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h2 className="card-number">{index + 1}</h2>
                        <h1>{questions[index] ? questions[index].front : "..."}</h1>
                    </div>
                    <div className="flip-card-back">
                        <h2 className="card-number">{index + 1}</h2>
                        <h1>{questions[index] ? questions[index].back : "..."}</h1>
                    </div>
                </div>
            </div>

            <div className="btn-group scroll-buttons" role="group">
                <button onClick={prevCard} id="left" type="button" className="btn scroll-button">Left</button>
                <button onClick={nextCard} id="right" type="button" className="btn scroll-button">Right</button>
            </div>
        </>
    )
}