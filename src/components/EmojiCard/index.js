import './index.css'

const EmojiCard = props => {
  const {emojisList, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojisList

  const emojiClicked = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-list-items">
      <button className="emoji-button" type="button" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
