import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Initial state

const initialState = {
    transactions: [ ],
    balance: 0 
};

// create context

export const GlobalContext = createContext(initialState);

// provider compnent

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions 

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    
    function updateBalance(){
        dispatch({
            type: 'UPDATE_BALANCE'
        });
    }

    return (
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            balance: state.balance,
            addTransaction,
            updateBalance
             }}>
            {children}
        </GlobalContext.Provider>
    );
}