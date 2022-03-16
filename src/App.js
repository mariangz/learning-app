import { useState } from 'react';
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
	const [validation, setValidation] = useState('');
	// console.log(tasks);
	// console.log(entry);
	// console.log(showButton);
	console.log(showInput);

	function handleFormSubmit(event) {
		const e = event.target;
		event.preventDefault();
		if (!entry) {
			setValidation('Please, enter a task');
			return;
		}
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

	return (
		<div className='container'>
			<Column
				title='No Idea'
				tasksList={tasks['no-idea'].map((item) => (
					<li>{item}</li>
				))}
			>
				<AppForm
					showInput={showInput}
					entry={entry}
					onFormSubmit={handleFormSubmit}
					onShowInputClick={handleShowInputClick}
					onEntryChange={handleEntryChange}
					id='no-idea'
					validation={validation}
				/>
			</Column>
			<Column
				title='Learning'
				tasksList={tasks['learning'].map((item) => (
					<li>{item}</li>
				))}
			>
				<AppForm
					showInput={showInput}
					entry={entry}
					onFormSubmit={handleFormSubmit}
					onShowInputClick={handleShowInputClick}
					onEntryChange={handleEntryChange}
					id='learning'
					validation={validation}
				/>
			</Column>
		</div>
	);
}
