import { useState } from "react";

export default function EditCard({ index, front, back, id, edit, remove}) {
    const [isModifying, toggleModify] = useState(false);

    function saveChanges(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const formObject = Object.fromEntries(formData.entries());
        formObject.key = id;

        console.log(formObject);
        edit(formObject);
        toggleModify(false);
    }

    if (isModifying) return (
        <form className="edit-card" onSubmit={saveChanges}>
            <textarea name="front" defaultValue={front} />
            <textarea name="back" defaultValue={back} />
            <p>{index}</p>
            <button name="Save" type="submit">Save</button>
            <button name="Delete" type="button" onClick={remove}>Delete</button>
        </form>
    );
    return (
            <div className="edit-card">
                <p>{front}</p>
                <p>{back}</p>
                <p>{index}</p>
                <button name="Edit" type="button" onClick={() => {toggleModify(true);}}>Edit</button>
                <button name="Delete" type="button" onClick={remove}>Delete</button>
            </div>
    )
}