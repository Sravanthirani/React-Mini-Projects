import './index.css'

const NavBar = props => {
  const {score, topScore, gameStatus} = props

  return (
    <nav className="navbar">
      <div className="side-side">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo">Emoji Game</h1>
      </div>
      {gameStatus && (
        <div className="scores side-side">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
