import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const apiConstantsStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class VaccinationCoverage extends Component {
  state = {apiStatus: apiConstantsStatus.initial, coverageRecords: []}

  componentDidMount() {
    this.getApiDetails()
  }

  getApiDetails = async () => {
    this.setState({apiStatus: apiConstantsStatus.inProgress})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const coverageData = data.last_7_days_vaccination.map(eachData => ({
        vaccineDate: eachData.vaccine_date,
        dose1: eachData.dose_1,
        dose2: eachData.dose_2,
      }))
      this.setState({
        coverageRecords: coverageData,
        apiStatus: apiConstantsStatus.success,
      })
    } else {
      this.setState({apiStatus: apiConstantsStatus.failure})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  renderSuccess = () => {
    const {coverageRecords} = this.state
    return (
      <div className="coverage-container">
        <h1 className="vaccine-coverage-para">Vaccination Coverage</h1>
        <BarChart
          data={coverageRecords}
          margin={{
            top: 5,
            bottom: 40,
          }}
          width={1000}
          height={300}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={this.DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="10%" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="10%" />
        </BarChart>
      </div>
    )
  }

  renderFailure = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-para">Something went wrong</h1>
    </div>
  )

  renderSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstantsStatus.success:
        return this.renderSuccess()
      case apiConstantsStatus.failure:
        return this.renderFailure()
      case apiConstantsStatus.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderSwitch()}</>
  }
}

export default VaccinationCoverage
