import React, { useState } from "react";
import '../Styles/Contact.css'
import axios from "axios";

const Contact = () => {

    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
        const data = res.data
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

    return (
        <div className="contact">
            <h1>Contacts</h1>
        </div>
    )
}

export default Contact