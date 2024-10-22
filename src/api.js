import axios from 'axios';

const API_URL = 'http://localhost:3000/transactions'; // Adjust according to your API

export const getTransactions = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTransaction = async (transaction) => {
    const response = await axios.post(API_URL, transaction);
    return response.data;
};

export const updateTransaction = async (id, transaction) => {
    const response = await axios.put(`${API_URL}/${id}`, transaction);
    return response.data;
};

export const deleteTransaction = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const getSummary = async () => {
    const response = await axios.get('http://localhost:3000/summary'); // Adjust according to your API
    return response.data;
};
