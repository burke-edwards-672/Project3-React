//Allows users to create, modify, and delete cards in a deck.
import { useState, useEffect } from "react";
import { api } from "../lib/api.js";

import Header from "../components/header";
import Footer from "../components/footer";
import EditCard from "../components/edit-card";

export default function Edit(recents) {
    const [cards, setCards] = useState([]);
    const [newId, setNewId] = useState(0);

    //When I learned that [] makes this only run on the initial render, I thought that was just the initial render of the website.
    //Nope! It goes every time the whole thing pops up. That's incredibly useful. I can make this code so much cleaner knowing that.
    useEffect(() => {
        (async () => {
            const metadata = await api.getMetadata();
            const deck = await api.getDeck(metadata.recentIds[0])
            setCards(deck.questions);
            setCards(cards => keyCards(cards))
            setNewId(deck.questions.length)
        })();
    }, [])

    function appendCard() {
        const key = `Q ${newId}`;
        const newCard = {
            front: "Front",
            back: "Back",
            key: key
        };
        setCards([...cards, newCard]);
        setNewId(id => id + 1);
    }

    function modifyCard(newCard) {
        console.log("editing!!!");
        console.log(newCard);
        setCards(cards.map(c => {
            if (c.key === newCard.key) {
                return newCard;
            } else {
                return c;
            }
        }))
    }

    function removeCard(key) {
        setCards(cards.filter(c => key !== c.key));
        //setCards(cards => keyCards(cards));
    }

    function keyCards(questions) {
        return questions.map((question, index) => {
            return {...question, key: `Q ${index.toString()}`};
        })
    }

    function mapCards() {
        return cards.map((card, index) => {
            if (card) {
                return (
                    <EditCard 
                    key={card.key}
                    index={index}
                    front={card.front}
                    back={card.back}
                    id={card.key}
                    edit={modifyCard}
                    remove={() => removeCard(card.key)}/>
                )
            }
        })
    }

    function post(formData) {
        alert(formData.get("test-box"));
    }
    return (
        <>
            <Header />
            <main>

            </main>
            <button onClick={appendCard}><img src="/images/icons/plus.jpg" /></button>
            {mapCards()}
            <Footer />
        </>
    )
}