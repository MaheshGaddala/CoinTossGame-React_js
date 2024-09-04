// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    URL: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onFlipCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const URL =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    if (tossResult === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        URL,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        URL,
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, URL} = this.state

    const count = headsCount + tailsCount
    console.log(URL)

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={URL} alt="toss result" className="coin-image" />
          <button className="button" type="button" onClick={this.onFlipCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {count}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
