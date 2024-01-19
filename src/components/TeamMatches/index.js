import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: [], isLoading: true, backgroundId: ''}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({backgroundId: id})
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const newData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamDetails: newData, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading, backgroundId} = this.state
    const {teamBannerUrl} = teamDetails
    const {latestMatchDetails} = teamDetails
    const {recentMatches} = teamDetails
    return (
      <div className={`team-match-container ${backgroundId}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team-banner"
              className="team-banner"
            />
            <p className="latest-match-para">Latest Matches</p>
            <div className="latest-match-container">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>

            <div className="recent-match-container">
              {recentMatches.map(eachMatch => (
                <MatchCard recentMatches={eachMatch} key={eachMatch.id} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
