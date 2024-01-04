import './index.css'

const TabItem = props => {
  const {tabDetails, isActiveTab, active} = props
  const {displayText, tabId} = tabDetails
  const activeClassName = active ? 'active-tab-btn' : ''

  const isTabClicked = () => {
    isActiveTab(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={isTabClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
