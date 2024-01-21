import { useFetchData } from '../../hooks/use-fetch-data';
import './header.scss'
import { Container } from './../container/container';

export const Header = () => { // Объявляется функциональный компонент Header.
	const {fetchData, lastUpdated} = useFetchData();


  const handleUpdateClick = () => { // Определена функция handleUpdateClick, которая вызывает fetchData при клике на кнопку "Обновить".
     fetchData();
  };

  return (
    <header className='header'>
			<Container>
				<div className='header__content'>
      	<h1>Валютный Конвертер</h1>
				 {/* Заголовок компонента. */}
      	<p>{lastUpdated.toLocaleString()}</p>
			 	{/* Отображение времени последнего обновления. */}
      	<button onClick={handleUpdateClick}>Обновить</button> 
				{/* Кнопка для ручного обновления данных. */}
				</div>
			</Container>
			
    </header>
  );
};

