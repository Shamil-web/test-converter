import React from 'react';
import { useFetchData } from '../../hooks/use-fetch-data';
import './Table.scss';

export const CurrencyTable = () => {
	const {
		currencyRates
	} = useFetchData();

	const rates = () => 
		Object.entries(currencyRates).map(rate => {
			console.log('rate', rate)
			return rate[1]})

rates();

const ratesFilter = () => rates.filter(rate => rate.CharCode.includes(searchValue.toUpperCase()))
console.log('ratesFilter', ratesFilter)
		return (
			<div className='table'>
				<h2>Таблица курсов валют</h2>
				<table>
					<thead>
						<tr>
							<th>Валюта</th>
							<th>Курс</th>
							<th className='currencyNaming'>Наименование</th>
						</tr>
					</thead>
					<tbody>
						{Object.entries(currencyRates).map(([ currency, rate ], index) => {

							return <tr key={index}>
								<td>{currency}</td>
								<td>{rate.Value}</td>
								<td>{rate.Name}</td>
							</tr>
						})}
					</tbody>
				</table>
			</div>
		);
	}
