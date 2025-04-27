import './index.css'

const AppItem = props => {
  const {name, imageUrl, appLink} = props

  return (
    <li className="app-item">
      <a
        href={appLink}
        target="_blank"
        rel="noopener noreferrer"
        className="app-link"
      >
        <img src={imageUrl} alt={name} className="app-icon" />
        <p className="app-name">{name}</p>
      </a>
    </li>
  )
}

export default AppItem
