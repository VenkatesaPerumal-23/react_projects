import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from './components/PasswordItem'
import './App.css'

const randomColorBackgroundColors = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class App extends Component {
  state = {
    userPasswordList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    showMaskedPasswordImage: true,
  }

  addWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  addUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  addPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const backgroundColorNames =
      randomColorBackgroundColors[
        Math.ceil(Math.random() * randomColorBackgroundColors.length - 1)
      ]
    const newUserPasswordList = {
      id: uuidv4(),
      websiteInput,
      usernameInput,
      passwordInput,
      showMaskedPasswordImage: true,
      initialBackgroundColor: backgroundColorNames,
    }
    this.setState(prevState => ({
      userPasswordList: [...prevState.userPasswordList, newUserPasswordList],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  toggleCheckbox = () => {
    this.setState(prevState => {
      const {showMaskedPasswordImage} = prevState
      this.setState({showMaskedPasswordImage: !showMaskedPasswordImage})
    })
  }

  onDeletePassword = id => {
    const {userPasswordList} = this.state
    const deletedPasswordList = userPasswordList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({userPasswordList: deletedPasswordList})
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      userPasswordList,
      searchInput,
      showMaskedPasswordImage,
    } = this.state
    const userPasswordListLength = userPasswordList.length
    const filteredPasswordList = userPasswordList.filter(each =>
      each.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="password-manager-logo"
        />
        <div className="password-enter-container">
          <form className="password-form-container" onSubmit={this.onAdd}>
            <h1 className="head">Add New Password</h1>
            <div className="form-row">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="field-icon"
              />
              <hr className="hr" />
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                onChange={this.addWebsite}
                value={websiteInput}
              />
            </div>

            <div className="form-row">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="field-icon"
              />
              <hr className="hr" />
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                onChange={this.addUsername}
                value={usernameInput}
              />
            </div>

            <div className="form-row">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="field-icon"
              />
              <hr className="hr" />
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                onChange={this.addPassword}
                value={passwordInput}
              />
            </div>

            <button className="submit-button" type="submit">
              Add
            </button>
          </form>
          <div className="password-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-image"
            />
          </div>
        </div>

        <div className="password-manager-container">
          <div className="password-top-section">
            <div className="password-row">
              <h1 className="your-password">Your Passwords</h1>
              <div className="password-count">
                <p>{userPasswordListLength}</p>
              </div>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <hr className="search-hr" />
              <input
                type="search"
                placeholder="Search"
                className="search"
                onChange={this.onSearchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="long-hr" />
          <div className="checkbox-container">
            <button
              className="checkbox-button"
              type="button"
              label="arial-label"
              onClick={this.toggleCheckbox}
            >
              <input type="checkbox" className="checkbox" id="check" />
            </button>
            <label htmlFor="check" className="checkbox-para">
              Show passwords
            </label>
          </div>

          {filteredPasswordList.length === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password"
              />
              <p className="no-password-text">No Passwords</p>
            </div>
          ) : (
            <ul className="password-list-container">
              {filteredPasswordList.map(eachPassword => (
                <PasswordItem
                  userPasswordList={eachPassword}
                  key={eachPassword.id}
                  showMaskedPasswordImage={showMaskedPasswordImage}
                  onDeletePassword={this.onDeletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
