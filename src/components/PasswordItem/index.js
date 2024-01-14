import './index.css'

const PasswordItem = props => {
  const {userPasswordList, showMaskedPasswordImage, onDeletePassword} = props
  const {
    websiteInput,
    usernameInput,
    passwordInput,
    initialBackgroundColor,
    id,
  } = userPasswordList
  const initial = websiteInput.slice(0, 1)
  const initialUpperCase = initial.toUpperCase()

  const deleteButtonClicked = () => {
    onDeletePassword(id)
  }

  return (
    <li className="password-view-container">
      <div className={`initial-container ${initialBackgroundColor}`}>
        {initialUpperCase}
      </div>
      <div>
        <p className="website-para">{websiteInput}</p>
        <p className="username-para">{usernameInput}</p>
        {showMaskedPasswordImage ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        ) : (
          <p className="password-input">{passwordInput}</p>
        )}
      </div>
      <button
        className="delete-button"
        type="button"
        data-testid="delete"
        onClick={deleteButtonClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
