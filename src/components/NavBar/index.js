import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInProgress} = props

  return (
    <nav className="navbar-container">
      <div className="emoji-row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-logo"
          alt="emoji logo"
        />
        <h1 className="emoji-head">Emoji Game</h1>
      </div>
      <div className="emoji-row">
        {isGameInProgress && (
          <div className="emoji-row">
            <p className="score-para">Score: {score}</p>
            <p className="top-score-para">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
