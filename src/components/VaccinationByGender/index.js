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
  state = {apiStatus: apiConstantsStatus.initial, genderRecords: []}

  componentDidMount() {
    this.getApiDetails()
  }

  getApiDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const coverageData = data.vaccination_by_gender.map(eachData => ({
        count: eachData.count,
        gender: eachData.gender,
      }))
      this.setState({
        genderRecords: coverageData,
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
    const {genderRecords} = this.state
    return (
      <div className="gender-container">
        <h1 className="vaccine-gender-para">Vaccination by gender</h1>
        <PieChart
          className="responsive-gender-container"
          width={1000}
          height={300}
        >
          <Pie
            cx="50%"
            cy="50%"
            data={genderRecords}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
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
