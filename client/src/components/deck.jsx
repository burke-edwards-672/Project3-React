import { useNavigate } from "react-router";

export default function Deck({ name, desc, id, sorter, loader, deleter }) {
    let navigate = useNavigate();

    function deleteDeck() {
        deleter(id)
        console.log("Delete successful!!!");
        alert("IT'S GONE!!!!");
    }

    return (
        <div className="row deck border lav-stripe"
        onClick={() => {
            if (id) sorter(id);
            navigate("/View");
        }}>
            <div className="col-md-4 middle">
                <img src="/images/fonty/smile.jpg" className="deck-icon" />
            </div>
            <div className="col-md-3 middle">
                <h3>{name}</h3>
            </div>
            <div className="col-md-4 middle">
                <p>{desc}</p>
            </div>
            <div className="col-md-1 p-0 btn-group-vertical" role="group" aria-label="Vertical button group">
                <button type="button" className="btn"><img src="/images/icons/edit.png" height="50" title="edit"
                onClick={(e) => {
                    e.stopPropagation();
                    if (id) sorter(id);
                    navigate("/Edit");
                }} /></button>
                <button type="button" className="btn"><img src="/images/icons/delete.png" height="50" title="delete"
                onClick={(e) => {
                    e.stopPropagation();
                    alert("DELETING!! Are you sure???");
                    deleteDeck();
                }} /></button>
            </div>
        </div>
    )
}