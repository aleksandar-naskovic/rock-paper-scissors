import React, {useState, useEffect} from 'react';
import './App.css';
import Game from './components/Game'
import Result from './components/Result'
import Logo from './images/logo.svg'



function App() {
  const [playerChoice, setPlayerChoice] = useState("")
  const [houseChoice, setHouseChoice] = useState("")
  const [counter, setCounter] = useState(0)
  const [showResult, setShowResult] = useState(true)
  const [info, setInfo] = useState()

  const handleClick = (e) => {
    let playerChoice = e.target.name
    const game = ["rock", "paper", "scissors"]
    let houseChoice = game[Math.floor(Math.random() * game.length)]

    //check for a tie
    if (playerChoice === houseChoice) {
      setInfo("It's a tie")
    }
    else
    {
      // check for rock
      if(playerChoice === "rock") {
        if(houseChoice === "scissors"){
          setCounter(counter + 1)
          setInfo("You win")
        }
        else {
          setCounter(counter - 1)
          setInfo("You lose")
        }
      }

      // check for scissors
      if(playerChoice === "scissors") {
        if(houseChoice === "paper"){
          setCounter(counter + 1)
          setInfo("You win")
        }
        else {
          setCounter(counter - 1)
          setInfo("You lose")
        }
      }

      // check for rock
      if(playerChoice === "paper") {
        if(houseChoice === "rock"){
          setCounter(counter + 1)
          setInfo("You win")
        }
        else {
          setCounter(counter - 1)
          setInfo("You lose")
        }
      }
    }
    setShowResult(false)
    setPlayerChoice(playerChoice)
    setHouseChoice(houseChoice)
  }
    
  return (
    <div className="App">
      <div className="top-bar">
        <div className="logo"><img src={Logo} alt=""/></div>
        <div className="result">
          <p className="score">Score</p>
          <h3 className="score-counter">{counter}</h3>
        </div>
        
      </div>
      <div className="choice">
      {showResult ? 
      <Game handleClick={handleClick}/>
       : 
       <Result 
        houseChoice={houseChoice} 
        playerChoice={playerChoice} 
        setShowResult={setShowResult}
        playerImage={require(`./images/icon-${playerChoice}.svg`)}
        houseImage={require(`./images/icon-${houseChoice}.svg`)}
        setInfo={setInfo}
        info={info}
      />
      }
      </div>
      
      
      
    </div>
    
  );
}

export default App;
