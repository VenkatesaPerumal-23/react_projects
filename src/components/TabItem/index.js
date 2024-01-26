import './index.css'

const TabItem = props => {
  const {tabsList, onClickTab, active} = props
  const {tabId, displayText} = tabsList

  const tabClassName = active ? 'active-tab-button' : 'tab-button'

  const tabItemClicked = () => {
    onClickTab(tabId)
  }

  return (
    <li className="list-items">
      <button
        type="button"
        className={`tab-button ${tabClassName}`}
        onClick={tabItemClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
