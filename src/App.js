import React from 'react';
import { Header } from './components/header/Header';
import { CurrencyTable } from './components/table/Table';
import { Cell } from './components/select/Cell';
import './app.scss'
import InputAmount from './components/input/Input';

function App() {
  return (
    <div className="app">
			<Header/>
			<CurrencyTable/>
			<Cell/>
			<InputAmount/>
    </div>
  );
}

export default App;
