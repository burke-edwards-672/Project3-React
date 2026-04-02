//The main homepage/dashboard, mainly to welcome the user and help them navigate.

import Panel from "../components/panel";
import PanelItem from "../components/panel-item";
import { useNavigate } from "react-router";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Home({ sorter, recents }) {
    let navigate = useNavigate();

    function makePanelItems() {
        if (recents.length < 1) {
            return (
                <PanelItem 
                className="card m-2 peach-stripe"
                pic="/images/fonty/shock.jpg"
                label="No decks yet!"
                onClick={() => {
                    navigate("/Decks");
                }}
                />
            )
        }
        //Unreachable if there are no recent decks.
        return recents.map((deck) => {
            return (
                <PanelItem 
                key={deck.id}
                className="card m-2 peach-stripe"
                pic="/images/fonty/wink.jpg"
                label={deck.name || "..."}
                onClick={() => {
                    if (deck.id) {
                        sorter(deck.id);
                        navigate("/View");
                    } else {
                        alert("Couldn't find that one, sorry!");
                    }
                }}
                />
            )
        })
    }

    return (
        <>
            <Header />
            <main id="home">
                <img src="/images/illustrations/sun.png" style={{margin: "auto", display: "block"}} />
                <h1 className="text-center">Jump back in</h1>

                <Panel className="row">
                    {makePanelItems()}
                </Panel>

                <img src="/images/illustrations/moon.png" style={{margin: "auto", display: "block"}} />
                <h1 className="text-center">Manage Your Decks</h1>

                <Panel className="row">
                    <PanelItem 
                    className="card m-2 lav-stripe"
                    pic="/images/fonty/cool.jpg"
                    label="All Decks"
                    onClick={() => {
                        navigate("/Decks");
                    }}
                    />

                    <PanelItem 
                    className="card m-2 lav-stripe create-deck"
                    pic="/images/icons/plus.jpg"
                    label="New Deck"
                    onClick={() => {
                        navigate("/PageNotFound");
                    }}
                    />

                    <PanelItem 
                    className="card m-2 lav-stripe"
                    pic="/images/fonty/chill.jpg"
                    label="All Categories"
                    onClick={() => {
                        navigate("/PageNotFound");
                    }}
                    />
                </Panel>
            </main>
            <Footer />
        </>

    )
}