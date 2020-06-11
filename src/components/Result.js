import React, {useEffect} from 'react'






function Result({playerChoice, houseChoice, setShowResult, playerImage, houseImage, setInfo, info}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResult(true)
      setInfo()
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <div>
      <div class="winner">
        <div className="player-winner">
          <h3>You picked</h3>
          <input  className={playerChoice} type="image" src={playerImage} onclick="return false;" />
        </div>
        <div class="house-winner">
          <h3>House picked</h3>
          <input  className={houseChoice} type="image" src={houseImage} onclick="return false;" />
        </div>
      </div>
      <p class="final-result">{info}</p>
    </div>
  )

}

export default Result