import { useState } from 'react';
import './index.css';
import AppForm from './AppForm';
import Column from './Column';

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [entry, setEntry] = useState([]);
	const [showButton, setShowButton] = useState(true);
	const [showInput, setShowInput] = useState(false);

	function handleFormSubmit(e) {
		e.preventDefault();
		setTasks([...tasks, entry]);
		setEntry('');
		setShowButton(true);
		setShowInput(false);
	}

	function handleShowInputClick() {
		setShowButton(false);
		setShowInput(true);
	}

	function handleEntryChange(e) {
		setEntry(e.target.value);
	}

	const tasksList = tasks.map((task) => <li key={task}>{task}</li>);

	return (
		<div className='container'>
			<Column title='No Idea' tasksList={tasksList}>
				<AppForm
					showInput={showInput}
					entry={entry}
					onFormSubmit={handleFormSubmit}
					onShowInputClick={handleShowInputClick}
					onEntryChange={handleEntryChange}
				/>
			</Column>
		</div>
	);
}
