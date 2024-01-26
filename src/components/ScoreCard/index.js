import './index.css'

const ScoreCard = props => {
  const {score, playAgainButton} = props
  return (
    <div className="scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="score-para">YOUR SCORE</p>
      <p className="score-value">{score}</p>
      <button
        type="button"
        className="play-again-button"
        onClick={playAgainButton}
      >
        <div className="button-row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset"
          />
          <p className="play-again-para">PLAY AGAIN</p>
        </div>
      </button>
    </div>
  )
}

export default ScoreCard
