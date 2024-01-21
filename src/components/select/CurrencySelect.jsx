import React, { useState } from 'react'

/* Создаем функциональный компонент CurrencySelect, который принимает объект с двумя свойствами:
currencies (массив валют) и onSelectCurrency (функция, вызываемая при выборе валюты)*/
export const CurrencySelect = (props) => {
	const {currencies, onSelectCurrency} = props;

/*Хук useState для отслеживания выбранной валюты:
Мы используем хук useState для создания переменной selectedCurrency и функции setSelectedCurrency,
начальное значение которой устанавливается в пустую строку.*/
	const [selectedCurrency,setSelectedCurrency] = useState('');

/*Обработчик изменения валюты: Функция handleCurrencyChange вызывается при изменении значения выпадающего списка.
Она обновляет состояние selectedCurrency новым значением и вызывает onSelectCurrency с новым значением.*/
	const handleCurrencyChange = (event) => {
		const newCurrency = event.target.value;
		setSelectedCurrency(newCurrency);
		onSelectCurrency(newCurrency);
	};

	return (
		<select value={selectedCurrency} onChange={handleCurrencyChange}>
			<option value="" disabled>
				Выберите валюту
			</option>
			{Object.entries(currencies).map(([ currency ])=> (
				<option key={currency} value={currency}>
					{currency}
				</option>
			))}
		</select>
	);
};
