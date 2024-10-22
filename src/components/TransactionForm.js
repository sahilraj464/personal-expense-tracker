import React, { useState } from 'react';
import { addTransaction } from '../api';

const TransactionForm = ({ onTransactionAdded }) => {
    const [type, setType] = useState('expense');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = { type, category, amount: parseFloat(amount), date, description };
        const newTransaction = await addTransaction(transaction);
        onTransactionAdded(newTransaction);
        setType('expense');
        setCategory('');
        setAmount('');
        setDate('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
