import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onreset = () => {
    this.setState({
      headsCount: 0,
      tailsCount: 0,
    })
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    const tossImage = toss === 0 ? HEADS_IMG_URL : TAILS_IMG_URL
    const latestHeadsCount = headsCount + (toss === 0 ? 1 : 0)
    const latestTailsCount = tailsCount + (toss === 1 ? 1 : 0)

    // Get the image element
    const coinImage = document.getElementById('coin-image')

    // Add the flip animation class
    coinImage.classList.add('flip-animation')

    // Remove the animation class after the animation completes
    setTimeout(() => {
      this.setState({
        tossResultImage: tossImage,
        headsCount: latestHeadsCount,
        tailsCount: latestTailsCount,
      })

      coinImage.classList.remove('flip-animation')
    }, 600) // Match the CSS animation duration
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            id="coin-image"
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />

          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
          <button type="button" className="button2" onClick={this.onreset}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default CoinToss
