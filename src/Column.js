import { useState } from 'react';
import Task from './Task';
import AddButton from './AddButton';

export default function Column({ title }) {
	const [task, setTask] = useState([]);
	const [name, setName] = useState('');
	const [addBtn, setAddBtn] = useState(true);
	const [addInput, setAddInput] = useState(false);

	function handleSubmitAdd(e) {
		e.preventDefault();
		setTask([...task, name]);
		setName('');
		setAddBtn(true);
		setAddInput(false);
	}
	function handleShowInputClick() {
		setAddBtn(false);
		setAddInput(true);
	}

	const taskList = task.map((item) => <Task title={item} />);
	let btn;
	if (addInput) {
		btn = (
			<form onSubmit={handleSubmitAdd} className='AddCardButton__container'>
				<input
					onChange={(e) => setName(e.target.value)}
					placeholder='Task'
					value={name}
					className='AddCardButton__input'
				/>
				<button type='submit' className='AddCardButton__btn'>
					Enter
				</button>
			</form>
		);
	} else {
		btn = (
			<button onClick={handleShowInputClick} className='AddCardButton__btn'>
				+ Add a Task
			</button>
		);
	}
	return (
		<div className='column'>
			<h1 className='column column__title'>{title}</h1>
			<div className='column column__body'>{taskList}</div>
			{btn}
		</div>
	);
}
