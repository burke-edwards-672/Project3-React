import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            <Container>
                <Row className="lav-stripe edit-card-row">
                    <Col xs="1">
                        <h2>{index + 1}:</h2>
                    </Col>
                    <Col>
                        <textarea className="night-1" name="front" defaultValue={front} />
                    </Col>
                    <Col>
                        <textarea className="night-1" name="back" defaultValue={back} />
                    </Col>
                    <Col xs="2">
                        <button name="Save" className="save-btn" type="submit">Save</button>
                        <button name="Delete" className="delete-btn" type="button" onClick={remove}>Delete</button>
                    </Col>
                </Row>
            </Container>
        </form>
    );
    return (
            <div className="edit-card">
                <Container>
                    <Row className="edit-card-row peach-stripe">
                        <Col xs="1">
                            <h2>{index + 1}:</h2>
                        </Col>
                        <Col>
                            <p>{front}</p>
                        </Col>
                        <Col>
                            <p>{back}</p>
                        </Col>
                        <Col xs="2">
                            <button name="Edit" className="edit-btn" type="button" onClick={() => {toggleModify(true);}}>Edit</button>
                            <button name="Delete" className="delete-btn" type="button" onClick={remove}>Delete</button>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}