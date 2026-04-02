//The place for users to view the cards in whichever deck they've selected.
import Card from "../components/card";
import Header from "../components/header";
import Footer from "../components/footer";

import { useState, useEffect } from 'react';

export default function View({ recents, loadRecents }) {
    const [index, setIndex] = useState(0);
    const deck = recents[0];

    function nextCard() {
        const newIndex = index + 1
        if (deck.questions && newIndex >= deck.questions.length) {
            setIndex(0);
        } else {
            setIndex(newIndex);
        }
    }

    function prevCard() {
        const newIndex = index - 1
        if (deck.questions && newIndex < 0) {
            setIndex(deck.questions.length - 1);
        } else {
            setIndex(newIndex);
        }
    }

    return (
        <>
            <Header />
            <main id="view">
                <div className="deck-info">
                    <h1 id="name" className="centered">{deck.name || "..."}</h1>
                    <h2 id="desc" className="centered">{deck.description || "..."}</h2>
                </div>

                <Card questions={deck.questions || [{front: "...", back: "..."}]} index={index} nextCard={nextCard} prevCard={prevCard} />
            </main>
            <Footer />
        </>
    )
}