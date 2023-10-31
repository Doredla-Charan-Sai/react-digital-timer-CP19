// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {minutes: 25, seconds: 60, running: false}
  }

  // eslint-disable-next-line camelcase
  componentWillMount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timerId)

  onStartTimer = () => {
    console.log('Started Timer')
    this.setState(prevState => ({running: !prevState.running}))
    this.timerId = setInterval(() => {
      this.setState(
        prevState =>
          prevState.running === true && {
            seconds: prevState.seconds === 0 ? 60 : prevState.seconds - 1,
            minutes:
              prevState.seconds === 0
                ? prevState.minutes - 1
                : prevState.minutes,
          },
      )
    }, 1000)
  }

  onPauseTimer = () => {
    this.clearTimerInterval()
    this.setState(prevState => ({running: !prevState.running}))
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({minutes: 25, seconds: 60, running: false})
  }

  decreaseTimer = () => {
    const {running} = this.state
    if (running === false) {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        seconds: 60,
      }))
    }
  }

  increaseTimer = () => {
    const {running} = this.state
    if (running === false) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 60,
      }))
    }
  }

  render() {
    const {minutes, seconds, running} = this.state
    console.log(minutes, seconds)
    return (
      <div className="bg-cont">
        <h1 className="main-head">Digital Timer</h1>
        <div className="content-cont">
          <div className="img-cont">
            <div className="cont">
              <h1 className="time">
                {minutes}:{seconds === 60 && '00'}
                {seconds < 10 && `0${seconds}`}
                {seconds >= 10 && seconds !== 60 && seconds}
              </h1>
              <p className="pause-text">
                {running === true ? 'Running' : 'Paused'}
              </p>
            </div>
          </div>
          <div className="text-cont">
            <div className="icon-text-cont">
              {running === false && (
                <div className="icon-text-cont">
                  <button
                    className="icon-btn"
                    type="button"
                    onClick={this.onStartTimer}
                  >
                    <img
                      className="icon"
                      src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                      alt="play icon"
                    />
                  </button>
                  <p className="icon-text">Start</p>
                </div>
              )}
              {!running === false && (
                <div className="icon-text-cont">
                  <button
                    className="icon-btn"
                    type="button"
                    onClick={this.onPauseTimer}
                  >
                    <img
                      className="icon"
                      src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                      alt="pause icon"
                    />
                  </button>
                  <p className="icon-text">Pause</p>
                </div>
              )}
              <div className="icon-text-cont">
                <button
                  className="icon-btn"
                  type="button"
                  onClick={this.onResetTimer}
                >
                  <img
                    className="icon"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                  />
                </button>
                <p className="icon-text">Reset</p>
              </div>
            </div>
            <p className="description">Set Timer Limit</p>
            <div className="icon-text-cont">
              <button
                type="button"
                className="icon-btn"
                onClick={this.decreaseTimer}
              >
                -
              </button>
              <p className="value-set text-cont">{minutes}</p>
              <button
                type="button"
                className="icon-btn"
                onClick={this.increaseTimer}
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
