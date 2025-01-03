import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const ContactForm = ({ slug, getUsersList }) => {
    const [nameInput, setNameInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [addressInput, setAddressInput] = useState("");

    const addNewUser = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
            method: "POST",
            body: JSON.stringify(

                {
                    "name": nameInput,
                    "phone": phoneInput,
                    "email": emailInput,
                    "address": addressInput
                }
            ),

            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => getUsersList());
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    type="text"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    type="number"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    type="email"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control value={addressInput}
                    onChange={(e) => setAddressInput(e.target.value)}
                    type="text"
                />
            </Form.Group>
            <Button variant="primary"
                onClick={() => addNewUser()}
            >
                Create contact
            </Button>
        </Form>
    );
};