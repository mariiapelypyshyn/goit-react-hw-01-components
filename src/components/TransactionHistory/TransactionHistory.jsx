import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {

    const thStyles = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px',
    }
    
    return (<table className={css.transactionHistory}>
        <thead style={thStyles}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        
         <tbody>
        {items.map(({ id, type, amount, currency }) => {
    return (  
        <tr className={css.row} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            </tr>
        )
        
        })}
            </tbody>
     
    </table>

    )
}