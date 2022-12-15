import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../Styles/Fetch.css'

function Fetch() {

    const [name, setName] = useState("")
    const [predictAge, setPredictedAge] = useState(null)

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setPredictedAge(res.data)
        })
    }

    return (
        <div className='fetch'>
            <h1>Fetch Some Data</h1>

            <input 
                placeholder='Type a name...' 
                onChange={(event) => {
                    setName(event.target.value);
                }}
            /> 
            <br />
            <button onClick={fetchData}>Predict Age</button>

            <h2> Name: {predictAge?.name}</h2>
            <h2> Age: {predictAge?.age}</h2>
            <h2> Count: {predictAge?.count}</h2>

        </div>
    )
}

export default Fetch