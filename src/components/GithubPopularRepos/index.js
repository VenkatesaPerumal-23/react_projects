import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GithubPopularRepos extends Component {
  state = {
    languageId: languageFiltersData[0].id,
    apiStatus: apiStatusConstants.initial,
    languageList: [],
  }

  componentDidMount() {
    this.getLanguageDetails()
  }

  getLanguageDetails = async () => {
    const {languageId} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const githubReposApiUrl = `https://apis.ccbp.in/popular-repos?language=${languageId}`
    const response = await fetch(githubReposApiUrl)
    if (response.ok === true) {
      const data = await response.json()
      const newDataList = data.popular_repos.map(eachRepo => ({
        name: eachRepo.name,
        id: eachRepo.id,
        issuesCount: eachRepo.issues_count,
        forksCount: eachRepo.forks_count,
        starsCount: eachRepo.stars_count,
        avatarUrl: eachRepo.avatar_url,
      }))

      this.setState({
        languageList: newDataList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  languageFilterClicked = id => {
    this.setState({languageId: id}, this.getLanguageDetails)
  }

  renderSuccessCase = () => {
    const {languageList} = this.state

    return (
      <div className="repos-list">
        {languageList.map(eachLanguage => (
          <RepositoryItem
            repositoryDetails={eachLanguage}
            key={eachLanguage.id}
          />
        ))}
      </div>
    )
  }

  renderFailureCase = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-head">Something Went Wrong</h1>
    </div>
  )

  renderInProgressCase = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  switchFunction = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessCase()
      case apiStatusConstants.failure:
        return this.renderFailureCase()
      case apiStatusConstants.inProgress:
        return this.renderInProgressCase()
      default:
        return null
    }
  }

  render() {
    const {languageId} = this.state
    return (
      <div className="github-repos-container">
        <h1 className="head">Popular</h1>
        <ul className="language-filter-list">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              languageFiltersData={eachLanguage}
              key={eachLanguage.id}
              languageFilterClicked={this.languageFilterClicked}
              active={languageId === eachLanguage.id}
            />
          ))}
        </ul>

        {this.switchFunction()}
      </div>
    )
  }
}
export default GithubPopularRepos
