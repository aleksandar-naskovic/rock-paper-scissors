import React from 'react'
import rockImg from './../images/icon-rock.svg'
import paperImg from './../images/icon-paper.svg'
import scissorsImg from './../images/icon-scissors.svg'

function Game({handleClick}) {
  return (
    
    <div>
        <input  className="rock" type="image" src={rockImg} onClick={handleClick} name="rock"/>
        <input  className="paper" type="image" src={paperImg} onClick={handleClick} name="paper"/>
        <input  className="scissors" type="image" src={scissorsImg} onClick={handleClick} name="scissors"/>
    </div>
  )

}

export default Game