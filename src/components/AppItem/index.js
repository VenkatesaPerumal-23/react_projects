import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="apps-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
