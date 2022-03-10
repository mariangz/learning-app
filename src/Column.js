import { useState } from 'react';
import Task from './Task';
export default function Column({ title }) {
	const [task, setTask] = useState([]);
	const [name, setName] = useState('');
	function handleSubmitAdd(e) {
		e.preventDefault();
		setTask([...task, name]);
		setName('');
	}
	const taskList = task.map((item) => <Task title={item} />);

	return (
		<div className='column'>
			<h1 className='column column__title'>{title}</h1>
			<div className='column column__body'>{taskList}</div>
			<form onSubmit={handleSubmitAdd} className='AddCardButton__container'>
				<input
					onChange={(e) => setName(e.target.value)}
					placeholder='Task'
					value={name}
					className='AddCardButton__input'
				/>
				<button type='submit' className='AddCardButton__btn'>
					+ Add a Task
				</button>
			</form>
		</div>
	);
}
