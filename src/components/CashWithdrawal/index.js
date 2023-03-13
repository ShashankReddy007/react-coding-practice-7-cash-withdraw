// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {money: 2000}

  withdrawMoney = value => {
    const {money} = this.state
    const {denominationsList} = this.props
    if (money >= value) {
      this.setState(prevState => ({
        money: Number(prevState.money) - value,
      }))
    }
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="container">
        <div className="card-container">
          <div className="name-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="para-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="para-1">Your Balance</p>
            <div className="money-container">
              <p className="para-2">{money}</p>
              <p className="para-3">in Rupees</p>
            </div>
          </div>
          <p className="para-5">Withdraw</p>
          <p className="para-4">CHOOSE SUM (IN RUPEES)</p>
          <ul className="withdraw-container">
            {denominationsList.map(item => (
              <DenominationItem
                withdrawItem={item}
                key={item.id}
                withdrawMoney={this.withdrawMoney}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
