/** @format */

import React, { useState, MouseEvent } from 'react';

import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className='App'>
      <h1>Login Form</h1>
      <LoginForm />
    </div>
  );
}

export default App;
