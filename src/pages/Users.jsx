import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Container, Badge, Button } from "react-bootstrap";

export const Users = () => {
    const [contacts, setContacts] = useState([]);
    const [inputValue, setInputValue] = useState(""); 

    const getUsersList = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((response) => {
                setContacts(response.contacts); 
            });
    };

    const addNewUser = (slug) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
            method: "POST",
            body: JSON.stringify({slug}), 
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => getUserList());
    };

    const removeUser = (slug) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
            method: "DELETE",
        }).then(() => getUserList());
    };

    useEffect(() => {
        getUserList(setContacts);
    }, []);

    return (
        <Container className="mt-5">
            <Badge
                className="py-3 px-3 bg-success border rounded"
                style={{
                    width: "100%",
                }}
            >
                <h1 className="mb-3 bg-success text-light d-flex align-items-center justify-content-start">
                    To Do List
                </h1>
                <input
                    type="text"
                    placeholder="Write a new task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.code === "Enter" && inputValue.trim() !== "") {
                            addNewUser(inputValue);
                            setInputValue("");
                        }
                    }}
                    style={{
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        width: "100%",
                    }}
                />
            </Badge>
            {!isEmpty(contacts) && contacts.map((element) => (
                <Container
                    className="d-flex align-items-center"
                    key={element.slug} 
                >
                    <Container className="text-light mt-1 py-2 bg-success border rounded">
                        {element.slug || "Sin etiqueta"}
                        <Button
                            className="text-success float-end"
                            variant="light"
                            size="sm"
                            onClick={() => removeUser(element.slug)}
                        >
                            <strong>X</strong>
                        </Button>
                    </Container>
                </Container>
            ))}
        </Container>
    );
};