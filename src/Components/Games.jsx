import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const birdSize = 20;
const gameWidth = 500;
const gameHeight = 500;
const gravity = 6;
const jumpHeight = 100;

function Games() {

    const [birdPosition, setBirdPosition] = useState(250)

    useEffect(() => {
        let timeId;
        if (birdPosition < gameHeight - birdSize) {
            timeId = setInterval(() => {
                setBirdPosition((birdPosition) => birdPosition + gravity)
            },24);
        }

        return () => {
            clearInterval(timeId)
        }
    })

    const handleClick = () => {
        let newBirdPosition = birdPosition - jumpHeight;
        setBirdPosition(newBirdPosition)
    }

    return (
        <Div onClick={handleClick}>
            <GameBox height={gameHeight} width={gameWidth} >
                <Bird size={birdSize} top={birdPosition}/>
            </GameBox>
        </Div>
    )
}

export default Games

const Bird = styled.div`
    position: absolute;
    background-color: red;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    top: ${(props) => props.top}px;
    border-radius: 50%;
`;

const Div = styled.div`
    display: flex;
    width 100%;
    justify-content: center;
`;

const GameBox = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: blue;
`