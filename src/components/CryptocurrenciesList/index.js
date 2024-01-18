import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoData} = this.props
    return (
      <div className="crypto-list-container">
        <h1 className="crypto-head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        <div className="crypto-table">
          <div className="list-item">
            <p className="coin-type">Coin Type</p>
            <div className="list-row">
              <p className="usd-para">USD</p>
              <p className="euro-para">EURO</p>
            </div>
          </div>
          <ul className="crypto-list">
            {cryptoData.map(eachData => (
              <CryptocurrencyItem cryptoData={eachData} key={eachData.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
