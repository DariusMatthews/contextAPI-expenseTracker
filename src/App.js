import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Balance from './components/Balance.jsx';
import IncomeExp from './components/IncomeExp';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExp />
      </div>
    </div>
  );
}

export default App;
