import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Container, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { ContactForm } from "../components/Form";

export const User = () => {
    const [users, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState("");
    let { slug } = useParams();

    const getUsersList = () => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((response) => {
                setUsers(response.contacts || []);
                console.log(response);
            });
    };

    const removeUser = (id) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
            method: "DELETE",
        }).then(() => getUsersList());
    };

    useEffect(() => {
        getUsersList();
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
                    User de {slug}
                </h1>
                <ContactForm getUsersList={getUsersList} slug={slug}/>
            </Badge>
            {!isEmpty(users) && users.map((element) => (
                <Container
                    className="d-flex align-items-center"
                    key={element.id}
                >
                    <Container className="text-light mt-1 py-2 bg-success border rounded">
                        {element.name || "Without name"}<br/>
                        {element.phone || "Without phone"}<br/>
                        {element.email || "Without email"}<br/>
                        {element.address || "Without address"}<br/>
                        <Button
                            className="text-success float-end"
                            variant="light"
                            size="sm"
                            onClick={() => removeUser(element.id)}
                        >
                            <strong>X</strong>
                        </Button>
                    </Container>
                </Container>
            ))}
        </Container>
    );
};