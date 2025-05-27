import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const handleClick = () => {
    onClickEmoji(id)
  }

  return (
    <li className="liststyling">
      <button type="button" className="emoji-card" onClick={handleClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
