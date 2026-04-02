//Allows users to create, modify, and delete cards in a deck.
import { useState, useEffect } from "react";
import { api } from "../lib/api.js";

import Header from "../components/header";
import Footer from "../components/footer";
import EditCard from "../components/edit-card";

export default function Edit(recents) {
    const [cards, setCards] = useState([]);

    //When I learned that [] makes this only run on the initial render, I thought that was just the initial render of the website.
    //Nope! It goes every time the whole thing pops up. That's incredibly useful. I can make this code so much cleaner knowing that.
    useEffect(() => {
        (async () => {
            const metadata = await api.getMetadata();
            const deck = await api.getDeck(metadata.recentIds[0])
            setCards(deck.questions);
        })();
    }, [])

    function makeCards() {
        return cards.map((card) => {
            if (card) {
                return (
                    <>
                        <p>{card.front}</p>
                        <p>{card.back}</p>
                    </>
                )
            }
        })
    }

    function post(formData) {
        alert(formData.get("test-box"));
    }

    function deleteCard(formData) {
        alert(`YOU DELETED`);
    }
    return (
        <>
            <Header />
            <main>
                <form action={post}>

                    <EditCard />
                    <EditCard />
                    <EditCard />

                    <button type="submit">Submit</button>
                </form>
            </main>
            <button><img src="/images/icons/plus.jpg" /></button>
            {makeCards()}
            <Footer />
        </>
    )
}