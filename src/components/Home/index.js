import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const newData = teams.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))

    this.setState({teams: newData, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="ipl-head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-head">IPL Dashboard</h1>
        </div>

        <div className="teams-card-container">
          {isLoading ? (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teams.map(eachTeam => (
              <TeamCard teams={eachTeam} key={eachTeam.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
