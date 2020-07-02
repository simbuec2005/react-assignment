import React from 'react';
import CustomerContainer from './containers/CustomerContainer';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Customer Information</h1>
      <CustomerContainer />
    </div>
  );
}

export default App;
