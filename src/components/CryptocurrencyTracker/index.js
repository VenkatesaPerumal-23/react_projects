import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoDataApi()
  }

  getCryptoDataApi = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const newData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))

    this.setState({cryptoData: newData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoData={cryptoData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
