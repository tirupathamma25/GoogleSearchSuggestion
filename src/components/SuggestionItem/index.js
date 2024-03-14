import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, clickedSuggestion} = props
  const {suggestion} = suggestionDetails
  const onClickArrow = () => {
    clickedSuggestion(suggestion)
  }
  return (
    <li className="list-item">
      <p className="paragraph">{suggestion}</p>
      <button type="button" className="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="search-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
