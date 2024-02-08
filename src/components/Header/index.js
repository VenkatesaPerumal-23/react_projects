import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsFillHouseFill, BsBriefcaseFill, BsBoxArrowRight} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="navbar-container">
      <Link to="/" className="link-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          className="navbar-logo"
          alt="website logo"
        />
      </Link>

      <div className="link-navbar-desktop">
        <Link to="/" className="link-item">
          <p className="navbar-para">Home</p>
        </Link>
        <Link to="/jobs" className="link-item">
          <p className="navbar-para">Jobs</p>
        </Link>
      </div>

      <button
        className="logout-button-desktop"
        type="button"
        onClick={onClickLogout}
      >
        Logout
      </button>

      <div className="link-navbar-mobile">
        <Link to="/" className="link-item">
          <BsFillHouseFill size={25} className="home-icon" />
        </Link>

        <Link to="/jobs" className="link-item">
          <BsBriefcaseFill size={25} className="job-icon" />
        </Link>

        <button
          type="button"
          className="nav-mobile-btn"
          onClick={onClickLogout}
          label="aria-label"
        >
          <BsBoxArrowRight size={25} className="exit-icon" />
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
