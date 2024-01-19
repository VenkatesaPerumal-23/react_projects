import './index.css'

const MatchCard = props => {
  const {recentMatches} = props

  const newRecentMatches = {
    competingTeamLogo: recentMatches.competing_team_logo,
    competingTeam: recentMatches.competing_team,
    result: recentMatches.result,
    matchStatus: recentMatches.match_status,
  }

  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = newRecentMatches

  return (
    <div className="match-card">
      <img
        src={competingTeamLogo}
        className="comp-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      {matchStatus === 'Won' ? (
        <p className="match-status-won">{matchStatus}</p>
      ) : (
        <p className="match-status-lost">{matchStatus}</p>
      )}
    </div>
  )
}

export default MatchCard
