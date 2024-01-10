import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], topScore: 0, isGameInProgress: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickAndPlayAgain = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  clickEmoji = id => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  playEmojiGame = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojisList={eachEmoji}
            key={eachEmoji.id}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = 0
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  showScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = emojisList.length === clickedEmojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        clickAndPlayAgain={this.clickAndPlayAgain}
      />
    )
  }

  render() {
    const {clickedEmojisList, topScore, isGameInProgress} = this.state
    return (
      <div className="bg-container">
        <NavBar
          score={clickedEmojisList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />

        <div className="emoji-game">
          {isGameInProgress ? this.playEmojiGame() : this.showScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
