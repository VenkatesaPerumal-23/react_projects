import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const CowinDashboard = () => (
  <div className="cowin-container">
    <div className="dashboard-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          className="logo"
          alt="website logo"
        />
        <p className="logo-head">Co-WIN</p>
      </div>
      <h1 className="cowin-head">CoWIN Vaccination in India</h1>
      <VaccinationCoverage />
      <VaccinationByGender />
      <VaccinationByAge />
    </div>
  </div>
)

export default CowinDashboard
