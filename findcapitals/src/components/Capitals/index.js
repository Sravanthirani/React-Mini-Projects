import {Component} from 'react'
import './index.css'
import countryAndCapitalsList from '../../data/countryCapitals.js'

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCapital ? activeCapital.country : 'Unknown Country'
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry()

    return (
      <div className="outerContainer">
        <div className="contentContainer">
          <h1 className="title">🌍 Countries and Capitals 🌏</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(({id, capitalDisplayText}) => (
                <option key={id} value={id}>
                  {capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is the capital of which country? 🤔</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
