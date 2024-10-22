import React from 'react';
import { deleteTransaction } from '../api';

const TransactionList = ({ transactions, onTransactionDeleted }) => {
    const handleDelete = async (id) => {
        await deleteTransaction(id);
        onTransactionDeleted(id);
    };

    return (
        <ul>
            {transactions.map((transaction) => (
                <li key={transaction.id}>
                    {transaction.date} - {transaction.category}: ${transaction.amount} ({transaction.type})
                    <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TransactionList;
