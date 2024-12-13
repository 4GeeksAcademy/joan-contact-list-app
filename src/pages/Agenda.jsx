import { useEffect } from "react";
import { useState } from "react";
import { isEmpty } from "lodash";

export const Agenda = () => {

    const [agendas, setAgendas] = useState([]);
    const getContactList = () => {
        fetch("https://playground.4geeks.com/contact/agendas/", {
            method: "GET",
        }).then((res) => {
            return res.json()
        }).then((response) => {
            setAgendas(response.agendas)
        })
    }

    useEffect(() => {
        getContactList()
    }, [])

    return (
        <>
          {!isEmpty(agendas) && agendas.map((item)=> {
            return (
                <h1>{item.slug}</h1>
            )
          })}
        </>       
    )

    const addNewContact =(text) => {
        const contact = {
            name: text,
            phone: false
            email
        }
        fetch('https://playground.4geeks.com/contact/agendas/Joan/contacts', {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => getTodosList())
    }

}