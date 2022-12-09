import React from 'react'
import { useState } from 'react'
import '../Styles/MainPage.css'

function MainPage() {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(count => count + 1)
    }

    const decrease = () => {
        if ( counter > 0 ) {
            setCounter(count => count - 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <div className='mainPage'>
            <h1>Welcome Home</h1>
            <h2>Counter</h2>
            <span className="output">{ counter }</span>
            <div className="btnContainer">
                <button onClick={ increase }>+</button>
                <button onClick={ decrease }>-</button>
                <button onClick={ reset }>reset</button>
            </div>
        </div>
    )
}

export default MainPage