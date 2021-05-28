import React from 'react';

export const Transaction = ({transaction}) => {

    return (
        <li className={ transaction.amount < 0? 'minus' : 'plus'}>
            {transaction.text} <span> Rs. {Math.abs(transaction.amount)}  </span>
        </li>
    )
}
