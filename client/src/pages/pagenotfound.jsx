//A quick page to tell the user "oops, sorry, you tried going somewhere that doesn't exist".
//Also serves as a list of potential features for the site.

import Header from "../components/header";
import Footer from "../components/footer";

export default function PageNotFound() {
    return (
        <>
            <div className="dark"><Header /></div>
            <main id="page-not-found" className="upcoming">
                <img src="/images/illustrations/coming-soon.jpg" />
                <h2>Fonty's a little busy right now!</h2>
                <h2>Future website improvements below:</h2>

                <hr />

                <div className="upgrades">
                    <h3>Deck Categories</h3>
                    <p>Once you've made a bunch of decks, it'd be nice to have a clean way of sorting them.
                        Categories will be tags that you can create and assign to whatever decks your heart desires.
                        A "Categories" page/searcher or something will also be created to access this feature.
                    </p>

                    <h3>Quizzes and Flagged Cards</h3>
                    <p>I'm pretty much just stealing this from Quizlet. The user will be able to flag cards that
                        are extra tricky. They'll then be able to focus specifically on these flagged cards, which is 
                        a lifesaver for user experience. The quizzes would provide a way to track how many cards you guess
                        correctly, relying on manual input and good faith.
                    </p>

                    <h3>Search Bar</h3>
                    <p>Nothing too crazy, but this would provide a way for users to search through their decks once they've
                        made a bunch.
                    </p>

                    <h3>Site Settings</h3>
                    <p>There are a handful of parameters that users might want toggled by default. Dark mode, questions first
                        vs. answers first, and shuffled decks.
                    </p>

                    <h3>Better React Code</h3>
                    <p>This site was originally made as a vanilla HTML/CSS/JS project, and reformed into a hybrid mess of React 
                        and whatever else. Needless to say, there are certainly things to clean up! useContext seems useful for 
                        dealing with the global "recent" state (which stores the order of the three most recently used decks).
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}