import React, { useEffect, useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import { getTransactions } from './api';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        const data = await getTransactions();
        setTransactions(data);
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    const handleTransactionAdded = (newTransaction) => {
        setTransactions((prev) => [...prev, newTransaction]);
    };

    const handleTransactionDeleted = (id) => {
        setTransactions((prev) => prev.filter(transaction => transaction.id !== id));
    };

    return (
        <div>
            <h1>Personal Expense Tracker</h1>
            <TransactionForm onTransactionAdded={handleTransactionAdded} />
            <TransactionList transactions={transactions} onTransactionDeleted={handleTransactionDeleted} />
            <Summary />
        </div>
    );
};

export default App;
