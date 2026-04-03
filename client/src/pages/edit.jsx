//Allows users to create, modify, and delete cards in a deck.
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { api } from "../lib/api.js";

import Card from "react-bootstrap/Card";
import Header from "../components/header";
import Footer from "../components/footer";
import EditCard from "../components/edit-card";

export default function Edit( {recents, recentSetter} ) {
    let navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [newQuestionId, setNewQuestionId] = useState(0);
    const [deck, setDeck] = useState({...recents[0]});
    const [infoForm, toggleInfoForm] = useState(false);

    //When I learned that [] makes this only run on the initial render, I thought that was just the initial render of the website.
    //Nope! It goes every time the whole thing pops up. That's incredibly useful. I can make this code so much cleaner knowing that.
    useEffect(() => {
        (async () => {
            const metadata = await api.getMetadata();
            const mainDeck = await api.getDeck(metadata.recentIds[0]);
            setQuestions(mainDeck.questions);
            setQuestions(questions => keyQuestions(questions));
            setNewQuestionId(mainDeck.questions.length);
            setDeck(mainDeck);
        })();
    }, [recents])

    function appendQuestion() {
        const key = `Q ${newQuestionId}`;
        const newQuestion = {
            front: "Front",
            back: "Back",
            key: key
        };
        setQuestions([...questions, newQuestion]);
        setNewQuestionId(id => id + 1);
    }

    function modifyQuestion(newQuestion) {
        setQuestions(questions.map(q => {
            if (q.key === newQuestion.key) {
                return newQuestion;
            } else {
                return q;
            }
        }))
    }

    function removeQuestion(key) {
        setQuestions(questions.filter(q => key !== q.key));
    }

    function keyQuestions(questions) {
        return questions.map((question, index) => {
            return {...question, key: `Q ${index.toString()}`};
        })
    }

    function mapQuestions() {
        return questions.map((question, index) => {
            if (question) {
                return (
                    <EditCard 
                    key={question.key}
                    index={index}
                    front={question.front}
                    back={question.back}
                    id={question.key}
                    edit={modifyQuestion}
                    remove={() => removeQuestion(question.key)}/>
                )
            }
        })
    }

    async function saveDeck() {
        const newDeck = {...deck, questions: questions};
        await api.putDeck(newDeck, newDeck.id || "");
        recentSetter();
        //navigate("/View");
    }

    function updateDeckInfo(formData) {
        const formObject = Object.fromEntries(formData.entries());
        
        setDeck({
            ...deck,
            name: formObject.deckName,
            category: formObject.deckCategory,
            description: formObject.deckDesc
        })
        toggleInfoForm(false);

    }

    function deckInfo() {
        if (infoForm) {
            return (
                <form className="edit-deck-info" action={updateDeckInfo}>
                    <div className="edit-deck-info-row">
                        <label for="deckName">Name</label>
                        <input id="deckName" name="deckName" defaultValue={deck.name || "..."} />
                    </div>
                    <div className="edit-deck-info-row">
                        <label for="deckCategory">Category</label>
                        <input id="deckCategory" name="deckCategory" defaultValue={deck.category || "..."} />
                    </div>
                    <div className="edit-deck-info-row">
                        <label for="deckDesc">Description</label>
                        <textarea id="deckDesc" name="deckDesc" defaultValue={deck.description || "..."} />
                    </div>
                    <button type="submit" className="edit-info-btn save-btn">Save Deck Info</button>
                </form>
            );
        } else {
            return (
                <div className="static-deck-info">
                    <h1>{deck.name || "..."}</h1>
                    <h2>Category: {deck.category || "..."}</h2>
                    <h3>{deck.description || "..."}</h3>
                    <button className="edit-info-btn edit-btn" onClick={() => {toggleInfoForm(true)}}>Edit Deck Info</button>
                </div>
            );
        }
    }
    
    return (
        <>
            <Header />
            <main id="edit">
                {deckInfo()}
                <img src="/images/illustrations/sun.png" style={{margin: "auto", display: "block"}}/>
                {mapQuestions()}
                <div className="confirm-btns">
                    <div className="confirm-card">
                        <button onClick={saveDeck} className="central-btn">
                            <Card>
                                <Card.Img variant="top" src="/images/fonty/toothy.jpg" />
                                <Card.Body>
                                    <Card.Title>Save Deck</Card.Title>
                                </Card.Body>
                            </Card>
                        </button>
                    </div>

                    <div className="confirm-card">
                        <button onClick={appendQuestion} className="central-btn">
                            <Card>
                                <Card.Img variant="top" src="/images/icons/plus.jpg" />
                                <Card.Body>
                                    <Card.Title>Add New Card</Card.Title>
                                </Card.Body>
                            </Card>
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}