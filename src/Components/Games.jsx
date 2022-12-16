import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const birdSize = 30;
const gameWidth = 500;
const gameHeight = 500;
const gravity = 6;
const jumpHeight = 80;

function Games() {

    const [birdPosition, setBirdPosition] = useState(200)
    const [gameHasStarted, setGameHasStarted] = useState(false)

    useEffect(() => {
        let timeId;
        if (gameHasStarted && birdPosition < gameHeight - birdSize) {
            timeId = setInterval(() => {
                setBirdPosition((birdPosition) => birdPosition + gravity)
            }, 24);
        }

        return () => {
            clearInterval(timeId)
        }
    }, [birdPosition, gameHasStarted])

    const handleClick = () => {
        let newBirdPosition = birdPosition - jumpHeight;
        if (!gameHasStarted){
            setGameHasStarted(true);
        } else if (newBirdPosition < 0) {
            newBirdPosition(0)
        } else {
            setBirdPosition(newBirdPosition)
        }
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
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
`;

const GameBox = styled.div`
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: blue;
`