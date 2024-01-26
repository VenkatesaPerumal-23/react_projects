import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, languageFilterClicked, active} = props
  const {language, id} = languageFiltersData
  const paraClassName = active ? 'language-with-border-para' : 'language-para'

  const isTabClicked = () => {
    languageFilterClicked(id)
  }

  return (
    <li className="language-list">
      <button className="language-button" type="button" onClick={isTabClicked}>
        <p className={paraClassName}>{language}</p>
      </button>
    </li>
  )
}

export default LanguageFilterItem
