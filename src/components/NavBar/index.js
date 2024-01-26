import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, timerInterval} = this.props
    return (
      <div>
        <nav className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="score-container">
            <p className="score-para">
              score: <span className="span">{score}</span>
            </p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            <p className="timer-para">{timerInterval} sec</p>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
