/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/ import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    isGameInProgress: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClick = id => {
    const {clickedEmojis, score, topScore} = this.state
    const {emojisList} = this.props

    if (clickedEmojis.includes(id)) {
      this.setState({
        isGameInProgress: false,
        topScore: Math.max(score, topScore),
      })
    } else {
      const updatedClickedEmojis = [...clickedEmojis, id]
      const updatedScore = score + 1

      if (updatedClickedEmojis.length === emojisList.length) {
        this.setState({
          clickedEmojis: updatedClickedEmojis,
          score: updatedScore,
          topScore: updatedScore,
          isGameInProgress: false,
        })
      } else {
        this.setState({
          clickedEmojis: updatedClickedEmojis,
          score: updatedScore,
        })
      }
    }
  }

  resetGame = () => {
    this.setState({
      clickedEmojis: [],
      score: 0,
      isGameInProgress: true,
    })
  }

  render() {
    const {score, topScore, isGameInProgress} = this.state
    const {emojisList} = this.props
    const shuffledEmojis = this.shuffledEmojisList()
    const isWon = score === emojisList.length

    return (
      <div className="emoji-game">
        <NavBar
          score={score}
          topScore={topScore}
          gameStatus={isGameInProgress}
        />

        <ul className="emoji-cards-container">
          {isGameInProgress ? (
            shuffledEmojis.map(emoji => (
              <EmojiCard
                key={emoji.id}
                emojiDetails={emoji}
                onClickEmoji={this.onEmojiClick}
              />
            ))
          ) : (
            <WinOrLoseCard
              isWon={isWon}
              score={score}
              onPlayAgain={this.resetGame}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
