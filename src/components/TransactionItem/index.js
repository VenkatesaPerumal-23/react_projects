import './index.css'

const TransactionItem = props => {
  const {transactionsList, onDelete} = props
  const {titleInput, amountInput, type, id} = transactionsList

  const DeleteClicked = () => {
    onDelete(id)
  }

  return (
    <li className="each-list">
      <p className="each-para">{titleInput}</p>
      <p className="each-para">{amountInput}</p>
      <p className="each-para">{type}</p>
      <button
        className="delete-button"
        type="button"
        onClick={DeleteClicked}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
