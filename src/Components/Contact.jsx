import React, { useEffect, useState } from "react";
import '../Styles/Contact.css'
import axios from "axios";

const Contact = () => {

    const [contact, setContact] = useState([])

useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
        const data = res.data
        setContact(data)
    })
    .catch(error => {
        console.log(error)
    })
},[])

    return (
        <div className="contact">
            <h1>Contacts</h1>
            <ul>
                {
                    contact.map(keys => <li key = {keys.id} >{keys.name}</li>)
                }
            </ul>
        </div>
    )
}

export default Contact