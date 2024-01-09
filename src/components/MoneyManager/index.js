import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  titleChange = event => {
    this.setState({titleInput: event.target.value})
  }

  amountChange = event => {
    this.setState({amountInput: event.target.value})
  }

  optionChange = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const transactionTypeToDisplay = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = transactionTypeToDisplay
    const newTransaction = {
      id: uuidv4(),
      titleInput,
      amountInput: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncomeAmount = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amountInput
      }
    })
    return incomeAmount
  }

  getExpenseAmount = () => {
    const {transactionsList} = this.state
    let expenseAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachTransaction.amountInput
      }
    })
    return expenseAmount
  }

  getBalanceAmount = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    let expenseAmount = 0
    let balanceAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amountInput
      } else {
        expenseAmount += eachTransaction.amountInput
      }
    })
    balanceAmount = incomeAmount - expenseAmount

    return balanceAmount
  }

  onDelete = id => {
    const {transactionsList} = this.state
    const filteredTransactionsList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionsList: filteredTransactionsList})
  }

  render() {
    const {titleInput, amountInput, transactionsList} = this.state
    const incomeAmount = this.getIncomeAmount()
    const expenseAmount = this.getExpenseAmount()
    const balanceAmount = this.getBalanceAmount()

    return (
      <div className="bg-container">
        <div className="money-manager">
          <h1 className="head">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <ul className="money-list-items">
          <MoneyDetails
            incomeAmount={incomeAmount}
            expenseAmount={expenseAmount}
            balanceAmount={balanceAmount}
          />
        </ul>

        <div className="transaction-container">
          <form
            className="transaction-form-container"
            onSubmit={this.onAddTransaction}
          >
            <h1 className="form-head">Add Transaction</h1>
            <label htmlFor="title" className="label">
              TITLE
            </label>
            <br />
            <input
              type="text"
              className="input"
              id="title"
              placeholder="TITLE"
              value={titleInput}
              onChange={this.titleChange}
            />
            <label htmlFor="amount" className="label">
              AMOUNT
            </label>
            <br />
            <input
              type="text"
              className="input"
              id="amount"
              placeholder="AMOUNT"
              value={amountInput}
              onChange={this.amountChange}
            />
            <label htmlFor="type" className="label">
              TYPE
            </label>
            <br />
            <select
              name="category"
              id="category"
              className="input"
              onChange={this.optionChange}
            >
              {transactionTypeOptions.map(eachTransaction => (
                <option
                  key={eachTransaction.optionId}
                  value={eachTransaction.optionId}
                  className="option-value"
                >
                  {eachTransaction.displayText}
                </option>
              ))}
            </select>
            <button className="submit-button" type="submit">
              Add
            </button>
          </form>

          <div className="history-container">
            <h1 className="history-head">History</h1>
            <div className="history-type-container">
              <div className="row">
                <p className="history-para">Title</p>
                <p className="history-para">Amount</p>
                <p className="history-para">Type</p>
              </div>

              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  transactionsList={eachTransaction}
                  key={eachTransaction.id}
                  onDelete={this.onDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
