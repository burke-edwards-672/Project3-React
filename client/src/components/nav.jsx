import { NavLink} from "react-router-dom";

//Lots of good docs on reactrouter.com/declarative/navigating.
//MAKE SURE IT SAYS "DECLARATIVE" cuz that's what we're doing here!!!
//Tells you what the pseudo-classes are that can be modified
//Hallelujah, import { redirect } from "react-router"!!! Guessing I shold do "react-router-dom". Weird stuff there.

export default function Nav() {

    return (
        <nav class="navbar navbar-expand-lg bg-2">
            <div class="container-fluid">
                <NavLink to="/" className = "navbar-brand">
                   Navbar
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className = "nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Decks" className = "nav-link">
                                Decks
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Settings" className = "nav-link">
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}