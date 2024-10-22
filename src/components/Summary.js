import React, { useEffect, useState } from 'react';
import { getSummary } from '../api';

const Summary = () => {
    const [summary, setSummary] = useState({ totalIncome: 0, totalExpenses: 0, balance: 0 });

    useEffect(() => {
        const fetchSummary = async () => {
            const data = await getSummary();
            setSummary(data);
        };
        fetchSummary();
    }, []);

    return (
        <div>
            <h2>Summary</h2>
            <p>Total Income: ${summary.totalIncome}</p>
            <p>Total Expenses: ${summary.totalExpenses}</p>
            <p>Balance: ${summary.balance}</p>
        </div>
    );
};

export default Summary;
