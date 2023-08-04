

const CurrencySelector = ({ currency, setCurrency }) => {
   
    return (
        <select onChange={evt => setCurrency(evt.target.value)} value={currency}>
            <option value="AUD">Australian Dollar</option>
            <option value="EUR">Euro</option>
            <option value="TRY">Turkish Lira</option>
            <option value="COP">Colombian Peso</option>
        </select>
    )
}

export default CurrencySelector