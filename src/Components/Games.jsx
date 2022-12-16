import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const birdSize = 30;
const gameWidth = 500;
const gameHeight = 500;
const gravity = 6;
const jumpHeight = 80;
const obstacleWidth = 40;
const obstacleGap = 200;

function Games() {

    const [birdPosition, setBirdPosition] = useState(200)
    const [gameHasStarted, setGameHasStarted] = useState(false)
    const [obstacleHeight, setObstacleHeight] = useState(200)
    const [obstacleLeft, setobstacleLeft] = useState(gameWidth - obstacleWidth)
    const [score, setScore] = useState(0)

    const bottomObstacleHeight = gameHeight - obstacleGap -obstacleHeight;

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

    useEffect(() => {
        let obstacleId;
        if (gameHasStarted && obstacleLeft >= -obstacleWidth) {
            obstacleId = setInterval(() => {
                setobstacleLeft((obstacleLeft) => obstacleLeft - 3)
            }, 24)

            return () => {
                clearInterval((obstacleId))
            }
        } else {
            setobstacleLeft(gameWidth - obstacleWidth)
            setObstacleHeight(Math.floor(Math.random() * (gameHeight - obstacleGap)))
        }
        // setScore(score => score++)
    })

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
            <GameBox height={gameHeight} width={gameWidth}>
                <Obstacle
                    top={0}
                    width={obstacleWidth}
                    height={obstacleHeight}
                    left={obstacleLeft}
                />
                <Bird size={birdSize} top={birdPosition}/>
                <Obstacle
                    top={gameHeight - (obstacleHeight + bottomObstacleHeight)}
                    width={obstacleWidth}
                    height={bottomObstacleHeight}
                    left={obstacleLeft}
                />
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
    overflow: hidden;
`

const Obstacle = styled.div`
    position: relative;
    top: ${(props) => props.top}px;
    background-color: green;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    left: ${(props) => props.left}px;
`