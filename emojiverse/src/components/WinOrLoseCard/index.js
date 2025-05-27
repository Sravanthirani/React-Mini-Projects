import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onPlayAgain} = props
  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="result-card">
      <div className="text-section">
        <h1 className="result-text">{resultText}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button type="button" className="play-again-btn" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard
