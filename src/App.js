import { useState } from 'react';
import { Immer } from 'immer';
import './index.css';
import AppForm from './AppForm';
import Column from './Column';
import { useImmer } from 'use-immer';
import produce from 'immer';

export default function App() {
	const [tasks, setTasks] = useState({
		'no-idea': [],
		learning: [],
	});
	const [entry, setEntry] = useState('');
	const [showButton, setShowButton] = useImmer({});
	const [showInput, setShowInput] = useImmer({});
	// console.log(tasks);
	// console.log(entry);
	// console.log(showButton);
	console.log(showInput);

	function handleFormSubmit(event) {
		const e = event.target;
		event.preventDefault();
		setTasks(
			produce(tasks, (draft) => {
				draft[e.id].push(entry);
			})
		);
		setEntry('');
		setShowButton((draft) => {
			draft[e.id] = true;
		});
		setShowInput((draft) => {
			draft[e.id] = false;
		});
	}

	function handleShowInputClick(event) {
		const e = event.target;
		setShowButton(
			produce(showButton, (draft) => {
				draft[e.id] = false;
			})
		);
		setShowInput(
			produce(showButton, (draft) => {
				draft[e.id] = true;
			})
		);
	}

	function handleEntryChange(event) {
		const e = event.target;
		setEntry(e.value);
	}

	// const tasksList = tasks.map((task) => <li key={task}>{task}</li>);

	return (
		<div className='container'>
			<Column title='No Idea' tasksList={<li>Hola</li>}>
				<AppForm
					showInput={showInput}
					entry={entry}
					onFormSubmit={handleFormSubmit}
					onShowInputClick={handleShowInputClick}
					onEntryChange={handleEntryChange}
					id='no-idea'
				/>
			</Column>
			<Column title='Learning' tasksList={<li>Hola</li>}>
				<AppForm
					showInput={showInput}
					entry={entry}
					onFormSubmit={handleFormSubmit}
					onShowInputClick={handleShowInputClick}
					onEntryChange={handleEntryChange}
					id='learning'
				/>
			</Column>
		</div>
	);
}
