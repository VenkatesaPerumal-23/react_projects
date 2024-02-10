import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const apiConstantsStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class VaccinationByGender extends Component {
  state = {apiStatus: apiConstantsStatus.initial, ageRecords: []}

  componentDidMount() {
    this.getApiDetails()
  }

  getApiDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const coverageData = data.vaccination_by_age.map(eachData => ({
        age: eachData.age,
        count: eachData.count,
      }))
      this.setState({
        ageRecords: coverageData,
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

  renderSuccess = () => {
    const {ageRecords} = this.state
    return (
      <div className="age-container">
        <h1 className="vaccine-age-para">Vaccination by age</h1>
        <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="50%"
            data={ageRecords}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="50%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill=" #a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            horizontalAlign="middle"
            align="center"
          />
        </PieChart>
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

export default VaccinationByGender
