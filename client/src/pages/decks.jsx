//The complete list of decks fetched from db.json. Also provides users with the option to delete a deck.
import Deck from "../components/deck";
import Header from "../components/header";
import Footer from "../components/footer";

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { api } from "../lib/api.js";

export default function Decks({ sorter, recentSetter }) {
    let navigate = useNavigate();

    const [decks, setDecks] = useState([])
    const [count, increment] = useState(1)

    async function makeDummyDeck() {
        await api.postDeck({
            category: "nothing",
            name: `test ${count}`,
            description: "Very naice!!!",
            questions: []
        });
        increment(count + 1);
        loadDecks();
    }

    async function deleteDeck(id) {
        await api.deleteDeck(id);
        loadDecks();
        recentSetter();

    }

    useEffect(() => {
        loadDecks();
    }, [])

    async function loadDecks() {
        setDecks(await api.getDecks())
    }

    function makeDecks() {
        return decks.map((deck) => {
            return (
                <Deck 
                key={deck.id}
                name={deck.name || "..."}
                desc={deck.description || "..."}
                id={deck.id}
                sorter={sorter}
                loader={loadDecks}
                deleter={deleteDeck}
                />
            )
        })
    }

    return (
        <>
            <Header />
            <main id="decks">
                <div className="container px-0">
                    <div className="row deck border peach-stripe create-deck"
                    onClick={() => {
                        //navigate("/PageNotFound");
                        makeDummyDeck()}}>
                        <div className="col-md-4 middle">
                            <img src="/images/icons/plus.jpg" class="deck-icon" />
                        </div>

                        <div className="col-md-3 middle">
                            <h3>New Deck</h3>
                        </div>
                        <div className="col-md-5">
                            
                        </div>
                    </div>

                    {makeDecks()}

                </div>
            </main>
            <Footer />
        </>
    )
}