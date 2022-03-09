import { useState } from 'react';
import AddCardButton from './AddCardButton';

export default function Column({ title, dataList }) {
	const [task, setTask] = useState(dataList);
	const handleInputClick = () => {
		const value = document.getElementsByClassName('AddCardButton__input').value;
		console.log(value);
	};
	return (
		<div className='column'>
			<h1 className='column column__title'>{title}</h1>
			<div className='column column__body'>{task}</div>
			<div className='AddCardButton__container'>
				<input onC className='AddCardButton__input' />
				<button className='AddCardButton__btn' onClick={handleInputClick}>
					+ Add a Card
				</button>
			</div>
		</div>
	);
}
