import { useState } from "react";

export default function EditCard({ frontText, backText }) {
    const [front, setFront] = useState("front");

    return (
        <div className="edit-card">
            <textarea/>
            <textarea/>
            <button name="Delete" type="button" >Delete</button>
        </div>
    )
}