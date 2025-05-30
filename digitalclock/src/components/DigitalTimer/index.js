import React from 'react'
import './index.css'

class DigitalTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isRunning: false,
      timerLimit: 25,
      timeElapsedInSeconds: 0,
    }
    this.timerId = null
  }

  onStartPause = () => {
    const {isRunning} = this.state
    if (isRunning) {
      clearInterval(this.timerId)
    } else {
      this.timerId = setInterval(this.tick, 1000)
    }
    this.setState({isRunning: !isRunning})
  }

  tick = () => {
    const {timeElapsedInSeconds, timerLimit} = this.state
    const totalSeconds = timerLimit * 60
    if (timeElapsedInSeconds < totalSeconds) {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isRunning: false})
    }
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({
      isRunning: false,
      timeElapsedInSeconds: 0,
      timerLimit: 25,
    })
  }

  increment = () => {
    const {timerLimit, isRunning} = this.state
    if (!isRunning) {
      this.setState({timerLimit: timerLimit + 1})
    }
  }

  decrement = () => {
    const {timerLimit, isRunning} = this.state
    if (!isRunning && timerLimit > 1) {
      this.setState({timerLimit: timerLimit - 1})
    }
  }

  getTimerTime = () => {
    const {timerLimit, timeElapsedInSeconds} = this.state
    const totalRemaining = timerLimit * 60 - timeElapsedInSeconds
    const minutes = Math.floor(totalRemaining / 60)
    const seconds = totalRemaining % 60
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`
  }

  render() {
    const {isRunning, timerLimit} = this.state
    const timerText = isRunning ? 'Running' : 'Paused'
    const playPauseIcon = isRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const playPauseAlt = isRunning ? 'pause icon' : 'play icon'
    const playPauseText = isRunning ? 'Pause' : 'Start'

    return (
      <div className="app-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-container">
          <div className="timer-display">
            <div className="timer-circle">
              <h1 className="time">{this.getTimerTime()}</h1>
              <p className="status">{timerText}</p>
            </div>
          </div>

          <div className="timer-controls">
            <div className="controls-row">
              <button
                type="button"
                onClick={this.onStartPause}
                className="icon-btn"
              >
                <img src={playPauseIcon} alt={playPauseAlt} />
                <p>{playPauseText}</p>
              </button>

              <button type="button" onClick={this.onReset} className="icon-btn">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <p>Reset</p>
              </button>
            </div>

            <p className="limit-text">Set Timer limit</p>
            <div className="limit-controls">
              <button
                type="button"
                onClick={this.decrement}
                className="limit-btn"
              >
                -
              </button>
              <p className="limit-display">{timerLimit}</p>
              <button
                type="button"
                onClick={this.increment}
                className="limit-btn"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
