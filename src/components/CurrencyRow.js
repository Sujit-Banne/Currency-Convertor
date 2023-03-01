import React from 'react'

function CurrencyRow(props) {
    const {
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props
    return (
        <div>
            <input type="number" className='input' value={amount.toString()} onChange={onChangeAmount} />
            <select value={selectCurrency}
                onChange={onChangeCurrency}
            >
                {
                    currencyOptions.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                    ))
                }

            </select>
        </div>
    )
}

export default CurrencyRow
