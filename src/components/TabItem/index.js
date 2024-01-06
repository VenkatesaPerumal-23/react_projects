import './index.css'

const TabItem = props => {
  const {tabsList, clickTabItem, active} = props
  const {displayText, tabId} = tabsList

  const activeTabItem = () => {
    clickTabItem(tabId)
  }

  const tabClassName = active ? 'active-tab' : 'button'
  return (
    <li className="tabs-list">
      <button
        className={`button ${tabClassName}`}
        type="button"
        onClick={activeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
