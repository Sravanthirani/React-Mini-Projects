import './index.css'

const TabItem = ({tabId, displayText, changeTab, isActive}) => {
  const onClickTab = () => {
    changeTab(tabId)
  }

  return (
    <li
      className={`listTabs ${isActive ? 'active-tab' : ''}`}
      onClick={onClickTab}
    >
      {displayText}
    </li>
  )
}

export default TabItem
