import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const newLatestMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = newLatestMatchDetails

  return (
    <div className="latest-match">
      <div>
        <p className="competing-team-para">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
      </div>

      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />

      <div>
        <p className="first-innings-para">First Innings</p>
        <p className="first-innings">{firstInnings}</p>
        <p className="second-innings-para">Second Innings</p>
        <p className="second-innings">{secondInnings}</p>
        <p className="man-of-the-match-para">Man Of The Match</p>
        <p className="man-of-the-match">{manOfTheMatch}</p>
        <p className="umpires">{umpires}</p>
        <p className="result">{result}</p>
      </div>
    </div>
  )
}

export default LatestMatch
