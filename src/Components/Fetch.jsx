import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../Styles/Fetch.css'

function Fetch() {
    const [quote, setQuote] = useState("")

    const fetchQuote = () => {
        Axios.get("https://api.kanye.rest/").then((res) => {
            setQuote(res.data.quote)
        })
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return (
        <div className='fetch'>
            <h1>Fetch Some Data</h1>
            <button onClick={fetchQuote}>Kanye West</button>
            <p> {quote} </p>
        </div>
    )
}

export default Fetch