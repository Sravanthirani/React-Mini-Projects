import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      isRunning: false,
    }
    this.timerId = null
  }

  startTimer = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      this.setState({isRunning: true})
      this.timerId = setInterval(() => {
        this.setState(prevState => ({time: prevState.time + 1}))
      }, 1000)
    }
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({time: 0, isRunning: false})
  }

  formatTime = time => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (time % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  render() {
    const {time} = this.state

    return (
      <div className="app-bg">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <p className="label">Timer</p>
            <h1 className="time-display">{this.formatTime(time)}</h1>
            <div className="buttons">
              <button
                type="button"
                className="btn start"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stop"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
