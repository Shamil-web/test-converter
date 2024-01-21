	import {useState, useEffect} from 'react';
	import axios from 'axios';
	
	
	export const useFetchData = () => {
		const [lastUpdated, setLastUpdated] = useState(new Date()); //Используется хук состояния useState для создания состояния lastUpdated, которое представляет собой текущее время последнего обновления. setLastUpdated - функция для обновления этого состояния.
		const [currencyRates, setCurrencyRates] = useState({});
		const fetchData = async () => { // Определена функция fetchData, которая асинхронно отправляет запрос к API и обновляет состояния lastUpdated и currencyRates в соответствии с полученными данными.
			try {
				const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
				const responseData = response.data;
				setLastUpdated(new Date(responseData.PreviousDate));
				setCurrencyRates(responseData.Valute);
			} catch (error) {
				console.error('Ошибка при загрузке данных', error);
			}
		};
		useEffect(() => {
			fetchData();
		}, []);

		return {
			fetchData,
			lastUpdated,
			currencyRates,
		}
	}
	