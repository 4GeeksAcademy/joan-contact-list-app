import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Container, Badge, Button } from "react-bootstrap";
import { NavLink } from "react-router";

export const Agenda = () => {
    const [agendas, setAgendas] = useState([]);
    const [inputValue, setInputValue] = useState(""); 

    const getContactList = () => {
        fetch("https://playground.4geeks.com/contact/agendas", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((response) => {
                setAgendas(response.agendas); 
            });
    };

    const addNewContact = (slug) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
            method: "POST",
            body: JSON.stringify({slug}), 
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => getContactList());
    };

    const removeContacts = (slug) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
            method: "DELETE",
        }).then(() => getContactList());
    };

    useEffect(() => {
        getContactList(setAgendas);
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
                    Agendas List
                </h1>
                <input
                    type="text"
                    placeholder="Write a new task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.code === "Enter" && inputValue.trim() !== "") {
                            addNewContact(inputValue);
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
            {!isEmpty(agendas) && agendas.map((element) => (
                <Container
                    className="d-flex align-items-center"
                    key={element.slug} 
                >
                    <Container className="text-light mt-1 py-2 bg-success border rounded">
                        <NavLink to={`/User/${element.slug}`} end>
                        <Button>{element.slug || "Sin etiqueta"}</Button>
                        </NavLink>
                        <Button
                            className="text-success float-end"
                            variant="light"
                            size="sm"
                            onClick={() => removeContacts(element.slug)}
                        >
                            <strong>X</strong>
                        </Button>
                    </Container>
                </Container>
            ))}
        </Container>
    );
};