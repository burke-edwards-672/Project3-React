
import Nav from "./nav";

export default function Header() {
    return (
        <header className="bg-1">
            <div className="pagetop">
                <img src="/images/illustrations/logo.png"/>
                <h1 className="display-1">Fonty's Flashcards</h1>
            </div>
            <Nav />
        </header>
    )
}