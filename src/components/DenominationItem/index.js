// Write your code here

import './index.css'

const DenominationItem = props => {
  const {withdrawItem, withdrawMoney} = props
  const {value} = withdrawItem

  const withdraw = () => {
    withdrawMoney(value)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
