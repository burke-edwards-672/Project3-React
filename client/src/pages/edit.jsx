//Allows users to create, modify, and delete cards in a deck.
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { api } from "../lib/api.js";

import Header from "../components/header";
import Footer from "../components/footer";
import EditCard from "../components/edit-card";

export default function Edit( {recents} ) {
    let navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [newQuestionId, setNewQuestionId] = useState(0);
    const [deck, setDeck] = useState({...recents[0]});

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
            console.log(recents);
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
        console.log("editing!!!");
        console.log(newQuestion);
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

    function saveDeck() {
        const newDeck = {...deck, questions: questions};
        api.putDeck(newDeck, newDeck.id || "");
        alert("Updated the deck!!!");
        //navigate("/View");
    }
    return (
        <>
            <Header />
            <main>

            </main>
            <button onClick={saveDeck}>Save Deck</button>
            <button onClick={appendQuestion}><img src="/images/icons/plus.jpg" /></button>
            {mapQuestions()}
            <Footer />
        </>
    )
}