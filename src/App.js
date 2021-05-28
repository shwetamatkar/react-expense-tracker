import React from 'react';
import './App1.css';
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { TransactionList } from './components/TransactionList.js';
import { AddTransaction } from './components/AddTransaction.js';

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider >
      <div className="tracker-body">
        <Header />
        <div className="container">
          <Balance />
          <AddTransaction />
          <TransactionList />
        </div>

      </div>
    </GlobalProvider>
  );
}

export default App;
