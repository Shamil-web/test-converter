import React from 'react'
import { useFetchData } from '../../hooks/use-fetch-data'
import { CurrencySelect } from './CurrencySelect';

export const Cell = () => {
	const {
		currencyRates
	} = useFetchData();
	console.log('currencyRates', currencyRates)

	/*Функция handleCurrencySelect будет вызываться при выборе валюты.
   В данном случае, она просто выводит выбранную валюту в консоль.*/
	const handleCurrencySelect = (selectedCurrency) => {
		console.log(`Выбрана валюта: ${selectedCurrency}`);
  };
	return (
		<div>
			<CurrencySelect currencies={currencyRates} onSelectCurrency={handleCurrencySelect} />
			<CurrencySelect currencies={currencyRates} onSelectCurrency={handleCurrencySelect} />
		</div>
	);
};