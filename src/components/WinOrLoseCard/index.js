import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, clickAndPlayAgain} = props
  const winOrLossImage = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const winOrLossStatus = isWon ? 'You Won' : 'You Lose'
  const winOrLossScore = isWon ? 'Best Score' : 'Score'

  return (
    <div className="score-card-container">
      <div className="score-description">
        <h1 className="score-head">{winOrLossStatus}</h1>
        <p className="score-para">{winOrLossScore}</p>
        <p className="score-value">{score}/12</p>
        <button
          className="play-button"
          type="button"
          onClick={clickAndPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src={winOrLossImage}
        className="win-or-lose-image"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
