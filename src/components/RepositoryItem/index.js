import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryDetails

  return (
    <div className="each-repo-container">
      <img src={avatarUrl} className="repo-image" alt={name} />
      <h1 className="repo-head">{name}</h1>
      <div className="repo-row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="repo-icons"
          alt="stars"
        />
        <p className="repo-stars-para">{starsCount} stars</p>
      </div>
      <div className="repo-row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="repo-icons"
          alt="forks"
        />
        <p className="repo-forks-para">{forksCount} forks</p>
      </div>
      <div className="repo-row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="repo-icons"
          alt="open issues"
        />
        <p className="repo-issues-para">{issuesCount} open issues</p>
      </div>
    </div>
  )
}

export default RepositoryItem
