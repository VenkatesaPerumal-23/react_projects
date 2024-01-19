import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teams} = props
  const {name, teamImageUrl, id} = teams

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-card">
        <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
        <p className="each-team-head">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
