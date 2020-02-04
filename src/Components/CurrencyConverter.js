import React, {Component} from 'react';
import CurrencyDisplay from './CurrencyDisplay';

const withCurrency = (BaseComponent) =>
	class Currency extends Component {
		state = {
			currencyChosen: false,
			selectedCurrency: 'Select Currency',
			amount: 0
        }
        
		handleAmountIncrease = () => {
			this.setState((prevState) => {
				return {
					amount: prevState.amount + 1
				}
			})
		}

		handleAmountDecrease = () => {
			this.setState((prevState) => {
				return {
					amount: prevState.amount - 1
				}
			})
        }
        
        handleOptionSelect = (e) => {
			const userValue = e.target.value
			this.setState(() => {
				return {
					selectedCurrency: userValue,
					currencyChosen: userValue === 'Select Currency' ? false : true
				}
			})
		}


        render (){
            const currencyData = [
                { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
                { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
                { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
                { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
                { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
            ]
        
            const currencyOptions = currencyData.map((curr, i) => (
                <option key={curr.id} 
                        value={i}>
                    {curr.name}
                </option>
            ))
            return (
                <div>
                    <select value={this.state.selectedCurrency}
                            onChange={this.handleOptionSelect}>
                            <option value='Select Currency'> Select Currency</option>
                            {currencyOptions}
                    </select>
                    <div>
                        <button className='minus' onClick={this.handleAmountDecrease}>-</button>
                        <button className='add' onClick={this.handleAmountIncrease}>+</button>
                    </div>
                    {this.state.currencyChosen ? (
                        <BaseComponent
                            currency={currencyData[this.state.selectedCurrency]}
                            amount={this.state.amount}
                        />
                    ) : (
                        <p>Please Select Currency</p>
                    )}
                </div>
            )
        }
    }

const ExchangeCurrency = withCurrency(CurrencyDisplay)

export default ExchangeCurrency;