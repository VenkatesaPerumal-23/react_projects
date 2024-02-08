import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <h1 className="home-head">Find The Job That Fits Your Life</h1>
    <p className="home-para">
      Millions of people are searching for jobs, salary information, company
      reviews. Find the job that fits your abilities and potential
    </p>
    <Link to="/jobs">
      <button className="jobs-open-button" type="button">
        Find Jobs
      </button>
    </Link>
  </div>
)

export default Home
